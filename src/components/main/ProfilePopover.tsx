"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { LogOut, User2Icon } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const ProfilePopover = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [pausePlan, setPausePlan] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" text-black" ref={popoverRef}>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-gray-300 p-1 hover:ring-2 hover:ring-red-500 transition"
        >
          {/* <Image
          src="/user.png"
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full"
        /> */}
          <User2Icon />
        </button>

        {/* Popover Content */}
        {open && (
          <div className="absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-xl animate-fade-in z-50">
            <div className="p-3 border-b text-base hover:text-fit-red cursor-pointer">
              <div className="font-medium">
                {session?.user?.userName || "User"}
              </div>
              <div className="text-gray-500 truncate">
                {session?.user?.email}
              </div>
            </div>

            <div className="flex flex-col p-2 text-base">
              <Link
                href="/profile"
                className="hover:text-fit-red cursor-pointer px-3 py-2 rounded-md"
              >
                My Profile
              </Link>
              <span className="hover:text-fit-red cursor-pointer px-3 py-2 rounded-md flex flex-col">
                Current Paln
                <h4>- Alpha</h4>
              </span>

              <button
                onMouseEnter={() => setPausePlan(true)}
                onMouseLeave={() => setPausePlan(false)}
                className="hover:text-fit-red cursor-pointer px-3 py-2 group rounded-md flex flex-col gap-1 items-start"
              >
                Pause Plan
                <div className="group-hover:block hidden flex-col">
                <button onClick={()=> toast.success('today skip')} className="text-black hover:text-fit-red pl-2"> - Today day</button>
                <button onClick={()=> toast.success('next day skip')} className="text-black hover:text-fit-red pl-2"> - Next day</button>
                </div>
              </button>
              <Link
                href={"/our-plans"}
                className="hover:text-fit-red cursor-pointer px-3 py-2 rounded-md"
              >
                Upgrade Plan
              </Link>
              <button
                onClick={() => signOut()}
                className="hover:bg-gray-100 text-red-600 flex items-center gap-2 px-3 py-2 rounded-md"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePopover;
