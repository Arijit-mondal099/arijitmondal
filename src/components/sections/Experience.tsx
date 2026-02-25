"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TIMELINE } from "@/lib/constants";
import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experienceItems = TIMELINE.filter((item) => item.type === "experience");
  const educationItems = TIMELINE.filter((item) => item.type === "education");

  const formatDate = (dateString: string) => {
    if (dateString.toLowerCase() === "present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const renderTimelineItems = (items: typeof TIMELINE) => (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          {/* Timeline Line */}
          {index !== items.length - 1 && (
            <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
          )}

          <div className="flex gap-4">
            {/* Icon */}
            <div className="shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {item.type === "experience" ? (
                  <Briefcase className="h-5 w-5" />
                ) : (
                  <GraduationCap className="h-5 w-5" />
                )}
              </div>
            </div>

            {/* Content */}
            <Card className="flex-1 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {item.organization}
                      {item.location && ` • ${item.location}`}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="section-padding relative">
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
              Experience
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl mb-4 font-sora">
            Experience{" "}
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              & Education
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sora">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.8, duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Work Experience
            </h3>
            {renderTimelineItems(experienceItems)}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.8, duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            {renderTimelineItems(educationItems)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
