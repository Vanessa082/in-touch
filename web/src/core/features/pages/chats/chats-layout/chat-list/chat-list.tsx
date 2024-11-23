import { Chat, MessageViewStatus } from "@/interfaces/chat.types";
import { Fetcher } from "@/lib/fetch";
import { Check, CheckCheck, Loader } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../components/ui/avatar";
// import { Check } from "lucide-react";

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

function ChatCard({ chat }: { chat: Chat }) {
  const getLatestMessageStatus = (status: MessageViewStatus) => {
    if (status === "PENDING") {
      return <Loader className="text-app-text-dark-200" />;
    } else if (status === "SENT") {
      return <Check className="text-app-text-dark-200" />;
    } else if (status === "RECEIVED") {
      return <CheckCheck className="text-app-text-dark-200" />;
    } else if (status === "SEEN") {
      return <CheckCheck className="text-app-text-blue-500" />;
    } else {
      return "UNKNOWN";
    }
  };

  return (
    <Link href={`/chats/${chat.id}`} className="cursor-pointer w-full max-w-[600px]">
      <div className="flex items-center justify-between gap-3 p-4 border-b hover:bg-blue-50 cursor-pointer transition-all">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-semibold text-app-text-dark-500">{chat.chatName}</span>
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

async function ChatList() {
  const { data: chats } = await Fetcher<Chat[]>("/api/chats");

  return (
    <>
      <h2 className="mb-4 font-semibold">Inbox</h2>

      {chats.map((c) => (
        <ChatCard key={c.id} chat={c} />
      ))}
    </>
  );
}

export { ChatListSkeleton, ChatList };
