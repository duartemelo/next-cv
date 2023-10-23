import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";

import courses from "@/data/courses";

export default function Courses() {
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
            Courses
          </Text>

          {courses.map((item) => (
            <InsideSection.Root key={item.courseTitle}>
              <div className="flex flex-col md:flex-1">
                <InsideSection.Title>{item.courseTitle}</InsideSection.Title>
                <InsideSection.Description>
                  {item.courseDescription}
                </InsideSection.Description>
                <InsideSection.Footer>{item.courseTools}</InsideSection.Footer>
              </div>

              <InsideSection.Interval
                start_at={item.courseStart}
                finish_at={item.courseEnd}
              />
            </InsideSection.Root>
          ))}
        </Section>
      </div>
    </>
  );
}
