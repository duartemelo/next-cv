import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

export default function WorkExperience() {
  return (
    <Section>
      <Text
          as="a"
          // href="https://www.google.com" // TODO: open work experience card
          // target="blank"
          size="4xl"
          weight="bold"
          className="text-white"
        >
          Work Experience
        </Text>
    </Section>
  );
}
