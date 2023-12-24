"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import XLParagraph from "./XLParagraph";

interface AutNavProps {}

const AutNav: React.FC<AutNavProps> = () => {
  const [isProfileOn, setProfileOn] = useState(false);

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

  return (
    <div className="relative flex">
      <button
        onClick={handleProfile}
        ref={cardRef}
        className="click-animation font-bold text-4xl bg-primary text-accent border border-secondary rounded-full w-12 h-12 flex justify-center items-center uppercase"
      >
        a
      </button>

      <Card
        className={`py-5 absolute z-50 end-0 top-[53px] flex flex-col gap-4 justify-start w-28 hover:shadow-md ${
          isProfileOn ? "block" : "hidden"
        }`}
      >
        <Link href="/profile" className="flex justify-center">
          <XLParagraph className="font-bold text-primary">Profile</XLParagraph>
        </Link>
      </Card>
    </div>
  );
};

export default AutNav;
