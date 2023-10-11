"use client";

import React, { useRef } from "react";
import Icon from "@/components/atom/Icon";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import {
  AiFillBook,
  AiFillCode,
  AiFillCopy,
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
  AiFillProfile,
} from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";

export default function Layout(props: {
  children: React.ReactNode;
  profile: React.ReactNode;
  summary: React.ReactNode;
  work_experience: React.ReactNode;
  academic_background: React.ReactNode;
  projects: React.ReactNode;
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
      shortcut: ["g", "a"],
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
      shortcut: ["p"],
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

  // TODO: create component for Kbar

  const summaryRef = useRef<null | HTMLDivElement>(null);
  const homeRef = useRef<null | HTMLDivElement>(null);
  const workRef = useRef<null | HTMLDivElement>(null);
  const academicRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 bg-[rgba(0,0,0,0.8)] box-border">
          <KBarAnimator className=" w-full max-w-[700px] rounded overflow-hidden backdrop-blur-sm">
            <KBarSearch
              placeholder="Enter a command or search..."
              className="px-4 py-3 text-base w-full box-border outline-none border-none m-0 bg-[rgba(255,255,255,0.1)] text-white"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <div className="w-full min-h-screen flex flex-col justify-center bg-fixed bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
        {props.children}
        <div ref={homeRef}>{props.profile}</div>
        <div ref={summaryRef}>{props.summary}</div>
        <div ref={workRef}>{props.work_experience}</div>
        <div ref={academicRef}>{props.academic_background}</div>
        <div ref={projectsRef}>{props.projects}</div>
      </div>
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          // TODO: Kbar section
          <div className="text-[#aaa] text-sm pt-2 px-2 bg-[rgba(255,255,255,0.1)]">
            {item}
          </div>
        ) : (
          // TODO: Kbar button
          <div
            className={`text-[#d3d3d3] cursor-pointer flex justify-between items-center py-3 px-2 h-min [&>.next-icon]:text-xl ${
              active
                ? "bg-[rgba(255,255,255,0.05)]"
                : "bg-[rgba(255,255,255,0.1)]"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              {item.name}
            </div>

            <div className="flex items-center gap-2">
              {item.shortcut &&
                item.shortcut.length > 0 &&
                item.shortcut.map((item, key) => (
                  <span
                    key={key}
                    className="w-[20px] h-[20px] rounded bg-[var(--primary)] flex justify-center items-center"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        )
      }
    />
  );
}
