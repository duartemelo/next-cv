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
            className="text-white self-start"
          >
            Academic Background
          </Text>

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                IT Engineering Licentiate Degree - IPCA (15/20)
              </InsideSection.Title>
              <InsideSection.Description>
                Object-Oriented Programming in C# and software development
                project with Entity Framework and SQL Server.
                <br />
                Web Development with AngularJS and creating a Web API using
                Flask in Python.
                <br />
                Computer Vision in C and Language Processing in Python.
              </InsideSection.Description>
              <InsideSection.Tools>
                oop | c# | .net core | mysql | postgresql | sql server | angular
                | html | css | js | python | c | git | github | scrum
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="set 2020" finish_at="jun 2023" />
          </InsideSection.Root>

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Management and Programming of Computer Systems - epb (19/20)
              </InsideSection.Title>
              <InsideSection.Description>
                Professional High School Course - programming basics
                <br />
                Final Project - FeedyVet - made using React and Firebase and
                received a grade of 20/20.
              </InsideSection.Description>
              <InsideSection.Tools>
                python | c# | mysql | html | css | js | git | github
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="set 2017" finish_at="jun 2020" />
          </InsideSection.Root>
          <Button.Root
            className="w-max text-slate-500 [&>.next-icon]:text-lg self-start"
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
              Academic Background
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
