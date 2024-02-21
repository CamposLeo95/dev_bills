import { z } from "zod";

export const createCategorySchema = {
  name: z.string(),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
};

// ? transformamos o categoryDTO em uma inferencia do create category pois eles usaram os mesmo dados

const createCategoryObject = z.object(createCategorySchema);
export type CategoryDTO = z.infer<typeof createCategoryObject>;
