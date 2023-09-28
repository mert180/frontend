import TextLogo from "@/components/TextLogo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <div className="flex justify-center items-center p-4">
        <TextLogo />
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={"/auth/register"}
          className="text-xl text-center font-bold text-black m-2"
        >
          Register
        </Link>
        <Link
          href={"/auth/login"}
          className="text-xl text-center font-bold text-black m-2"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
