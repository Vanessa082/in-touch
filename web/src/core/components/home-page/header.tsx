import { Textlogo } from "@/components/atoms/";
import { Button } from "../ui/button";
import Link from "next/link";


export default function Header() {
  return (
    <header className="w-app-w mx-auto flex justify-between items-center py-8 font-bold">
      <h1 className="w-fit">
        <Textlogo
          includeLogo
          className="text-2xl"
        />
      </h1>
      <nav className="flex justify-between gap-12 ">
        <Link href="">Demo</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>
     <div>
     <Button variant="ghost"><Link href="">Login</Link></Button>
     <Button asChild><Link href="">Get Started</Link></Button>
     </div>
    </header>
  )
}
