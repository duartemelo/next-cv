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
            className="text-white self-start"
          >
            Work Experience
          </Text>

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Remote Frontend Software Engineer at Useflow
              </InsideSection.Title>
              <InsideSection.Description>
                Working with ReactJS (TS and JS) to implement features on
                Useflow projects and develop MVPs.
              </InsideSection.Description>
              <InsideSection.Tools>
                react | javascript | typescript | react router | hooks | redux |
                styled components
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="jun 2023" />
          </InsideSection.Root>

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Remote Software Engineer Intern at Useflow
              </InsideSection.Title>
              <InsideSection.Description>
                Worked with ReactJS (TS and JS) to implement user interfaces on
                Useflow projects and learnt Flutter to implement an MVP mobile
                app.
              </InsideSection.Description>
              <InsideSection.Tools>
                react | javascript | typescript | react router | hooks | redux |
                styled components | flutter
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="feb 2023" finish_at="jun 2023" />
          </InsideSection.Root>

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Python Developer Intern at Camp Tecnologico Bilbao
              </InsideSection.Title>
              <InsideSection.Description>
                Coded a semi-humanized robot called Pepper with Python. Erasmus
                internship.
              </InsideSection.Description>
              <InsideSection.Tools>python</InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="jun 2019" finish_at="jul 2019" />
          </InsideSection.Root>
          <Button.Root
            className="w-max text-slate-500 [&>.next-icon]:text-lg self-start"
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
              My journey as a developer began in 2019 when I undertook an
              internship at Camp Tecnologico in Bilbao during my month-long
              Erasmus program there. Upon knowing that I had been accepted for
              the Erasmus internship, I felt a surge of happiness and pride in
              myself, as only the most outstanding students were chosen.
              <br />
              During this internship, I had the opportunity to work with a
              semi-humanized robot named Pepper, utilizing Python. While my
              Python scripts were relatively simple, considering my level of
              knowledge at that time, they were already remarkable. The
              internship supervisor was astounded by my ability to research the
              robot and control it using a gamepad.
              <br />
              Following this experience, in 2020, I pursued another internship
              at lluni software - a company specializing in software development
              for insurance companies. During this stint, I engaged in research
              focused on API benchmarking and APM software, including tools like
              Kibana.
              <br />
              Subsequently, I enrolled in the IT Engineering Bachelor&apos;s
              degree program at IPCA. One of the noteworthy aspects of this
              course was the inclusion of a mandatory internship in the final
              year. I completed this internship at Useflow Europa, primarily
              focusing on React development. I also took the opportunity to
              learn Flutter and successfully developed an MVP mobile app.
              <br />
              As a result of my performance, Useflow expressed interest in
              hiring me as a Frontend Engineer. In my current role, I am engaged
              in developing features for Useflow&apos;s core projects, utilizing
              technologies such as React, TypeScript, Redux, Styled Components,
              and Tailwind, among others.
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
