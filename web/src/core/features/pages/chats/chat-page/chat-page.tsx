import { MainTag } from "@/components/atoms";

export default function ChatPage(props) {
  return (
    <MainTag>
      Chats Page Loading chat with id: {props.id}
      {JSON.stringify(props, null, 4)}
    </MainTag>
  );
}
