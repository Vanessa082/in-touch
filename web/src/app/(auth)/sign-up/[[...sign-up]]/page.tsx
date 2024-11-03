import { SignUp } from "@clerk/nextjs";

export default function SIgnUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-4">
      <SignUp />
    </div>
  );
}
