import { z } from 'zod'

export const zFormFields = z.object({
  jobTitle: z.string().min(1),
  company: z.string().min(1),
  skills: z.string().min(1),
  additionalDetails: z.string().min(1).max(1200),
})

export type FormFields = z.infer<typeof zFormFields>
