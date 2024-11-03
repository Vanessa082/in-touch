import { auth, currentUser } from "@clerk/nextjs/server";

export default async function FeedPage() {
  const _ = await auth();

  let user = null;

  if (_?.userId) {
    user = await currentUser();
  }
  
  return (
    <div className="">
      Feed Page

      <pre>
        {JSON.stringify({
          _,
          user,
        }, null, 2)}
      </pre>
    </div>
  );
};
