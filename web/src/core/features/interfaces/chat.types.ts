import type { MediaContent, DateType, BaseMessage } from "./extras.types";
import type { ProfilePreview } from "./user.types";

interface Chat {
  id: string;
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
