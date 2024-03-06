"use client";
import { SignInButton } from "@clerk/nextjs";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {
  userId: string | null;
};

export default function HeaderMenu({ userId }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const specificWidth = 1024;
      if (window.innerWidth >= specificWidth) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="hidden w-full flex-row items-center justify-between lg:flex">
        <div className="flex flex-grow items-center justify-center">
          <ul className="flex gap-10">
            <li className="font-medium">Card Database</li>
            <li className="font-medium">Deck Builder</li>
          </ul>
        </div>
        <div>
          <div className="rounded bg-blue-500 px-4 py-1 text-white">
            {userId ? (
              <Link href={"/dashboard"}>Dashboard</Link>
            ) : (
              <SignInButton>Sign In</SignInButton>
            )}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {open ? (
          <div>
            <IconX
              size={28}
              className="cursor-pointer "
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
            <div className="absolute right-10 top-14 rounded border bg-gray-100 px-2 py-3">
              {userId ? (
                <div className="flex flex-col items-center gap-2">
                  <ul className="flex flex-col items-center gap-2">
                    <li className="hover:scale-105 cursor-pointer px-6 py-2 font-medium transition duration-300 ease-in-out">
                      <Link href={"/database"}>Card Database</Link>
                    </li>
                    <li className="hover:scale-105 cursor-pointer px-6 py-2 font-medium transition duration-300 ease-in-out">
                      <Link href={"/deckbuilder"}>Deck Builder</Link>
                    </li>
                  </ul>
                  <Link
                    className="rounded bg-blue-500 px-6 py-2 text-white"
                    href={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (
                <div className="rounded bg-blue-500 px-6 py-2 text-white">
                  <SignInButton>Sign In</SignInButton>
                </div>
              )}
            </div>
          </div>
        ) : (
          <IconMenu2
            size={28}
            className="cursor-pointer"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        )}
      </div>
    </>
  );
}
