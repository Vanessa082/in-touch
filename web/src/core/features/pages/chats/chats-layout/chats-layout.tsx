import { type PropsWithChildren, Suspense } from "react";
import { ChatList } from "./chat-list/chat-list";
import { ChatListSkeleton } from "./chat-list/components";

export default async function ChatsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full items-start justify-start gap-1">
      <div className="flex min-h-[95vh] w-full min-w-[300px] max-w-[500px] flex-col items-start justify-start gap-4 border p-3">
        <Suspense fallback={<ChatListSkeleton />}>
          <ChatList />
        </Suspense>
      </div>

      <div className="w-full border">{children}</div>
    </div>
  );
}
