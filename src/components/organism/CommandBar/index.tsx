"use client";

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

export default function CommandBar() {
  return (
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
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="text-[#aaa] text-sm pt-2 px-4 bg-[rgba(255,255,255,0.1)]">
            {item}
          </div>
        ) : (
          <div
            className={`text-[#d3d3d3] cursor-pointer flex justify-between items-center py-3 px-4 h-min [&>.next-icon]:text-xl ${
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
                    className="w-[20px] h-[20px] rounded bg-[var(--dark-300)] flex justify-center items-center"
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
