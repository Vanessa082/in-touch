import { type PropsWithChildren, Suspense } from "react";
import { ChatListSkeleton, ChatList } from "./chat-list/chat-list";
import { type Chat } from "@/interfaces/chat.types";
import { Fetcher } from "@/lib/fetch";

export default async function ChatsLayout({ children }: PropsWithChildren) {
  const { data: chats } = await Fetcher<Chat[]>("/api/chats");

  return (
    <div className="flex w-full items-start justify-start gap-1 border">
      <div className="flex min-h-[95vh] w-full min-w-[300px] max-w-[500px] flex-col items-start justify-start gap-4 border p-3">
        <Suspense fallback={<ChatListSkeleton />}>
          <ChatList chats={chats} />
        </Suspense>
      </div>

      <div className="min-h-[95vh] w-full border">{children}</div>
    </div>
  );
}
