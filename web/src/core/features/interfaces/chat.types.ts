import type { DateType, BaseMessage } from "./extras.types";
import type { ProfilePreview } from "./user.types";

interface Chat {
  id: string;
  chatName: string; // will be formed in the backend where it will be the name of the sender if it's not a group chat
  latestMessage: string;
  isGroupChat: boolean;
  groupAdmins: Array<ProfilePreview>;
  members: Array<ProfilePreview>;
}

interface Message extends BaseMessage {
  chatId: string;
  seen: {
    value: boolean;
    at: DateType;
  };
}

export type { Chat, Message };
