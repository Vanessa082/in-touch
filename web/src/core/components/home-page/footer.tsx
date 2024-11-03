import { Facebook, Github, Instagram, Twitter, X } from "lucide-react";
import { TextLogo } from "../atoms";

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col items-center justify-between gap-8">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-12">
        <TextLogo className="text-2xl" sxImg="size-[60px] sm:size-[50px]" />
        <nav className="flex justify-between gap-12">
          <a href="">Demo</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
        <div className="flex items-center justify-between gap-4 text-app-blue-500">
          <X />
          <Facebook />
          <Instagram />
          <Github />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 border-t border-solid pt-4 text-app-text-dark-200 md:flex-row">
        <span className="">&copy;Copyright all right reserved</span>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h4>Privacy Policy</h4>
          <h4>Terms and Condition</h4>
        </div>
      </div>
    </footer>
  );
}
