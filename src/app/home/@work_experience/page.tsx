"use client";

import Blur from "@/components/atom/Blur";
import Card from "@/components/atom/Card";
import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";
import { disableScroll, enableScroll } from "@/utils/scroll";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/atom/Button";
import { useDispatch } from "react-redux";
import { change } from "@/store/scrollSlice";
import useScrollDetection from "@/hooks/useScrollDetection";
import { Transition } from "@headlessui/react";

export default function WorkExperience() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useScrollDetection(ref);
  const [cardState, setCardState] = useState(false);

  useEffect(() => {
    if (cardState) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [cardState]);

  useEffect(() => {
    if (inViewport) {
      dispatch(change("work"));
    }
  }, [inViewport, dispatch]);

  return (
    <>
      <div ref={ref}>
        <Section className="gap-10">
          <div className="flex flex-col flex-1 max-w-[700px]">
            <Text
              as="a"
              onClick={() => setCardState(true)}
              size="4xl"
              weight="bold"
              className="cursor-pointer text-white"
            >
              Work Experience
            </Text>

            {/* TODO: pass this to a work section component */}

            <Text as="h3" weight="medium" size="xl" className="mt-4 text-white">
              Remote Front-End Software Engineer at Useflow
            </Text>
            <Text as="p" size="base" className="text-white">
              Working with ReactJS (TS and JS) to implement features on Useflow
              projects and develop MVPs.
            </Text>
            <Text as="p" size="base" className="text-cyan-800">
              react | javascript | typescript | react router | hooks | redux |
              styled components
            </Text>
            <Text as="h3" weight="medium" size="xl" className="mt-4 text-white">
              Remote Software Engineer Intern at Useflow
            </Text>
            <Text as="p" size="base" className="text-white">
              Worked with ReactJS (TS and JS) to implement user interfaces on
              Useflow projects and learnt Flutter to implement an MVP mobile
              app.
            </Text>
            <Text as="p" size="base" className="text-cyan-800">
              react | javascript | typescript | react router | hooks | redux |
              styled components | flutter
            </Text>
            <Text as="h3" weight="medium" size="xl" className="mt-4 text-white">
              Python Developer Intern at Camp Tecnologico Bilbao
            </Text>
            <Text as="p" size="base" className="text-white">
              Coded a semi-humanized robot called Pepper with Python. Erasmus
              internship.
            </Text>
            <Text as="p" size="base" className="text-cyan-800">
              python
            </Text>
          </div>
          {/* <div className="flex flex-1 items-center self-center justify-center"></div> */}
        </Section>
      </div>

      <Transition
        show={cardState}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Blur onClick={() => setCardState(false)}>
          <Card>
            <div className="w-full flex flex-col">
              <div className="self-end w-min flex flex-row gap-2 group">
                <Button.Root className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></Button.Root>
                <Button.Root className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></Button.Root>
                <Button.Root
                  className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"
                  onClick={() => setCardState(false)}
                ></Button.Root>
              </div>
            </div>
            <Text
              as="h1"
              size="3xl"
              weight="medium"
              className="mt-6 text-white"
            >
              Work Experience
            </Text>
            <Text
              as="p"
              size="base"
              weight="light"
              className="mt-2 text-justify text-white"
            >
              Sit velit commodo et culpa eiusmod ex minim cupidatat culpa
              eiusmod fugiat elit cupidatat. In sint laborum Lorem consectetur
              velit occaecat. Consectetur minim dolor ex excepteur ut nisi qui.
              Cillum sit eu non ea pariatur in ipsum proident non labore culpa
              pariatur. In aliquip fugiat eiusmod tempor. Veniam esse deserunt
              minim consequat consequat. Minim proident aute id duis magna do
              in. Occaecat sint in Lorem fugiat anim officia dolore anim sunt
              pariatur et proident exercitation. Excepteur laborum do velit
              veniam magna velit velit irure laborum cupidatat. Dolor
              exercitation et minim consectetur do anim labore culpa nisi nisi
              esse. Amet irure culpa amet occaecat fugiat officia et sit minim
              sit ea exercitation nulla cupidatat. Sit veniam eu cupidatat esse
              irure. Exercitation aliquip ullamco culpa aliquip quis enim anim
              proident excepteur velit. Cupidatat anim laboris adipisicing
              veniam eiusmod nisi mollit duis labore cillum cupidatat labore ad.
              In cillum sunt anim in id. Culpa tempor do nisi enim veniam velit
              ipsum sit fugiat nisi exercitation excepteur irure. Deserunt sint
              culpa ex laboris incididunt nisi voluptate reprehenderit aute sit
              non irure. Nisi amet amet officia ipsum est. Consectetur elit
              proident officia Lorem labore eu tempor id sint magna anim anim.
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
