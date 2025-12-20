import { useEffect, useState, useCallback } from "react";
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
import { ADMIN_PASSWORD, COLLECTION_NAME } from "./ConstantsFeedback";
import FeedbackForm from "./FeedbackForm";
import FeedbackItem from "./FeedbackItem";
import type { GuestMessage } from "./TypeFeedback";

const getFeedbackList = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as GuestMessage[];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};

export default function Feedback() {
  const [list, setList] = useState<GuestMessage[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const refreshList = useCallback(async () => {
    const data = await getFeedbackList();
    setList(data);
  }, []);

  // 초기 실행
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await getFeedbackList();
        setList(data);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    };

    fetchInitialData();
  }, []);

  const toggleAdminMode = () => {
    if (isAdmin) {
      setIsAdmin(false);
      alert("관리자 모드 해제");
    } else {
      const input = prompt("관리자 비밀번호:");
      if (input === ADMIN_PASSWORD) {
        setIsAdmin(true);
        alert("관리자 모드 ON");
      } else if (input !== null) {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  };

  const handleCreate = async (data: {
    name: string;
    password: string;
    text: string;
    isSecret: boolean;
  }) => {
    try {
      await addDoc(collection(db, COLLECTION_NAME), {
        ...data,
        createdAt: new Date(),
      });
      refreshList();
      alert("등록되었습니다!");
    } catch (error) {
      console.error("Add Error:", error);
      alert("등록 실패");
    }
  };

  const handleDelete = async (id: string, correctPassword?: string) => {
    if (!isAdmin) {
      const input = prompt("비밀번호를 입력해주세요.");
      if (input === null) return;
      if (input !== correctPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
    } else {
      if (!window.confirm("관리자 권한으로 삭제하시겠습니까?")) return;
    }

    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      refreshList();
      alert("삭제되었습니다.");
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };
  const handleUpdate = async (id: string, newText: string) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, {
        text: newText,
        updatedAt: new Date(),
      });

      refreshList(); // 목록 새로고침
      alert("수정되었습니다.");
    } catch (error) {
      console.error("Update Error:", error);
      alert("수정 실패");
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <div className="flex flex-col gap-4">
        <h3
          onClick={toggleAdminMode}
          className="font-bold text-gray-800 text-2xl ml-1 mb-2 select-none flex items-center gap-1"
        >
          Feedback Messages{" "}
          <span className="text-blue-600 text-sm align-super">
            {list.length}
          </span>
          {isAdmin && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              Admin ON
            </span>
          )}
        </h3>

        <FeedbackForm
          onSubmit={handleCreate}
          style={{
            animationDelay: "100ms",
            animationFillMode: "both",
          }}
        />

        <ul className="grid grid-cols-1 gap-3">
          {list.map((item, index) => (
            <FeedbackItem
              key={item.id}
              item={item}
              index={index}
              isAdmin={isAdmin}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
          {list.length === 0 && (
            <p className="text-center py-10 text-gray-400 border border-dashed rounded-xl">
              첫 글을 남겨주세요!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
