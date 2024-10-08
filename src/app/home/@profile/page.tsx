import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { Button } from "@/components/atom/Button";
import Icon from "@/components/atom/Icon";
import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

export default function Profile() {
  return (
    <div>
      <Section className="flex-col">
        <Text
          as="h1"
          size="5xl"
          weight="bold"
          align="center"
          className="text-[var(--white)]"
        >
          Duarte Melo
        </Text>
        <Text
          as="p"
          size="2xl"
          weight="light"
          className="mt-6 text-[var(--white)]"
          align="center"
          italic={true}
        >
          &quot;Programming isn&apos;t about what you know; it&apos;s about what you can figure out.&quot;
        </Text>
        <div className="flex gap-4 mt-6 flex-col sm:flex-row">
          <Button.Root
            className="bg-white px-5 py-1 rounded text-[var(--dark-400)] hover:text-[var(--white)] hover:bg-purple-950 transition ease-in-out"
            to="https://github.com/duartemelo/"
            target="blank"
          >
            <Button.LeftIcon>
              <Icon>
                <AiFillGithub />
              </Icon>
            </Button.LeftIcon>
            GitHub Profile
          </Button.Root>

          <Button.Root
            className="bg-[var(--white)] px-5 py-1 rounded text-[var(--dark-400)] hover:text-[var(--white)] hover:bg-blue-600 transition ease-in-out"
            to="https://www.linkedin.com/in/duarteribeiromelo/"
            target="blank"
          >
            <Button.LeftIcon>
              <Icon>
                <AiFillLinkedin />
              </Icon>
            </Button.LeftIcon>
            Linkedin Profile
          </Button.Root>
        </div>
      </Section>
    </div>
  );
}
