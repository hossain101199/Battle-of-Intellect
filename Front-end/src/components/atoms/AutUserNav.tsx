"use client";
import { setLoggedInUserInfo } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeAccessToken, removeUserInfo } from "@/utils/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Card from "./Card";
import LParagraph from "./LParagraph";

const AutUserNav = () => {
  const { name } = useAppSelector((state) => state.auth);
  const [isProfileOn, setProfileOn] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const cardRef = useRef<HTMLButtonElement>(null);
  const handleProfile = () => {
    setProfileOn((isOn) => !isOn);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setProfileOn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    dispatch(
      setLoggedInUserInfo({
        accessToken: null,
        name: null,
        role: null,
      })
    );
    removeUserInfo();
    removeAccessToken();
    toast.success("Successfully signed out");
    router.push("/", { scroll: false });
  };
  return (
    <div className="relative flex">
      <button
        onClick={handleProfile}
        ref={cardRef}
        className="click-animation font-bold text-4xl bg-primary text-accent border border-secondary rounded-full w-12 h-12 flex justify-center items-center uppercase"
      >
        {name?.slice(0, 1)}
      </button>

      <Card
        className={`py-5 absolute z-50 end-0 top-[53px] flex flex-col gap-4 justify-start w-28 shadow-lg bg-white ${
          isProfileOn ? "block" : "hidden"
        }`}
      >
        <Link href="/profile" className="px-2">
          <LParagraph className="font-bold text-primary">Profile</LParagraph>
        </Link>
        <hr />
        <button onClick={handleSignOut} className="w-fit px-2">
          <LParagraph className="font-bold text-warning">Sign Out</LParagraph>
        </button>
      </Card>
    </div>
  );
};

export default AutUserNav;
