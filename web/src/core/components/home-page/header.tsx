import { TextLogo } from "@/components/atoms/";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Header() {
  return (
    <header className="mx-auto flex w-app-w items-center justify-between py-8">
      <h1 className="w-fit">
        <TextLogo
          includeLogo
          className="text-2xl"
          sxText="hidden sm:flex"
          sxImg="size-[60px] sm:size-[50px]"
        />
      </h1>

      <nav className="hidden justify-between gap-12 md:flex">
        <Link href="">Demo</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>

      <div className="flex w-fit items-center justify-center gap-2">
        <SignedOut>
          <Button variant="ghost" className="font-semibold">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>

        <SignedIn>
          <Button
            asChild
            className="font-semibold text-app-strict-text-white-500"
          >
            <Link href="/feed">Continue</Link>
          </Button>
        </SignedIn>

        <ThemeToggle />
      </div>
    </header>
  );
}
