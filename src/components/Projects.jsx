"use client";

import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 md:py-32 bg-white/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Featured Projects</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={project.featured ? "md:col-span-2 lg:col-span-3" : ""}
              >
                <Card className={`h-full flex flex-col ${project.featured ? "border-purple-500/50 bg-purple-500/5" : ""}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        {project.featured && <Badge className="mb-2">Featured Project</Badge>}
                        <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base text-gray-400">
                      {project.description}
                    </CardDescription>
                    {project.details && (
                      <ul className="list-disc list-inside mt-4 space-y-1 text-sm text-gray-500">
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
