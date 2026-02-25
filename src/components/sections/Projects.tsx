"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { useStagger } from "@/components/animations/gsap-hooks";
import ClipPath from "../ClipPath";
import { motion } from "motion/react"; 

export function Projects() {
  const projectsRef = useStagger(0.15);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
        >
          <motion.div
            className="inline-block mb-3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <span className="text-xs font-mono tracking-widest text-primary uppercase border border-primary/30 rounded-full px-4 py-1 bg-primary/5">
              PROJECTS
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl mb-4 font-sora">
            Featured{" "}
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sora">
            Explore some of my recent work and side projects
          </p>
        </motion.div>

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
