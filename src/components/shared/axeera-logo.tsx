import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AxeeraLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("relative inline-flex h-10 w-14 shrink-0 overflow-hidden rounded-md bg-transparent", className)}
      aria-label="Axeera home"
    >
      <Image
        src="/logo.png"
        alt=""
        fill
        unoptimized
        sizes="96px"
        className="object-contain"
      />
    </Link>
  );
}
