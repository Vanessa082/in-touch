import Image from "next/image";
import { Textlogo } from "../atoms";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Herosection() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4">
      <div className="w-full flex-1 flex flex-col items-center justify-center md:items-start gap-6 text-center md:text-start">
        <div className="w-fit font-bold text-5xl lg:text-6xl xl:text-7xl break-all">
          <span className="flex gap-2 whitespace-nowrap">
            Stay <Textlogo />,
          </span>
          Be Involved
        </div>
        <p className="max-w-[400px]">
          <q>Discover your community. Share your voice. Never miss a moment.</q> With InTouch, you re always part of the conversation
        </p>

        <Button className="w-fit flex">
          <Link href="/feed" className="w-fit flex items-center gap-4">
            Be InTouch Now <ArrowRight />
          </Link>
        </Button>

        <div className="hidden md:flex flex-row justify-between items-center gap-4 w-fit md:max-w-[35vw]">
          <div className="w-fit flex items-center justify-center gap-4">
            <Image src="./home/avatars.svg" alt="images" width={70} height={100} />
            <div className="flex flex-col">
              <span className="font-bold">000,2</span>
              <span className="text-app-dark-200">Happy user</span>
            </div>
          </div>

          <hr className="w-[2px] h-[60px] bg-app-dark-300 border-none hidden md:flex" />

          <div>
            <span className="font-bold">4.8/5</span>
            <div className="flex">
              {
                Array.from({ length: 4 }, (_, i) => i).map((v) => (
                  <Star key={v} color="yellow-400" className="fill-yellow-400" />
                ))
              }
              <Star />
            </div>
            <span className="text-app-dark-200">Rating</span>
          </div>
        </div>
      </div>

      <div className="w-full flex-1">
        <Image
          src="./home/banner-img.svg"
          className="w-full max-h-[83vh]"
          alt=""
          height={300}
          width={500}
        />
      </div>
    </section>
  )
}