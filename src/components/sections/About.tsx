"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SKILLS, PERSONAL_INFO } from "@/lib/constants";
import { useFadeIn, useStagger } from "@/components/animations/gsap-hooks";
import Image from "next/image";
import { Download } from "lucide-react";

export function About() {
  const titleRef = useFadeIn();
  const bioRef = useFadeIn(0.2);
  const skillsRef = useStagger(0.1);

  // Group skills by category
  const skillsByCategory = SKILLS.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SKILLS>,
  );

  const categoryTitles: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Others",
    other: "Other",
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sora">
            Learn more about my background and skills
          </p>
        </div>

        {/* Bio */}
        <div
          ref={bioRef as React.RefObject<HTMLDivElement>}
          className="mb-16 max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader className="flex items-center justify-between gap-4">
              <CardTitle>Background</CardTitle>

              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 text-primary-foreground font-medium text-sm hover:opacity-90 transition"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-muted-foreground">
                📍 {PERSONAL_INFO.location}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">
            Skills & Technologies
          </h3>

          <div
            ref={skillsRef as React.RefObject<HTMLDivElement>}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{categoryTitles[category] || category}</CardTitle>
                  <CardDescription>
                    {skills.length} skill{skills.length !== 1 ? "s" : ""}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300"
                      >
                        <div className="w-20 h-20 border p-2 shadow rounded-2xl overflow-hidden">
                          <Image
                            src={skill.icon!}
                            alt={skill.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <p className="text-sm font-semibold">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
