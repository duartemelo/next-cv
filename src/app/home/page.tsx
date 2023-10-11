import { Button } from "@/components/atom/Button";
import Icon from "@/components/atom/Icon";

import { RiCommandLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="w-min p-8 lg:p-16 fixed top-0 right-0">
      <Button.Root className="w-12 h-12 rounded text-white flex justify-center hover:bg-[var(--primary)] transition ease-in-out">
        <Button.LeftIcon>
          <Icon className="text-3xl">
            <RiCommandLine />
          </Icon>
        </Button.LeftIcon>
      </Button.Root>
    </div>
  );
}
