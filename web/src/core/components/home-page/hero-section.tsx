import Image from "next/image";
import { Textlogo } from "../atoms";
import { Button } from "../ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Herosection() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4">
      <div className="w-full flex-1 flex flex-col gap-6 ">
        <div className="w-full font-bold text-5xl lg:text-6xl xl:text-7xl break-all">
          <div>
            <span className="flex gap-2 whitespace-nowrap">
              Stay <Textlogo />,
            </span>
            Be Involved
          </div>
        </div>
        <p className="max-w-[400px]">
          &quote;Discover your community. Share your voice. Never miss a moment.&quote; With InTouch, you re always part of the conversation
        </p>

        <Button className="w-fit">
          <Link href="/feed">
            Be InTouch Now
          </Link>
        </Button>

        <div className="flex justify-between items-center  w-full md:max-w-[35vw] ">
          <Image src="./home/images.svg" alt="images" width={100} height={100}/>
          <div className="flex flex-col">
              <span className="font-bold">2,291</span>
              <span>Happy user</span>
          </div>
          <Image
          src="/home/line.png"
          alt="line"
          height={4}
          width={4}
        />
          <div>
              <span className="font-bold">4.8/5</span>
              <div className="flex">
                <Star color="yellow-400" className="fill-yellow-400"/>
                <Star color="yellow-400" className="fill-yellow-400"/>
                <Star color="yellow-400" className="fill-yellow-400"/>
                <Star color="yellow-400" className="fill-yellow-400"/>
                <Star color="yellow-400" className="fill-yellow-400"/>
                <Star />
              </div>
              <span>Rating</span>
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