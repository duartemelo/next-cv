"use client";

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

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
      // icon: <Icon className="ri-file-copy-line" />,
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "General",
      perform: () =>
        window.open("mailto:duarteribeirodemelo@hotmail.com", "_blank"),
      // icon: <Icon className="ri-mail-line" />,
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go to",
      // perform: () => router.push('/'),
      // icon: <Icon className="ri-home-5-line" />,
    },
    {
      id: "summary",
      name: "Summary",
      shortcut: ["g", "s"],
      keywords: "go-summary",
      section: "Go to",
      // perform: () => router.push('/sobre'),
      // icon: <Icon className="ri-user-line" />,
    },
    {
      id: "work-experience",
      name: "Work Experience",
      shortcut: ["g", "w"],
      keywords: "go-work-experience",
      section: "Go to",
      // perform: () => router.push('/projetos'),
      // icon: <Icon className="ri-lightbulb-line" />,
    },
    {
      id: "academic-background",
      name: "Academic Background",
      shortcut: ["g", "a"],
      keywords: "go-academic-background",
      section: "Go to",
      // perform: () => router.push('/setup'),
      // icon: <Icon className="ri-macbook-line" />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["f", "g"],
      keywords: "go-github",
      section: "Follow",
      perform: () => window.open("https://github.com/duartemelo", "_blank"),
      // icon: <Icon className="ri-github-line" />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["f", "l"],
      keywords: "go-linkedin",
      section: "Follow",
      perform: () =>
        window.open("https://www.linkedin.com/in/duarteribeiromelo/", "_blank"),
      // icon: <Icon className="ri-linkedin-line" />,
    },
  ];

  // TODO: pass styles to another file?
  // TODO: create component for Kbar?

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 bg-[rgba(0,0,0,0.8)] box-border">
          <KBarAnimator className="p-12 w-full max-w-[600px]">
            <KBarSearch
              placeholder="Enter a command or search..."
              className="px-4 py-2 text-base w-full box-border outline-none border-none m-0 bg-zinc-800 text-white"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <div className="w-full min-h-screen flex flex-col justify-center bg-fixed bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
        {props.children}
        {props.profile}
        {props.summary}
        {props.work_experience}
        {props.academic_background}
        {props.projects}
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
          <div className="text-white text-sm py-2 bg-zinc-800">{item}</div>
        ) : (
          <div
            className={`text-white cursor-pointer ${
              active ? "bg-zinc-400" : "bg-zinc-800"
            }`}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}
