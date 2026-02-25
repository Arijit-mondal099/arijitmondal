"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ── Word-by-word reveal ── */
function RevealText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            delay: delay + i * 0.06,
          }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  email: Mail,
  phone: Phone,
};

export function Hero() {
  const [hoverBtn, setHoverBtn] = useState<string | null>(null);

  return (
    <section
      id="home"
      className="section-padding min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="container-custom text-center space-y-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 18,
            delay: 0.2,
          }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-sora">
            Hi, I&apos;m{" "}
            <motion.span
              className="text-gradient relative inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {PERSONAL_INFO.name}

              <Image
                src={"/app_images/curve.png"}
                alt="title-curve-image"
                width={200}
                height={20}
                className="absolute -bottom-2 left-0 w-full -z-10"
              />
            </motion.span>
          </h1>

          {/* Typewriter subtitle */}
          <motion.p
            className="text-xl sm:text-3xl font-semibold text-muted-foreground font-sora"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <RevealText text={PERSONAL_INFO.title} delay={1} />
          </motion.p>
        </motion.div>

        {/* Body text with word-by-word reveal */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-sm sm:text-lg text-muted-foreground font-sora">
            <RevealText text={PERSONAL_INFO.tagline} delay={1.3} />
          </p>

          <p className="text-xs sm:text-base text-muted-foreground font-grotesk">
            <RevealText text={PERSONAL_INFO.bio} delay={1.6} />
          </p>

          {/* CTA Buttons with magnetic + shimmer */}
          <motion.div
            className="flex flex-row flex-wrap gap-4 justify-center items-center relative z-40"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, type: "spring", stiffness: 120 }}
          >
            {[
              { label: "View My Work", variant: "default" as const },
              { label: "Get In Touch", variant: "outline" as const },
            ].map(({ label, variant }) => (
              <MagneticButton key={label}>
                <motion.div
                  onHoverStart={() => setHoverBtn(label)}
                  onHoverEnd={() => setHoverBtn(null)}
                  className="relative overflow-hidden rounded-[inherit]"
                  whileTap={{ scale: 0.96 }}
                >
                  <Button
                    size="lg"
                    variant={variant}
                    className="cursor-pointer font-code relative z-10"
                  >
                    {label}
                  </Button>
                  {/* Shimmer sweep on hover */}
                  <AnimatePresence>
                    {hoverBtn === label && (
                      <motion.div
                        className="absolute inset-0 -translate-x-full"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                        }}
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        exit={{ x: "200%" }}
                        transition={{ duration: 0.55, ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </MagneticButton>
            ))}
          </motion.div>

          {/* Social icons — staggered pop-in with orbital hover */}
          <div className="flex gap-4 justify-center pt-4 relative z-40">
            {SOCIAL_LINKS.filter((link) =>
              Object.keys(iconMap).includes(link.icon),
            ).map((link, idx) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={
                    link.icon === "email" || link.icon === "phone"
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="relative text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ scale: 0, opacity: 0, rotate: -30 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 14,
                    delay: 2.6 + idx * 0.1,
                  }}
                  whileHover={{
                    scale: 1.25,
                    y: -6,
                    rotate: [0, -8, 8, 0],
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glow ring on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/20 blur-md"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                  <Icon className="h-6 w-6 relative z-10" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator — pulsing ring + bouncing arrow */}
      <motion.div
        className="mt-12 relative flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 120 }}
      >
        {/* Ping ring */}
        <motion.span
          className="absolute h-14 w-14 rounded-full border border-primary/30"
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="h-12 w-12 border flex items-center justify-center rounded-full shadow bg-background/60 backdrop-blur-sm cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, borderColor: "hsl(var(--primary))" }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
