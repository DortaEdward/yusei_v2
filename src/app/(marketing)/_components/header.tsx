import { auth } from "@clerk/nextjs";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const { userId } = auth();
  return (
    <header className="flex items-center justify-between lg:px-28 px-10 py-6 relative border">
      <div>
        <p className="text-2xl font-bold tracking-wider">
          Tcg<span className="text-blue-500">Comp</span>
        </p>
      </div>
      <HeaderMenu userId={userId} />
    </header>
  );
}
