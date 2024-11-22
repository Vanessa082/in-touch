import { MainTag } from "@/components/atoms";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ChatPage(props: Props) {
  const { id } = await props.params;

  return (
    <MainTag className="w-full">
      Chats Page Loading chat with id: {id}
      {JSON.stringify(props, null, 4)}
    </MainTag>
  );
}
