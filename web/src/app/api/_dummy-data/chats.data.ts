import type { ProfilePreview } from "@/interfaces/user.types";
import { type Chat } from "@/interfaces/chat.types";

import { UsersData, IntouchAdmin } from "./users.data";
import { MessagesData } from "./message.data";

const getChatUser = (userId: (typeof UsersData)[number]["id"]) => {
  return UsersData.find(({ id }) => id === userId) as ProfilePreview;
};

const getLastMessage = (chatId: typeof MessagesData[number]["chatId"]) => {
  const chatMessages = MessagesData.filter(({ chatId: cId }) => cId === chatId);

  const lastMessage = chatMessages.at(-1)!;

  return {
    textContent: lastMessage.textContent,
    status: lastMessage.status.value,
    time: lastMessage.createdAt,
    unSeenCount: chatMessages.length,
  }
}

const ChatsData: Chat[] = [
  {
    id: "chat_1",
    latestMessage: getLastMessage("chat_1"),
    name: getChatUser("user_2").name,
    profileImg: {
      mediaType: "",
      url: getChatUser("user_2").profileImg.url
    },
    isGroupChat: false,
    groupAdmins: [],
    members: [
      getChatUser("user_2"),
      IntouchAdmin,
    ],
  },
  {
    id: "chat_2",
    latestMessage: getLastMessage("chat_2"),
    name: getChatUser("user_3").name,
    profileImg: {
      mediaType: "",
      url: getChatUser("user_3").profileImg.url,
    },
    isGroupChat: false,
    groupAdmins: [],
    members: [
      getChatUser("user_3"),
      IntouchAdmin,
    ],
  },
  {
    id: "chat_3",
    latestMessage: getLastMessage("chat_3"),
    name: getChatUser("user_4").name,
    profileImg: {
      mediaType: "",
      url: getChatUser("user_4").profileImg.url,
    },
    isGroupChat: false,
    groupAdmins: [],
    members: [
      getChatUser("user_4"),
      IntouchAdmin,
    ],
  },
  {
    id: "chat_4",
    latestMessage: getLastMessage("chat_4"),
    name: getChatUser("user_5").name,
    profileImg: {
      mediaType: "",
      url: getChatUser("user_5").profileImg.url,
    },
    isGroupChat: false,
    groupAdmins: [],
    members: [
      getChatUser("user_5"),
      IntouchAdmin,
    ],
  },
  {
    id: "chat_5",
    latestMessage: getLastMessage("chat_4"),
    name: getChatUser("user_6").name,
    profileImg: {
      mediaType: "",
      url: getChatUser("user_6").profileImg.url,
    },
    isGroupChat: false,
    groupAdmins: [],
    members: [
      getChatUser("user_6"),
      IntouchAdmin,
    ],
  },
];

export { ChatsData };
