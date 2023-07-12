"use client";

import { Button } from "@/components/atom/Button";
import Icon from "@/components/atom/Icon";
import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";
import { useEffect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { change } from "@/store/scrollSlice";
import useScrollDetection from "@/hooks/useScrollDetection";

export default function Profile() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useScrollDetection(ref);

  useEffect(() => {
    if (inViewport) {
      dispatch(change("profile"));
    }
  }, [inViewport, dispatch]);
  return (
    <div ref={ref}>
      <Section className="flex-col">
        <Text
          as="h1"
          size="5xl"
          weight="bold"
          className="text-white"
          align="center"
        >
          Duarte Melo
        </Text>
        <Text
          as="p"
          size="2xl"
          weight="light"
          className="text-white mt-6"
          align="center"
          italic={true}
        >
          &quot;Design is not just what it looks like and feels like. Design is
          how it works.&quot;
        </Text>
        <div className="flex gap-4 mt-6 flex-col sm:flex-row">
          <Button.Root
            className="bg-white px-5 py-1 rounded text-zinc-900 hover:text-white hover:bg-purple-950 transition ease-in-out"
            to="https://github.com/duartemelo/"
            target="blank"
          >
            <Button.LeftIcon>
              <Icon>
                <AiFillGithub />
              </Icon>
            </Button.LeftIcon>
            GitHub Profile
          </Button.Root>

          <Button.Root
            className="bg-white px-5 py-1 rounded text-zinc-900 hover:text-white hover:bg-blue-600 transition ease-in-out"
            to="https://www.linkedin.com/in/duarteribeiromelo/"
            target="blank"
          >
            <Button.LeftIcon>
              <Icon>
                <AiFillLinkedin />
              </Icon>
            </Button.LeftIcon>
            LinkedIn Profile
          </Button.Root>
        </div>
      </Section>
    </div>
  );
}
