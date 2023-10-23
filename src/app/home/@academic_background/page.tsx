"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import { disableScroll, enableScroll } from "@/utils/scroll";

import Blur from "@/components/atom/Blur";
import Card from "@/components/atom/Card";
import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";
import { Button } from "@/components/atom/Button";

import { InsideSection } from "@/components/organism/InsideSection";
import Icon from "@/components/atom/Icon";
import { AiFillBook } from "react-icons/ai";

import academic_background from "@/data/academic_background";

export default function AcademicBackground() {
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
        <Section className="gap-10 flex-col">
          <Text
            as="h1"
            size="4xl"
            weight="bold"
            className="text-[var(--white)] self-start"
          >
            Academic Background
          </Text>

          {academic_background.items.map((item) => (
            <InsideSection.Root key={item.courseTitle}>
              <div className="flex flex-col md:flex-1">
                <InsideSection.Title>{item.courseTitle}</InsideSection.Title>
                <InsideSection.Description>
                  {item.courseDescription}
                </InsideSection.Description>
                <InsideSection.Footer>{item.courseTools}</InsideSection.Footer>
              </div>

              <InsideSection.Interval
                start_at={item.startDate}
                finish_at={item.endDate}
              />
            </InsideSection.Root>
          ))}
          <Button.Root
            className="w-max text-[var(--dark-100)] [&>.next-icon]:text-lg self-start"
            onClick={() => setCardState(true)}
          >
            read more
            <Button.RightIcon>
              <Icon>
                <AiFillBook />
              </Icon>
            </Button.RightIcon>
          </Button.Root>
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
          <Card title="Academic Background" onClose={() => setCardState(false)}>
            <Text
              as="p"
              size="base"
              weight="regular"
              className="mt-2 text-justify text-[var(--white)]"
            >
              {academic_background.longDescription}
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
