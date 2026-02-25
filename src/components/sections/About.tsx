"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SKILLS, PERSONAL_INFO } from "@/lib/constants";
import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { motion } from "motion/react";

function InfiniteMarquee({
  skills,
  direction = "left",
  speed = 30,
}: {
  skills: typeof SKILLS;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="relative overflow-hidden">
      {/* Left right fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-linear-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-linear-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <motion.div
            key={`${skill.name}-${i}`}
            className="flex flex-col items-center gap-2 group cursor-default select-none"
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <div className="w-16 h-16 border bg-card p-2 shadow-sm rounded-2xl overflow-hidden">
              <Image
                src={skill.icon!}
                alt={skill.name}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs font-semibold text-muted-foreground transition-colors whitespace-nowrap">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function About() {
  // Split skills for alternating rows
  const frontendSkills = SKILLS.filter((s) => s.category === "Frontend");
  const backendSkills = SKILLS.filter((s) => s.category === "Backend");
  const allOthers = SKILLS.filter((s) => s.category === "Cloud & Tools" || s.category === "AI and Data");

  // Build marquee rows: [skills, direction, speed]
  const marqueeRows: [typeof SKILLS, "left" | "right", number][] = [
    [frontendSkills.length ? frontendSkills : SKILLS.slice(0, 6), "left", 25],
    [backendSkills.length ? backendSkills : SKILLS.slice(3, 9), "right", 25],
    [allOthers.length ? allOthers : SKILLS.slice(1, 7), "left", 25],
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary)/0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
        {/* ── Section Title ── */}
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
              Who I Am
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl mb-4 font-sora">
            About{" "}
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Me
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sora">
            Learn more about my background and skills
          </p>
        </motion.div>

        {/* ── Bio Card ── */}
        <motion.div
          className="mb-20 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 18,
            delay: 0.15,
          }}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="relative overflow-hidden border-border/60 hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5">
              {/* Card shimmer border */}
              <motion.div
                className="absolute inset-0 rounded-[inherit] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)/0.08) 0%, transparent 50%, hsl(var(--primary)/0.05) 100%)",
                }}
              />

              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <CardTitle className="text-xl font-sora">Background</CardTitle>
                <motion.a
                  href="/resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 text-primary-foreground font-medium text-sm overflow-hidden relative"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                  {/* Shimmer */}
                  <motion.span
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                    }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              </CardHeader>

              <CardContent className="space-y-4">
                {PERSONAL_INFO.bio
                  .split(". ")
                  .filter(Boolean)
                  .map((sentence, i) => (
                    <motion.p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {sentence.trim()}
                      {i <
                      PERSONAL_INFO.bio.split(". ").filter(Boolean).length - 1
                        ? "."
                        : ""}
                    </motion.p>
                  ))}

                <motion.p
                  className="flex items-center gap-2 text-muted-foreground text-sm pt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                  </motion.span>
                  {PERSONAL_INFO.location}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* ── Skills Section ── */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h3 className="text-4xl font-semibold font-sora">
              Skills & <span className="text-gradient">Technologies</span>
            </h3>
          </motion.div>

          {/* Marquee rows */}
          <div className="space-y-8">
            {marqueeRows.map(([rowSkills, dir, speed], rowIdx) => (
              <motion.div
                key={rowIdx}
                initial={{ x: dir === "left" ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: rowIdx * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                }}
              >
                {/* Row label */}
                <div className="flex items-center gap-3 mb-4 px-1">
                  <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
                    {rowIdx === 0 ? "Frontend" : rowIdx === 1 ? "Backend" : "AI Cloud and Tools"}
                  </span>
                </div>

                {/* Pause on hover via CSS */}
                <div className="group">
                  <div className="group-hover:[&_.marquee-track]:pause">
                    <InfiniteMarquee
                      skills={rowSkills}
                      direction={dir}
                      speed={speed}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
