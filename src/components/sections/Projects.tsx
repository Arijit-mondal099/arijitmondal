"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { useFadeIn, useStagger } from "@/components/animations/gsap-hooks";
import ClipPath from "../ClipPath";

export function Projects() {
  const titleRef = useFadeIn();
  const projectsRef = useStagger(0.15);

  return (
    <section id="projects" className="section-padding relative">
      <Image
        src={"/app_images/grid.png"}
        alt="projects-grid-image"
        fill
        className="object-cover -z-10"
      />

      <Image
        src={"/app_images/gradient.png"}
        alt="projects-grid-image"
        width={1200}
        height={1200}
        className="absolute object-cover -z-10 bottom-0 right-0"
      />

      <div className="container-custom">
        {/* Section Title */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sora">
            Explore some of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          ref={projectsRef as React.RefObject<HTMLDivElement>}
        >
          {PROJECTS.map((project) => (
            // card container
            <div
              className="block relative p-0.5 bg-no-repeat bg-size-[100%_100%] min-h-100"
              style={{ backgroundImage: "url('/app_images/card-2.svg')" }} // bg border svg url
              key={project.id}
            >
              {/* Content */}
              <div className="relative z-50 h-full w-full flex flex-col gap-8 p-6">
                <div className="px-4 space-y-2">
                  <h2 className="group-hover:text-gradient font-sora text-white text-2xl font-bold">
                    {project.title}
                  </h2>
                  <p className="font-grotesk text-gray-400 text-base font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Tech */}
                <div className="grow px-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="font-code backdrop-blur-2xl text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="grid grid-cols-2 gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" className="backdrop-blur-sm" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* card bg & bg img */}
              <div
                className="absolute inset-0.5 bg-n-8 bg-black"
                style={{ clipPath: "url(#benefits)" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              {/* handle svg border overflow */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
