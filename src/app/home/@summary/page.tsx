import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

// TODO: create Image component
import Image from "next/image";

import profileImage from "@/assets/images/profile.jpg";

// TODO: Fix responsive
export default function Summary() {
  return (
    <Section className="gap-10">
      <div className="flex flex-col flex-1 max-w-[600px]">
        <Text
          as="a"
          // href="https://www.google.com" // TODO: open summary card
          // target="blank"
          size="4xl"
          weight="bold"
          className="text-white"
        >
          Summary
        </Text>
        <Text
          as="p"
          size="lg"
          weight="regular"
          className="text-white mt-4 text-justify"
        >
          Junior Front-End Engineer specializing in React (with JavaScript and
          TypeScript) at Useflow Europa. Passionate about problem-solving and
          dedicated to delivering high-quality solutions. With a strong
          foundation in IT engineering, I have demonstrated exceptional
          analytical thinking and the ability to adapt swiftly to new
          challenges. Recognized as an award-winning academic achiever, I am
          committed to continuously updating my skills to stay at the forefront
          of industry trends. I have recently completed my IT Engineering
          Bachelor&apos;s degree while gaining valuable hands-on experience
          through a curricular internship at Useflow Europa.
        </Text>
      </div>
      <div className="flex flex-1 items-center self-center justify-center">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="max-h-[400px] object-contain"
        />
      </div>
    </Section>
  );
}
