import { SignUp } from "@clerk/nextjs";

export default function SIgnUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-4">
      <SignUp />
    </div>
  );
}
