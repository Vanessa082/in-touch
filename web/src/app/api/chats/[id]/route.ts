import { ChatsData } from "../../_dummy-data/chats.data";
import { MessagesData } from "../../_dummy-data/message.data";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: chatId } = await params;

  const messages = MessagesData.filter((mg) => mg.chatId === chatId);
  const chat = ChatsData.find((c) => c.id === chatId)!;

  return Response.json({
    status: 200,
    message: "chats retrieved",
    data: {
      messages,
      chat,
    },
  });
}
