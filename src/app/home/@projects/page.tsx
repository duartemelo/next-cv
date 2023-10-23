import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";
import { AiFillGithub } from "react-icons/ai";

import projects from "@/data/projects";

export default function Projects() {
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
            Projects
          </Text>

          {projects.map((item) => (
            <InsideSection.Root key={item.projectTitle}>
              <div className="flex flex-col md:flex-1">
                <InsideSection.Title
                  href={item.projectRepo}
                  icon={item.projectRepo ? <AiFillGithub /> : null}
                >
                  {item.projectTitle}
                </InsideSection.Title>

                <InsideSection.Description>
                  {item.projectDescription}
                </InsideSection.Description>
                <InsideSection.Footer>{item.projectTools}</InsideSection.Footer>
              </div>

              <InsideSection.Interval
                start_at={item.startDate}
                finish_at={item.endDate}
              />
            </InsideSection.Root>
          ))}
        </Section>
      </div>
    </>
  );
}
