import { Button } from "@/components/ui/button";
import { ArrowBigLeft, Link } from "lucide-react";
// import { headers } from "next/headers";
import Image from "next/image";

export default async function NotFound() {
  // const headerList = await headers();

  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-9xl font-bold">404</h1>
            <h4 className="font-bold text-3xl">Did you  <span className="text-app-blue-500">loose</span> Touch &quest;</h4>
          </div>
          <div>
            <span>No problem</span>
            <Button asChild>
              <Link href="/"><ArrowBigLeft />Get Back InTouch</Link>
            </Button>
          </div>
        </div>
        <Image src="./icons/aero.svg" alt="" width={100} height={100}></Image>
      </div>
  
      <Image src="./error/bg.png" alt="" width={100} height={100} className="hidden md:flex"></Image>
    </div>
  )
}