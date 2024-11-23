import { MessagesData } from "../../_dummy-data/message.data";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const messages = MessagesData.filter((mg) => mg.chatId === id);

  return Response.json({
    status: 200,
    message: "chats retrieved",
    data: messages,
  });
}
