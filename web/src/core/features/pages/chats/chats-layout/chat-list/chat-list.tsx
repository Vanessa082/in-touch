import { Chat } from "@/interfaces/chat.types";
import { Fetcher } from "@/lib/fetch";
import { ChatCard } from "./components"

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

export { ChatList };
