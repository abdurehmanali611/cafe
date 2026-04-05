import { z } from "zod"

export const contactForm = z.object({
    Full_Name: z.string().min(2, "valid name required"),
    Phone: z.string().min(2, "Valid Phone Number Required"),
    title: z.string().min(2, "Please Enter Your title"),
    message: z.string().min(2, "Please Enter your full message")
})