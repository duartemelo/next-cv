import Icon from "@/components/atom/Icon";
import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";
import { AiFillGithub } from "react-icons/ai";

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

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title
                href="https://github.com/duartemelo/react-movies-app"
                className="mt-0"
                icon={<AiFillGithub />}
              >
                React Movies App
              </InsideSection.Title>

              <InsideSection.Description>
                A web app that lists movies from the Movie Database API.
                <br />
                Has authentication using Firebase.
              </InsideSection.Description>
              <InsideSection.Footer>
                react | react router | custom hooks | redux | css modules |
                firebase
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="mar 2023" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title
                href="https://github.com/duartemelo/IPMADiscordBot"
                className="mt-0"
                icon={<AiFillGithub />}
              >
                IPMA Discord Bot
              </InsideSection.Title>
              <InsideSection.Description>
                A bot that consists in sending a city&apos;s (or multiple
                cities&apos;) weather info for a Discord chat channel.
                <br />
                Uses IPMA API.
              </InsideSection.Description>
              <InsideSection.Footer>
                python | discord.py | requests.py | postgresql
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="jan 2022" finish_at="nov 2022" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>Barbershop Web App</InsideSection.Title>
              <InsideSection.Description>
                Web app where a barber can manage it&apos;s own business and
                clients can book their appointments.
              </InsideSection.Description>
              <InsideSection.Footer>
                angular | python | flask | mongodb | nginx | apache
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="jul 2022" finish_at="sep 2022" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>EPB Clube Microsoft</InsideSection.Title>
              <InsideSection.Description>
                A school club that ensures knowledge in Microsoft Tools to the
                students.
                <br />
                We prepared more than 100 students for the Excel and Word
                Microsoft Office Specialist Exams.
              </InsideSection.Description>
              <InsideSection.Footer>
                microsoft excel | microsoft word
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="sep 2019" finish_at="jul 2020" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title
                href="https://github.com/duartemelo/FeedyVet"
                className="mt-0"
                icon={<AiFillGithub />}
              >
                FeedyVet
              </InsideSection.Title>
              <InsideSection.Description>
                Manage your domestic animals in a simple and easy way with a web
                app that connects veterinary clinics and their clients.
              </InsideSection.Description>
              <InsideSection.Footer>
                react | redux | firebase
              </InsideSection.Footer>
            </div>

            <InsideSection.Interval start_at="sep 2019" finish_at="jul 2020" />
          </InsideSection.Root>
        </Section>
      </div>
    </>
  );
}
