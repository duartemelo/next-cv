"use client";

import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";
import Image from "@/components/atom/Image";

import profileImage from "@/assets/images/profile.jpeg";
import Card from "@/components/atom/Card";
import Blur from "@/components/atom/Blur";
import { useEffect, useState } from "react";
import { Button } from "@/components/atom/Button";
import { disableScroll, enableScroll } from "@/utils/scroll";

import { Transition } from "@headlessui/react";
import Icon from "@/components/atom/Icon";
import { AiFillProfile } from "react-icons/ai";

import summary from "@/data/summary";

export default function Summary() {
  const [cardState, setCardState] = useState(false);

  useEffect(() => {
    if (cardState) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [cardState]);

  return (
    <>
      <div>
        <Section className="gap-10 flex-col lg:flex-row">
          <div className="flex lg:flex-1 flex-col max-w-[800px]">
            <Text
              as="h1"
              size="4xl"
              weight="bold"
              className="text-[var(--white)]"
            >
              Summary
            </Text>
            <Text
              as="p"
              size="lg"
              weight="regular"
              className="mt-4 text-justify text-[var(--white)]"
            >
              {summary.shortDescription}
            </Text>
            <Button.Root
              className="w-max text-[var(--dark-100)] [&>.next-icon]:text-lg mt-2"
              onClick={() => setCardState(true)}
            >
              read more
              <Button.RightIcon>
                <Icon>
                  <AiFillProfile />
                </Icon>
              </Button.RightIcon>
            </Button.Root>
          </div>
          <div className="flex lg:flex-1 max-w-[800px] items-center self-center justify-center">
            <Image
              src={profileImage}
              alt="Profile Image"
              className="max-h-[400px] object-contain lg:object-right"
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
          <Card title="Summary" onClose={() => setCardState(false)}>
            <Text
              as="p"
              size="base"
              weight="regular"
              className="mt-2 text-justify text-[var(--white)]"
            >
              {summary.longDescription}
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
