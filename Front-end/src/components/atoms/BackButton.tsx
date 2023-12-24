"use client";
import { useRouter } from "next/navigation";
import SParagraph from "./SParagraph";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <SParagraph className="font-bold text-primary">&#x290C; Back</SParagraph>
    </button>
  );
};

export default BackButton;
