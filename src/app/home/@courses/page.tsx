import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";
import { AiFillGithub } from "react-icons/ai";

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

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Flutter & Dart - The Complete Guide [2023 Edition]
              </InsideSection.Title>
              <InsideSection.Description>
                Udemy - Maximilian Schwarzmuller
              </InsideSection.Description>
              <InsideSection.Footer>dart | flutter</InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="may 2023" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </InsideSection.Title>
              <InsideSection.Description>
                Udemy - Maximilian Schwarzmuller
              </InsideSection.Description>
              <InsideSection.Footer>
                react | javascript | hooks | redux | react router
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="jan 2020" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Build Responsive Real World Websites with HTML5 and CSS3
              </InsideSection.Title>
              <InsideSection.Description>
                Udemy - Jonas Schmedtmann
              </InsideSection.Description>
              <InsideSection.Footer>
                html5 | css3 | javascript
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="jun 2018" finish_at="aug 2018" />
          </InsideSection.Root>
        </Section>
      </div>
    </>
  );
}
