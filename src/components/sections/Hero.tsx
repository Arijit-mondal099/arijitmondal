"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import {
  usePageLoadAnimation,
  useStagger,
} from "@/components/animations/gsap-hooks";
import Image from "next/image";

export function Hero() {
  const titleRef = usePageLoadAnimation();
  const contentRef = useStagger(0.2);

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center justify-center bg-linear-to-b from-background via-background to-muted/20"
    >
      <Image
        src={"/app_images/grid.png"}
        alt="hero-grid-image"
        fill
        className="object-cover"
      />
      <Image
        src={"/app_images/stars.svg"}
        alt="hero-grid-image"
        fill
        className="object-cover"
      />

      <div className="container-custom text-center space-y-8">
        {/* Animated Title */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-sora">
            Hi, I&apos;m {" "}
            <span className="text-gradient relative inline-block">
              {PERSONAL_INFO.name}
              <Image
                src={"/app_images/curve.png"}
                alt="title-curve-image"
                width={200}
                height={20}
                className="absolute -bottom-2 left-0 w-full -z-10"
              />
            </span>
          </h1>
          <p className="text-xl sm:text-3xl font-semibold text-muted-foreground font-sora">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* Staggered Content */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <p className="text-sm sm:text-lg text-muted-foreground font-sora">
            {PERSONAL_INFO.tagline}
          </p>

          <p className="text-xs sm:text-base text-muted-foreground font-grotesk">{PERSONAL_INFO.bio}</p>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center relative z-50">
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="cursor-pointer font-code"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToContact}
              className="cursor-pointer font-code"
            >
              Get In Touch
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex gap-4 justify-center pt-4 relative z-50">
            {SOCIAL_LINKS.filter((link) =>
              ["github", "linkedin", "twitter", "instagram", "email", "phone"].includes(link.icon)
            ).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.icon === "email" || link.icon === "phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label={link.name}
              >
                {link.icon === "github" && <Github className="h-6 w-6" />}
                {link.icon === "linkedin" && <Linkedin className="h-6 w-6" />}
                {link.icon === "twitter" && <Twitter className="h-6 w-6" />}
                {link.icon === "instagram" && <Instagram className="h-6 w-6" />}
                {link.icon === "email" && <Mail className="h-6 w-6" />}
                {link.icon === "phone" && <Phone className="h-6 w-6" />}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce h-12 w-12 mx-auto border flex items-center justify-center rounded-full shadow">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
