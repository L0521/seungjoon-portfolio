import { create } from "zustand";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ADMIN_PASSWORD, COLLECTION_NAME } from "../Feedback/ConstantsFeedback";
import type { GuestMessage } from "../Feedback/TypeFeedback";

interface FeedbackState {
  // 상태 (States)
  list: GuestMessage[];
  isAdmin: boolean;
  isLoading: boolean;

  // 액션 (Actions)
  // 1. 목록 불러오기
  fetchList: () => Promise<void>;

  // 2. 관리자 모드 관련
  loginAdmin: (passwordInput: string) => boolean; // 성공 여부 리턴
  logoutAdmin: () => void;

  // 3. CRUD (작성, 삭제, 수정)
  createFeedback: (data: {
    name: string;
    password: string;
    text: string;
    isSecret: boolean;
  }) => Promise<boolean>;

  deleteFeedback: (
    id: string,
    passwordInput?: string
  ) => Promise<{ success: boolean; message?: string }>;

  updateFeedback: (id: string, newText: string) => Promise<boolean>;
}

export const useFeedbackStore = create<FeedbackState>((set, get) => ({
  list: [],
  isAdmin: false,
  isLoading: false,

  // 1. 목록 불러오기
  fetchList: async () => {
    set({ isLoading: true });
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GuestMessage[];

      set({ list: data });
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  // 2. 관리자 모드 로그인
  loginAdmin: (passwordInput: string) => {
    if (passwordInput === ADMIN_PASSWORD) {
      set({ isAdmin: true });
      return true;
    }
    return false;
  },

  logoutAdmin: () => {
    set({ isAdmin: false });
  },

  // 3. 글 작성
  createFeedback: async (data) => {
    try {
      await addDoc(collection(db, COLLECTION_NAME), {
        ...data,
        createdAt: new Date(),
      });
      // 작성 후 목록 새로고침
      await get().fetchList();
      return true;
    } catch (error) {
      console.error("Add Error:", error);
      return false;
    }
  },

  // 4. 글 삭제
  deleteFeedback: async (id, passwordInput) => {
    const { list, isAdmin, fetchList } = get();
    const targetItem = list.find((item) => item.id === id);

    if (!targetItem)
      return { success: false, message: "게시글을 찾을 수 없습니다." };

    // 권한 체크 로직 (관리자가 아니고 && 비밀번호가 틀리면)
    if (!isAdmin) {
      if (!passwordInput)
        return { success: false, message: "비밀번호를 입력해주세요." };
      if (passwordInput !== targetItem.password) {
        return { success: false, message: "비밀번호가 일치하지 않습니다." };
      }
    }

    // 실제 삭제 로직
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      await fetchList(); // 목록 새로고침
      return { success: true };
    } catch (error) {
      console.error("Delete Error:", error);
      return { success: false, message: "삭제 중 오류가 발생했습니다." };
    }
  },

  // 5. 글 수정
  updateFeedback: async (id, newText) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, {
        text: newText,
        updatedAt: new Date(),
      });
      await get().fetchList(); // 목록 새로고침
      return true;
    } catch (error) {
      console.error("Update Error:", error);
      return false;
    }
  },
}));
