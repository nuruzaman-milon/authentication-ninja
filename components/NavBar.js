"use client";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/contexts/AuthContexts";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  //handle logout function here
  const handleSignOut = () => {
    Cookies.remove("authToken");
    const isCookieAvailable = Cookies.get("authToken");
    if (!isCookieAvailable) {
      logout();
      router.refresh();
    }
  };
  return (
    <nav>
      <ul className="flex items-center gap-3 justify-center mt-10 mb-4">
        <li>
          <Link href={"/"} className="underline">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="underline">
            About
          </Link>
        </li>
        {currentUser ? (
          <>
            <li>
              {currentUser.displayName} - {currentUser.email}
            </li>
            <button className="underline" onClick={handleSignOut}>
              Signout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link href={"/signin"} className="underline">
                SignIn
              </Link>
            </li>
            <li>
              <Link href={"/signup"} className="underline">
                SignUp
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
