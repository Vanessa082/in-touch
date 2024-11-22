import { type Chat, MessageViewStatus } from "@/interfaces/chat.types";
import { ProfilePreview } from "@/interfaces/user.types";

const IntouchAdmin: ProfilePreview = {
  id: "user_1",
  email: "intouch@gmail.com",
  username: "intouch",
  name: "Intouch",
  bio: "Creator of @intouch",
  profilePhoto: "https://github.com/shadcn.png",
};

const ChatsData: Chat[] = [
  {
    id: "chat_1",
    latestMessage: {
      textContent: "I need help getting started with intouch!",
      status: MessageViewStatus.NOT_OPENED,
    },
    chatName: "Bruno",
    isGroupChat: false,
    groupAdmins: [],
    members: [
      {
        id: "user_2",
        email: "bruno@gmail.com",
        username: "bruno",
        name: "Bruno",
        bio: "forever young",
        profilePhoto: "",
      },
      IntouchAdmin,
    ],
  },
  {
    id: "chat_2",
    latestMessage: {
      textContent: "How've you been!",
      status: MessageViewStatus.SEEN,
    },
    chatName: "Maria",
    isGroupChat: false,
    groupAdmins: [],
    members: [
      {
        id: "user_3",
        email: "maria@gmail.com",
        username: "maria",
        name: "Maria",
        bio: "quen",
        profilePhoto: "",
      },
      IntouchAdmin,
    ],
  },
  {
    id: "chat_3",
    latestMessage: {
      textContent: "How's it going, I need to get a verified badge!",
      status: MessageViewStatus.NOT_OPENED,
    },
    chatName: "Nfor Vini",
    isGroupChat: false,
    groupAdmins: [],
    members: [
      {
        id: "user_4",
        email: "nfor_vini@gmail.com",
        username: "nfor_vini",
        name: "Nfor Vini",
        bio: "Real madrid 7",
        profilePhoto: "",
      },
      IntouchAdmin,
    ],
  },
];

export { ChatsData };
