import { Facebook, Github, Instagram, Twitter, X } from "lucide-react";
import { Textlogo } from "../atoms";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center gap-8 mt-8 ">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12">
        <Textlogo className=" text-2xl" sxImg="size-[60px] sm:size-[50px]" />
        <nav className="flex justify-between gap-12 ">
          <a href="">Demo</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
        <div className="flex justify-between items-center text-app-blue-500 gap-4">
          <X />
          <Facebook />
          <Instagram />
          <Github />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-4 border-t border-solid  gap-2 text-app-text-dark-200">
        <span className="">&copy;Copyright all right reserved</span>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h4>Privacy Policy</h4>
          <h4>Terms and Condition</h4>
        </div>
      </div>
    </footer>
  )
}