import { ChatsData } from "../_dummy-data/chats.data";

export async function GET() {
  return new Promise((resole) => {
    setTimeout(() => {
      resole(
        Response.json({
          status: 200,
          message: "chats retrieved",
          data: ChatsData,
        })
      );
    }, 2000);
  }) as Promise<Response>;
}
