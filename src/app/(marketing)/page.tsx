import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { SignInButton, auth } from "@clerk/nextjs";

export default async function Home() {
  noStore();
  const { userId } = auth();

  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-4 px-6">
      <h1 className="max-w-md text-center text-5xl font-bold tracking-wide">
        Tcg Toolkit for TCG Enthusiasts
      </h1>
      <p className="text-center text-lg font-medium text-gray-500">
        Tcg is better than ever. Management tools needed help catching up.
      </p>

      <div className=" flex items-center">
        {userId ? (
          <>
            <div className="rounded bg-blue-500 px-4 py-2 text-center font-medium text-white">
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </>
        ) : (
          <>
            <div className="rounded bg-blue-500 px-4 py-2 text-center font-medium text-white">
              <SignInButton>Get Started</SignInButton>
            </div>
            <div className="px-4 py-2">
              <Link href={"/learnmore"}>Learn More →</Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
