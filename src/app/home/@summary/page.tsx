"use client";

import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

// TODO: create Image component
import Image from "next/image";

import profileImage from "@/assets/images/profile.jpg";
import Card from "@/components/atom/Card";
import Blur from "@/components/atom/Blur";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/atom/Button";
import { disableScroll, enableScroll } from "@/utils/scroll";
import { useDispatch } from "react-redux";
import { change } from "@/store/scrollSlice";
import useScrollDetection from "@/hooks/useScrollDetection";

import { Transition } from "@headlessui/react";

export default function Summary() {
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
      dispatch(change("summary"));
    }
  }, [inViewport, dispatch]);

  return (
    <>
      <div ref={ref}>
        <Section className="gap-10 flex-col lg:flex-row">
          <div className="flex lg:flex-1 flex-col max-w-[800px]">
            <Text
              as="a"
              onClick={() => setCardState(true)}
              size="4xl"
              weight="bold"
              className="cursor-pointer"
            >
              Summary
            </Text>
            <Text
              as="p"
              size="lg"
              weight="regular"
              className="mt-4 text-justify"
            >
              Junior Front-End Engineer specializing in React (with JavaScript
              and TypeScript) at Useflow Europa. Passionate about
              problem-solving and dedicated to delivering high-quality
              solutions. With a strong foundation in IT engineering, I have
              demonstrated exceptional analytical thinking and the ability to
              adapt swiftly to new challenges. Recognized as an award-winning
              academic achiever, I am committed to continuously updating my
              skills to stay at the forefront of industry trends. I have
              recently completed my IT Engineering Bachelor&apos;s degree while
              gaining valuable hands-on experience through a curricular
              internship at Useflow Europa.
            </Text>
          </div>
          <div className="flex lg:flex-1 max-w-[800px] items-center self-center justify-center">
            <Image
              src={profileImage}
              alt="Profile Image"
              className="max-h-[400px] object-contain"
            />
          </div>
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
            <Text as="h1" size="3xl" weight="medium" className="mt-6">
              Summary
            </Text>
            <Text
              as="p"
              size="base"
              weight="light"
              className="mt-2 text-justify"
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
