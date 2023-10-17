"use client";

import React, { useRef } from "react";
import Icon from "@/components/atom/Icon";
import { KBarProvider } from "kbar";
import {
  AiFillBook,
  AiFillCode,
  AiFillCopy,
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
  AiFillProfile,
  AiFillTrophy,
} from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import CommandBar from "@/components/organism/CommandBar";

export default function Layout(props: {
  children: React.ReactNode;
  profile: React.ReactNode;
  summary: React.ReactNode;
  work_experience: React.ReactNode;
  academic_background: React.ReactNode;
  projects: React.ReactNode;
  awards: React.ReactNode;
  courses: React.ReactNode;
}) {
  const actions = [
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["c"],
      keywords: "copy-url",
      section: "General",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: (
        <Icon>
          <AiFillCopy />
        </Icon>
      ),
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "General",
      perform: () =>
        window.open("mailto:duarteribeirodemelo@hotmail.com", "_blank"),
      icon: (
        <Icon>
          <AiFillMail />
        </Icon>
      ),
    },
    {
      id: "copy-email",
      name: "Copy Email",
      shortcut: ["c", "e"],
      keywords: "copy-email",
      section: "General",
      perform: () =>
        navigator.clipboard.writeText("duarteribeirodemelo@hotmail.com"),
      icon: (
        <Icon>
          <AiFillCopy />
        </Icon>
      ),
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go to",
      perform: () =>
        homeRef.current !== null && homeRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <AiFillHome />
        </Icon>
      ),
    },
    {
      id: "summary",
      name: "Summary",
      shortcut: ["g", "s"],
      keywords: "go-summary",
      section: "Go to",
      perform: () =>
        summaryRef.current !== null && summaryRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <AiFillProfile />
        </Icon>
      ),
    },
    {
      id: "work-experience",
      name: "Work Experience",
      shortcut: ["g", "w"],
      keywords: "go-work-experience",
      section: "Go to",
      perform: () =>
        workRef.current !== null && workRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <MdOutlineWork />
        </Icon>
      ),
    },
    {
      id: "academic-background",
      name: "Academic Background",
      shortcut: ["g", "e"],
      keywords: "go-academic-background",
      section: "Go to",
      perform: () =>
        academicRef.current !== null && academicRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <AiFillBook />
        </Icon>
      ),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["g", "p"],
      keywords: "go-projects",
      section: "Go to",
      perform: () =>
        projectsRef.current !== null && projectsRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <AiFillCode />
        </Icon>
      ),
    },
    {
      id: "awards",
      name: "Awards",
      shortcut: ["g", "a"],
      keywords: "go-awards",
      section: "Go to",
      perform: () =>
        awardsRef.current !== null && awardsRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <AiFillTrophy />
        </Icon>
      ),
    },
    {
      id: "courses",
      name: "Courses",
      shortcut: ["g", "c"],
      keywords: "go-courses",
      section: "Go to",
      perform: () =>
        coursesRef.current !== null && coursesRef.current.scrollIntoView(),
      icon: (
        <Icon>
          <AiFillCode />
        </Icon>
      ),
    },
    {
      id: "github",
      name: "GitHub",
      shortcut: ["f", "g"],
      keywords: "go-github",
      section: "Follow",
      perform: () => window.open("https://github.com/duartemelo", "_blank"),
      icon: (
        <Icon>
          <AiFillGithub />
        </Icon>
      ),
    },
    {
      id: "linkedin",
      name: "Linkedin",
      shortcut: ["f", "l"],
      keywords: "go-linkedin",
      section: "Follow",
      perform: () =>
        window.open("https://www.linkedin.com/in/duarteribeiromelo/", "_blank"),
      icon: (
        <Icon>
          <AiFillLinkedin />
        </Icon>
      ),
    },
  ];

  const summaryRef = useRef<null | HTMLDivElement>(null);
  const homeRef = useRef<null | HTMLDivElement>(null);
  const workRef = useRef<null | HTMLDivElement>(null);
  const academicRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const awardsRef = useRef<null | HTMLDivElement>(null);
  const coursesRef = useRef<null | HTMLDivElement>(null);

  return (
    <KBarProvider actions={actions}>
      <CommandBar />
      <div className="w-full min-h-screen flex flex-col justify-center bg-fixed bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
        {props.children}
        <div ref={homeRef}>{props.profile}</div>
        <div ref={summaryRef}>{props.summary}</div>
        <div ref={workRef}>{props.work_experience}</div>
        <div ref={academicRef}>{props.academic_background}</div>
        <div ref={projectsRef}>{props.projects}</div>
        <div ref={awardsRef}>{props.awards}</div>
        <div ref={coursesRef}>{props.courses}</div>
      </div>
    </KBarProvider>
  );
}
