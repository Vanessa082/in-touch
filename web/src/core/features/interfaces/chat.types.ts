import type { DateType, BaseMessage, MediaContent } from "./extras.types";
import type { ProfilePreview } from "./user.types";

const enum MessageViewStatus {
  PENDING = "PENDING",
  SENT = "SENT",
  NOT_OPENED = "NOT_OPENED",
  SEEN = "SEEN",
}

interface Chat {
  id: string;
  name: string; // will be formed in the backend where it will be the name of the sender if it's not a group chat
  profileImg: MediaContent;
  latestMessage: {
    textContent: string;
    status: MessageViewStatus;
    time: DateType;
    unSeenCount: number | null;
  };
  isGroupChat: boolean;
  groupAdmins: Array<ProfilePreview>;
  members: Array<ProfilePreview>;
}

interface Message extends BaseMessage {
  chatId: string;
  status: {
    value: MessageViewStatus;
    seenAt: DateType | null;
  };
}

export { MessageViewStatus };

export type { Chat, Message };
