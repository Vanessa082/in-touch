import { Chat, MessageViewStatus } from "@/interfaces/chat.types";
import { Check, CheckCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, getProfileURLFromInitials } from "@/lib/utils";

import Link from "next/link";

function ChatListSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => i).map((v) => (
        <div
          key={v}
          className="flex w-full animate-pulse items-center justify-start gap-2 rounded-sm border p-2"
        >
          <div className="size-[50px] rounded-full bg-app-dark-200" />

          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="h-[20px] w-[50%] rounded-sm bg-app-dark-200" />
            <p className="h-[30px] w-full rounded-sm bg-app-dark-200" />
          </div>
        </div>
      ))}
    </>
  );
}

function ChatCard({ chat }: { chat: Chat; }) {
  const getLatestMessageStatus = (status: MessageViewStatus) => {
    switch (status) {
      case MessageViewStatus.SENT:
        return <Check className="text-app-text-dark-200" />;
      case MessageViewStatus.NOT_OPENED:
        return <CheckCheck className="text-app-text-dark-200" />;
      case MessageViewStatus.SEEN:
        return <CheckCheck className="text-app-text-blue-500" />;
      default:
        return <Check className="text-app-text-dark-200" />;
    }
  };

  const getPhoto = () => {
    return chat.profileImg.url || getProfileURLFromInitials(chat.name);
  }

  return (
    <Link href={`/chats/${chat.id}`} className="cursor-pointer w-full max-w-[600px]">
      <div className="flex items-center justify-between gap-3 p-4 border-b hover:bg-accent cursor-pointer transition-all">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={getPhoto()} alt="@shadcn" />
            <AvatarFallback>
              {getInitials(chat.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-semibold text-app-text-dark-500">{chat.name}</span>
            <span className="text-sm text-app-text-dark-300 truncate">
              {chat.latestMessage.textContent}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs text-app-dark-200"></span>

          <span>{getLatestMessageStatus(chat.latestMessage.status)}</span>
        </div>
      </div>
    </Link>
  );
}

export {
  ChatListSkeleton,
  ChatCard,
}
