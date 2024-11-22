import { type Chat } from "@/interfaces/chat.types";
// import { Fetcher } from "@/lib/fetch";

function ChatListSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => i).map((v) => (
        <div
          key={v}
          className="flex w-full animate-pulse flex-col items-start justify-start gap-2 rounded-sm border p-2"
        >
          <div className="flex w-full items-center justify-start gap-2">
            <div className="size-[40px] rounded-full bg-app-dark-200" />
            <p className="h-[20px] w-[50%] rounded-sm bg-app-dark-200" />
          </div>

          <p className="h-[30px] w-full rounded-sm bg-app-dark-200" />
        </div>
      ))}
    </>
  );
}

function ChatCard({ chat }: { chat: Chat }) {
  return (
    <div>
      <pre>{JSON.stringify(chat, null, 2)}u</pre>
    </div>
  );
}

async function ChatList({ chats }: { chats: Chat[]}) {
  // const { data: chats } = await Fetcher<Chat[]>("/api/chats");

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
