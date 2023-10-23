"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import { disableScroll, enableScroll } from "@/utils/scroll";

import { Button } from "@/components/atom/Button";
import Blur from "@/components/atom/Blur";
import Card from "@/components/atom/Card";
import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";
import Icon from "@/components/atom/Icon";
import { MdOutlineWork } from "react-icons/md";

import work from "@/data/work_experience";

export default function WorkExperience() {
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
            Work Experience
          </Text>

          {work.items.map((item) => (
            <InsideSection.Root key={item.jobTitle}>
              <div className="flex flex-col md:flex-1">
                <InsideSection.Title>{item.jobTitle}</InsideSection.Title>
                <InsideSection.Description>
                  {item.jobDescription}
                </InsideSection.Description>
                <InsideSection.Footer>{item.jobTools}</InsideSection.Footer>
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
                <MdOutlineWork />
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
          <Card title="Work Experience" onClose={() => setCardState(false)}>
            <Text
              as="p"
              size="base"
              weight="regular"
              className="mt-2 text-justify text-[var(--white)]"
            >
              {work.longDescription}
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
