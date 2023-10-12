"use client";

import { Button } from "@/components/atom/Button";
import Icon from "@/components/atom/Icon";

import { RiCommandLine } from "react-icons/ri";

import { useKBar } from "kbar";

export default function Home() {
  const { query } = useKBar();
  return (
    <div className="w-min p-8 lg:p-16 fixed top-0 right-0">
      <Button.Root
        className="w-12 h-12 rounded text-[var(--white)] flex justify-center hover:bg-[var(--dark-300)] transition ease-in-out"
        onClick={query.toggle}
      >
        <Button.LeftIcon>
          <Icon className="text-3xl">
            <RiCommandLine />
          </Icon>
        </Button.LeftIcon>
      </Button.Root>
    </div>
  );
}
