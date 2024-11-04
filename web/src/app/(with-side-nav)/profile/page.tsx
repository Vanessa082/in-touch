import { MainTag } from "@/components/atoms";
import { UserButton } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <MainTag>
      <UserButton />
    </MainTag>
  );
}
