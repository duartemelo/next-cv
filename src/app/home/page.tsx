"use client";

import { Button } from "@/components/atom/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {
  const section = useSelector((state: RootState) => state.scroll.section);
  const sectionBorder = () => {
    if (section === "summary") {
      return "border-l-8";
    } else if (section === "work") {
      return "border-t-8";
    } else {
      return "";
    }
  };
  return (
    <div className="w-min p-8 lg:p-16 fixed top-0 right-0">
      <Button.Root
        className={`w-12 h-12 rounded-full border-2 ${sectionBorder()} border-zinc-500`}
      />
    </div>
  );
}
