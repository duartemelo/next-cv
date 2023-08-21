"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { change } from "@/store/scrollSlice";

import useScrollDetection from "@/hooks/useScrollDetection";

import Section from "@/components/atom/Section";
import Text from "@/components/atom/Text";

import { InsideSection } from "@/components/organism/InsideSection";

export default function Projects() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useScrollDetection(ref);

  // TODO: link to projects

  useEffect(() => {
    if (inViewport) {
      dispatch(change("projects"));
    }
  }, [inViewport, dispatch]);

  return (
    <>
      <div ref={ref}>
        <Section className="gap-10 flex-col">
          <Text
            as="h1"
            size="4xl"
            weight="bold"
            className="text-white self-start"
          >
            Projects
          </Text>

          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>React Movies App</InsideSection.Title>
              <InsideSection.Description>
                A web app that lists movies from the Movie Database API.
                <br />
                Has authentication using Firebase.
              </InsideSection.Description>
              <InsideSection.Tools>
                react | react router | custom hooks | redux | css modules |
                firebase
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="mar 2023" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>IPMA Discord Bot</InsideSection.Title>
              <InsideSection.Description>
                A bot that consists in sending a city&apos;s (or multiple
                cities&apos;) weather info for a Discord chat channel.
                <br />
                Uses IPMA API.
              </InsideSection.Description>
              <InsideSection.Tools>
                python | discord.py | requests.py | postgresql
              </InsideSection.Tools>
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
              <InsideSection.Tools>
                angular | python | flask | mongodb | nginx | apache
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="jul 2022" finish_at="set 2022" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>EPB Clube Microsoft</InsideSection.Title>
              <InsideSection.Description>
                A school club that ensures knowledge in Microsoft Tools to the
                students.
                <br />
                We prepared more than 100 students for the Excel Microsoft
                Office Specialist Exam.
              </InsideSection.Description>
            </div>

            <InsideSection.Interval start_at="set 2019" finish_at="jul 2020" />
          </InsideSection.Root>
          <InsideSection.Root>
            <div className="flex flex-col md:flex-1">
              <InsideSection.Title>FeedyVet</InsideSection.Title>
              <InsideSection.Description>
                Manage your domestic animals in a simple and easy way with a web
                app that connects veterinary clinics and their clients.
              </InsideSection.Description>
              <InsideSection.Tools>
                react | redux | firebase
              </InsideSection.Tools>
            </div>

            <InsideSection.Interval start_at="set 2019" finish_at="jul 2020" />
          </InsideSection.Root>
        </Section>
      </div>
    </>
  );
}
