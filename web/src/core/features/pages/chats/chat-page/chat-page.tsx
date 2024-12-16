import type { Chat, Message } from "@/interfaces/chat.types";
import { MainTag } from "@/components/atoms";
import { Fetcher } from "@/lib/fetch";

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

  return (
    <MainTag className="w-full h-[95vh] p-3 overflow-y-auto">
      Chats Page Loading messages with id: {id}
      {JSON.stringify(props, null, 4)}
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </MainTag>
  );
}
