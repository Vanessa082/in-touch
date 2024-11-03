import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center mx-auto bg-black select-none">
      <div className="z-10 w-app-w mx-auto flex flex-col items-center ssm:items-start justify-center gap-4 text-app-text-white-500">
        <div className="w-fit flex flex-col items-start justify-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h4 className="font-bold text-3xl">Did you  <span className="text-app-blue-500">loose</span> Touch?</h4>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>No problem</span>

          <Button asChild>
            <Link href="/"><ArrowBigLeft />Get Back InTouch</Link>
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
  )
}
