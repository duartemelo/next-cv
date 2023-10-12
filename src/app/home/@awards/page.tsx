import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";

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

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Member of the Jury for the Final Project Evaluation (2022/2023)
              </InsideSection.Title>
              <InsideSection.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas doloremque enim sequi consectetur perspiciatis,
                voluptatum porro nobis laboriosam magnam distinctio!
              </InsideSection.Description>
              <InsideSection.Footer>
                Escola Profissional de Braga
              </InsideSection.Footer>
            </div>

            <InsideSection.Date>jul 2023</InsideSection.Date>
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title href="https://ipca.pt/noticia/ipca-recebeu-cerca-de-4000-candidaturas-para-715-vagas-disponiveis/">
                Second Highest Average Grade on University Admission
              </InsideSection.Title>
              <InsideSection.Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, natus!
              </InsideSection.Description>
              <InsideSection.Footer>
                Instituto Politécnico do Cávado e do Ave
              </InsideSection.Footer>
            </div>

            <InsideSection.Date>oct 2020</InsideSection.Date>
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>
                Honorable Mention 2018/2019
              </InsideSection.Title>
              <InsideSection.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                eos!
              </InsideSection.Description>
              <InsideSection.Footer>
                Escola Profissional de Braga
              </InsideSection.Footer>
            </div>

            <InsideSection.Date>jan 2019</InsideSection.Date>
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>Merit Award 2017/2018</InsideSection.Title>
              <InsideSection.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                magnam.
              </InsideSection.Description>
              <InsideSection.Footer>
                Escola Profissional de Braga
              </InsideSection.Footer>
            </div>

            <InsideSection.Date>jan 2018</InsideSection.Date>
          </InsideSection.Root>
        </Section>
      </div>
    </>
  );
}
