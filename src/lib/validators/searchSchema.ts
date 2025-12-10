import { z } from 'zod'

export const searchSchema = z.object({
    keyword: z.string().min(1).max(200),
    minSubs: z.number().int().nonnegative().optional(),
    maxSubs: z.number().int().nonnegative().optional(),
    country: z.string().optional()
})