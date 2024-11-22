import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex h-screen w-full select-none items-center justify-center bg-black">
      <div className="z-10 mx-auto flex w-app-w flex-col items-center justify-center gap-4 text-app-strict-text-white-500 ssm:items-start">
        <div className="flex w-fit flex-col items-start justify-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h4 className="text-3xl font-bold">
            Did you <span className="text-app-blue-500">loose</span> Touch?
          </h4>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>No problem</span>

          <Button asChild className="text-app-strict-text-white-500">
            <Link href="/" className="font-semibold">
              <ArrowBigLeft />
              Get Back InTouch
            </Link>
          </Button>
        </div>
      </div>

      <Image
        fill
        draggable={false}
        src="/error/not-found.svg"
        alt="lost touch background"
        className="z-0 bg-cover bg-center object-cover"
      />
    </div>
  );
}
