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
            className="text-[var(--white)] self-start"
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
              <InsideSection.Footer>
                oop | c# | .net core | mysql | postgresql | sql server | angular
                | html | css | js | python | c | git | github | scrum
              </InsideSection.Footer>
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
              <InsideSection.Footer>
                python | c# | mysql | html | css | js | git | github
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="set 2017" finish_at="jun 2020" />
          </InsideSection.Root>
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
              I embarked on my journey in the field of IT in 2017 when I
              enrolled in an IT professional course. During this program, I
              acquired the fundamental knowledge of programming, sparking my
              interest in frontend and web development. Upon completing the
              course in 2020, I decided to set myself apart from my peers by
              developing my final project using React, which earned me the
              highest possible grade of 20/20. Since then, I have continuously
              delved into frontend technologies. <br />
              Following that, I pursued my bachelor&apos;s degree in IT
              Engineering at IPCA, which further honed my IT engineering skills
              and shaped me into the engineer I am today. I learned about
              various topics, including Data Structures, Object-Oriented
              Programming (OOP) principles, Databases, Computer Vision, Web
              Development, Artificial Intelligence, Agile Methodologies, and
              more.
              <br />
              <br />
              Relevant subjects and topics:
              <br />- OOP (C#)
              <br />- Software analysis and modeling (SCRUM) <br />- Software
              Engineering (SCRUM, Agile) <br />- Data storage and access
              (PostgresSQL) <br />- Computer Vision (C) <br />- Language
              Processing (Python with PLY) <br />- Data communication (Python
              with Flask to create a Web API, and Angular) <br />- Software
              development project (C# with Entity Framework, SQL Server, and
              Angular) <br />- Web development (Angular 13 and pure JS) <br />
              Git and GitHub have been used throughout all the course.
            </Text>
          </Card>
        </Blur>
      </Transition>
    </>
  );
}
