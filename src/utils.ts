import { Contact, ContactType, ProjectWithoutId, Tech } from "../types";
import { z } from "zod";

// Input handling schema

export const newProjectSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().url("invalid project URL"),
  tech: z.array(z.nativeEnum(Tech)),
});

export const newContactSchema = z.object({
    type: z.array(z.nativeEnum(ContactType)),
    value: z.string(),
    displayName: z.string().optional(),
    icon: z.string().optional(),
});

export const toNewProject = (object: unknown): ProjectWithoutId => {
  return newProjectSchema.parse(object);
};

export const toNewContact = (object: unknown): Contact => {
  return newContactSchema.parse(object);
};