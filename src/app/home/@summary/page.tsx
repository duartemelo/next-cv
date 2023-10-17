"use client";

import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";
import Image from "@/components/atom/Image";

import profileImage from "@/assets/images/profile.jpg";
import Card from "@/components/atom/Card";
import Blur from "@/components/atom/Blur";
import { useEffect, useState } from "react";
import { Button } from "@/components/atom/Button";
import { disableScroll, enableScroll } from "@/utils/scroll";

import { Transition } from "@headlessui/react";
import Icon from "@/components/atom/Icon";
import { AiFillProfile } from "react-icons/ai";

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
              Junior Front-End Engineer from Braga - Portugal, specializing in
              React (with JavaScript and TypeScript) at Useflow Europa.
              Passionate about problem-solving and dedicated to delivering
              high-quality solutions. With a strong foundation in IT
              engineering, I have demonstrated exceptional analytical thinking
              and the ability to adapt swiftly to new challenges. Recognized as
              an award-winning academic achiever, I am committed to continuously
              updating my skills to stay at the forefront of industry trends. I
              have recently completed my IT Engineering Bachelor&apos;s degree
              while gaining valuable hands-on experience through a curricular
              internship at Useflow Europa.
              <br />I am a native Portuguese speaker, speak a little bit of
              Spanish, and can maintain a technical conversation in English.
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
          <Card title="Summary" onClose={() => setCardState(false)}>
            <Text
              as="p"
              size="base"
              weight="regular"
              className="mt-2 text-justify text-[var(--white)]"
            >
              Throughout my entire life, I have always maintained a strong
              connection with the IT world. Even as a young child, before I even
              knew how to read, I could operate a computer and engage in gaming.
              As I progressed through school, I faced the pivotal decision of
              choosing a career path. While the answer might be clear to you, it
              wasn&apos;t so evident to me back then. I found myself torn
              between pursuing a career in music or one as an IT engineer.
              <br />
              Today, I am immensely content with my choice to follow the IT
              path. Despite being a passionate music enthusiast, I derive great
              satisfaction from problem-solving and possess an inherent
              curiosity about the inner workings of things - qualities that
              align well with the role of an engineer.
              <br />
              At the age of 15, I enrolled in the Management and Programming of
              Computer Systems Course at Escola Profissional de Braga. This
              experience provided me with a foundation in programming, enabling
              me to undertake my initial projects and achieve noteworthy grades,
              subsequently earning me merit awards.
              <br />
              Following the completion of this course, I continued my education
              at IPCA to pursue a degree in IT Engineering. This phase allowed
              me to refine my IT Engineering skills and transform into a
              qualified engineer.
              <br />
              Despite my passion for learning, I opted to take a break after
              obtaining my IT Engineering degree and entered the workforce as a
              developer. Frontend technologies have always held a special allure
              for me, prompting me to embark on a career as a Frontend Engineer
              at Useflow, where I am engaged in React-based projects.
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
