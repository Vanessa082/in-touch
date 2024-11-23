import { IntouchAdmin } from "../../_dummy-data/users.data";

export async function GET() {
  return new Promise((resole) => {
    setTimeout(() => {
      resole(
        Response.json({
          status: 200,
          message: "Current User",
          data: IntouchAdmin,
        })
      );
    }, 2000);
  }) as Promise<Response>;
}
