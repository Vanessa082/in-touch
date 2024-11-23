import { Chat } from "@/interfaces/chat.types";
import { Fetcher } from "@/lib/fetch";
import Link from "next/link";
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
  return (
    <Link href={`/chats/${chat.id}`} className="cursor-pointer">
      <div>
        <span>{chat.chatName}</span>
        <div>
          <p>{chat.latestMessage.textContent}</p>
          <p>{chat.latestMessage.status}</p>
        </div>
        {/* <pre>{JSON.stringify(chat, null, 2)}</pre> */}
      </div>
    </Link>
  );
}

async function ChatList() {
  const { data: chats } = await Fetcher<Chat[]>("/api/chats");

  return (
    <>
      <h2 className="mb-4 font-semibold">Contacts List</h2>

      {chats.map((c) => (
        <ChatCard key={c.id} chat={c} />
      ))}
    </>
  );
}

export { ChatListSkeleton, ChatList };
