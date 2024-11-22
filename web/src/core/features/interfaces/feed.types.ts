import type { BaseMessage, DateType, MediaContent, Reactions } from "./extras.types";
import type { ProfilePreview } from "./user.types";

interface Post {
  id: string;
  userId: string;
  user?: ProfilePreview;
  textContent: string;
  mediaContent: Array<MediaContent>;
  reactions: Reactions;
  createdAt: DateType;
  updatedAt: DateType;
}

interface Comment extends BaseMessage {
  postId: string;
}

export type { Post, Comment };
