import { Timestamp } from "firebase/firestore";

export interface GuestMessage {
  id: string;
  name: string;
  text: string;
  password?: string;
  isSecret?: boolean;
  createdAt: Timestamp | null;
  updatedAt?: Timestamp | null;
}

export interface FeedbackFormProps {
  onSubmit: (data: {
    name: string;
    password: string;
    text: string;
    isSecret: boolean;
  }) => void;
}

export interface FeedbackItemProps {
  item: GuestMessage;
  isAdmin: boolean;
  onDelete: (id: string, password?: string) => void;
  onUpdate: (id: string, newText: string) => void;
}
