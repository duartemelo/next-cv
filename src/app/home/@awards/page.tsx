import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";

import awards from "@/data/awards";

export default function Awards() {
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
            Awards
          </Text>

          {awards.map((item) => (
            <InsideSection.Root key={item.awardTitle}>
              <div className="flex flex-col md:flex-1">
                <InsideSection.Title href={item.awardLink}>
                  {item.awardTitle}
                </InsideSection.Title>
                <InsideSection.Description>
                  {item.awardDescription}
                </InsideSection.Description>
                <InsideSection.Footer>
                  {item.awardInstitution}
                </InsideSection.Footer>
              </div>

              <InsideSection.Date>{item.awardDate}</InsideSection.Date>
            </InsideSection.Root>
          ))}
        </Section>
      </div>
    </>
  );
}
