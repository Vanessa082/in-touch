import { Facebook, Github, Instagram, Twitter, X } from "lucide-react";
import { Textlogo } from "../atoms";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-8 pt-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Textlogo includeLogo className="hidden sm:flex text-2xl"
          
          sxImg="size-[60px] sm:size-[50px]" />
        <nav className="hidden md:flex justify-between gap-12 ">
          <a href="">Demo</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
        <div className="flex justify-between items-center text-app-blue-500 gap-8">
          <X />
          <Facebook />
          <Instagram />
          <Github />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  text-app-text-dark-200">
        <span>&copy;Copyright all right reserved</span>
        <div className="flex justify-between items-center ">
          <h4>Privacy Policy</h4>
          <h4>Terms and Condition</h4>
        </div>
      </div>
    </footer>
  )
}