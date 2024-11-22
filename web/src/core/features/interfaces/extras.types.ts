import { ProfilePreview } from "./user.types";

type DateType = Date | string;

interface MediaContent {
  mediaType: String;
  url: String;
}

interface PaginatedResponse<T> {
  count: number;
  page: number;
  data: Array<T>;
}

interface BaseMessage {
  id: string;
  textContent: string;
  reactions: Array<string>;
  senderId: string;
  sender?: ProfilePreview; // virtual key
  isReplyOf: string | null; // id of the chat it replies
  mediaContent: Array<MediaContent>;
  createdAt: DateType;
  updatedAt: DateType;
}

export type { DateType, MediaContent, PaginatedResponse, BaseMessage };
