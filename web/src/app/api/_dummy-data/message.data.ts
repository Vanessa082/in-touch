import { MessageViewStatus } from "@/interfaces/chat.types";

const MessagesData = [
  // chat_1
  {
    id: "msg_1",
    chatId: "chat_1",
    textContent: "I need help getting started with intouch!",
    status: {
      value: MessageViewStatus.SEEN,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_2",
    isReplyOf: null,
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "msg_11",
    chatId: "chat_1",
    textContent: "Will you be available tomorrow?",
    status: {
      value: MessageViewStatus.SEEN,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_2",
    isReplyOf: "msg_1",
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "msg_12",
    chatId: "chat_1",
    textContent: "Are you there",
    status: {
      value: MessageViewStatus.SEEN,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_2",
    isReplyOf: null,
    mediaContent: ["👍🏿"],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "msg_13",
    chatId: "chat_1",
    textContent: "Hey man, yh will be",
    status: {
      value: MessageViewStatus.SEEN,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_1",
    isReplyOf: "msg_11",
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "msg_14",
    chatId: "chat_1",
    textContent: "Ok we can fix an appointment to meet up somewhere",
    status: {
      value: MessageViewStatus.NOT_OPENED,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_1",
    isReplyOf: null,
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },

  // chat_2
  {
    id: "msg_2",
    chatId: "chat_2",
    textContent: "How've you been!",
    status: {
      value: MessageViewStatus.SEEN,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_3",
    isReplyOf: null,
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },

  // chat_3
  {
    id: "msg_3",
    chatId: "chat_3",
    textContent: "How's it going, I need to get a verified badge!",
    status: {
      value: MessageViewStatus.NOT_OPENED,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_4",
    isReplyOf: null,
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },

  // chat_4
  {
    id: "msg_4",
    chatId: "chat_4",
    textContent: "Hello InTouch Team! Up for hire?",
    status: {
      value: MessageViewStatus.NOT_OPENED,
      seenAt: new Date().toISOString(),
    },
    reactions: ["💙"],
    senderId: "user_5",
    isReplyOf: null,
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "msg_4",
    chatId: "chat_4",
    textContent: "I'ld like you to join my team",
    status: {
      value: MessageViewStatus.NOT_OPENED,
      seenAt: new Date().toISOString(),
    },
    reactions: [],
    senderId: "user_5",
    isReplyOf: null,
    mediaContent: [],
    createdAt: "",
    updatedAt: "",
  },
] as const;

export { MessagesData };
