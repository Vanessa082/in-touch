"use client";

import type { Chat, Message } from "@/interfaces/chat.types";
import { MainTag } from "@/components/atoms";
import { Fetcher } from "@/lib/fetch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, getProfileURLFromInitials } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ChatPage(props: Props) {
  const { id } = await props.params;

  const {
    data: { messages, chat },
  } = await Fetcher<{
    messages: Message[];
    chat: Chat;
  }>(`/api/chats/${id}`);

  const getPhoto = () => {
    return chat.profileImg.url || getProfileURLFromInitials(chat.name);
  };

  return (
    <MainTag className="w-full h-[95vh] p-3 overflow-y-auto">
      {/* Chat Header */}
      <div className="bg-app-blue-500 flex items-center gap-2 p-4">
        <Avatar>
          <AvatarImage src={getPhoto()} alt={chat.name} />
          <AvatarFallback>{getInitials(chat.name)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-bold">{chat.name}</h2>
          <p>Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="mt-4 space-y-4">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === "user_1"
                  ? "justify-end"
                  : "justify-start"
                }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${message.senderId === "user_1"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                  }`}
              >
                <p>{message.textContent}</p>
                {/* Reactions */}
                {message.mediaContent.length > 0 && (
                  <div className="mt-1 flex gap-2">
                    {message.mediaContent.map((reaction, idx) => (
                      <span key={idx} className="text-xl">
                        {reaction}
                      </span>
                    ))}
                  </div>
                )}
                {/* Seen Status */}
                {message.senderId === "user_1" && (
                  <div className="text-xs text-gray-400 mt-1">
                    {message.status.value === "SEEN" ? "Seen" : "Sent"}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No messages yet...</p>
        )}
      </div>
    </MainTag>
  );
}
