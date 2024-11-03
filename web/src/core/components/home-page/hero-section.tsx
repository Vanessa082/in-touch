import Image from "next/image";
import { TextLogo } from "../atoms";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

export default async function HeroSection() {
  const { userId } = await auth();

  const isAuthenTicated = !!userId;

  return (
    <section className="flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row">
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-6 text-center md:items-start md:text-start">
        <div className="w-fit break-all text-5xl font-bold lg:text-6xl xl:text-7xl">
          <span className="flex gap-2 whitespace-nowrap">
            Stay <TextLogo />,
          </span>
          Be Involved
        </div>
        <p className="max-w-[400px]">
          <q>Discover your community. Share your voice. Never miss a moment.</q>{" "}
          With InTouch, you&apos;re always part of the conversation
        </p>

        <Button className="flex w-fit">
          <Link
            href={isAuthenTicated ? "/feed" : "/sign-in"}
            className="flex w-fit items-center gap-4"
          >
            {isAuthenTicated ? "Welcome back" : "Be InTouch Now"}
            <ArrowRight />
          </Link>
        </Button>

        <div className="hidden w-fit flex-row items-center justify-between gap-4 md:flex md:max-w-[35vw]">
          <div className="flex w-fit items-center justify-center gap-4">
            <Image
              src="./home/avatars.svg"
              alt="images"
              width={70}
              height={100}
            />
            <div className="flex flex-col">
              <span className="font-bold">000,2</span>
              <span className="text-app-dark-200">Happy users</span>
            </div>
          </div>

          <hr className="hidden h-[60px] w-[2px] border-none bg-app-dark-300 md:flex" />

          <div>
            <span className="font-bold">4.8/5</span>
            <div className="flex">
              {Array.from({ length: 4 }, (_, i) => i).map((v) => (
                <Star key={v} color="yellow-400" className="fill-yellow-400" />
              ))}
              <Star />
            </div>
            <span className="text-app-dark-200">Rating</span>
          </div>
        </div>
      </div>

      <div className="w-full flex-1">
        <Image
          src="./home/banner-img.svg"
          className="max-h-[83vh] w-full"
          alt=""
          height={300}
          width={500}
        />
      </div>
    </section>
  );
}
