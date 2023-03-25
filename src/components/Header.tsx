import Link from "next/link";
import { NewspaperClipping } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="bg-zinc-900 p-5">
      <Link href="#" className="flex items-center gap-3 ">
        <NewspaperClipping size={24} />
        <h1 className="font-bold">Next news</h1>
      </Link>
    </header>
  )
}