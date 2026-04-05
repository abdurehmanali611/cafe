"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import CustomFormField, { formFieldTypes } from "@/components/customFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldSet, FieldTitle } from "@/components/ui/field";
import { contactForm } from "@/lib/validations";

const titleOptions = [
  { label: "Reservation", value: "Reservation" },
  { label: "General Inquiry", value: "General Inquiry" },
  { label: "Feedback", value: "Feedback" },
  { label: "Event Booking", value: "Event Booking" },
];

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactForm>>({
    resolver: zodResolver(contactForm),
    defaultValues: {
      Full_Name: "",
      Phone: "",
      title: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    toast.success("Message prepared successfully", {
      description: `Thanks ${values.Full_Name}, your ${values.title.toLowerCase()} message is ready to send.`,
    });
    form.reset();
  });

  return (
    <Card className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(22,16,13,0.96),rgba(40,28,22,0.94),rgba(18,12,10,0.98))] py-0 shadow-[0_28px_80px_-35px_rgba(0,0,0,0.85)]">
      <CardHeader className="relative space-y-4 border-b border-white/10 px-6 py-8 sm:px-8">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-300/8 blur-3xl" />
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/15 bg-white/6 px-4 py-2 text-sm text-amber-100/80">
          <span>Contact Cafi</span>
        </div>
        <div className="space-y-2">
          <CardTitle className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            Tell us what you need.
          </CardTitle>
          <CardDescription className="max-w-xl text-base leading-7 text-stone-300">
            Use the form below for reservations, event requests, or feedback. 
            Keep it simple and we&apos;ll take it from there.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-10 px-6 py-8 sm:px-8">
        <div className="mx-auto grid w-full gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:scale-[1.02]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/65">Reservations</p>
            <p className="mt-1 text-xs leading-5 text-stone-400">Tables & private seating.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-amber-300/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:scale-[1.02]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/65">Events</p>
            <p className="mt-1 text-xs leading-5 text-stone-400">Group requests & pop-ups.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:scale-[1.02]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/65">Feedback</p>
            <p className="mt-1 text-xs leading-5 text-stone-400">Service questions.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mx-auto max-w-4xl space-y-8">
          <FieldSet className="rounded-[2rem] border border-white/10 bg-stone-950/20 p-5 sm:p-8">
            <FieldTitle className="text-base font-medium text-stone-100">Contact Details</FieldTitle>
            <FieldDescription className="text-stone-400">
              Share your details so we can reach you within 24 hours.
            </FieldDescription>
            <FieldGroup className="gap-6 pt-4">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <CustomFormField
                  control={form.control}
                  name="Full_Name"
                  fieldType={formFieldTypes.INPUT}
                  label="Full Name"
                  placeholder="Abdur Rahman"
                  className="h-fit p-2 w-80 rounded-md"
                />
                <CustomFormField
                  control={form.control}
                  name="Phone"
                  fieldType={formFieldTypes.PHONE_INPUT}
                  label="Phone Number"
                  placeholder="+251 91 234 5678"
                  className="h-fit p-2 w-80 rounded-md"
                />
              </div>
              <CustomFormField
                control={form.control}
                name="title"
                fieldType={formFieldTypes.SELECT}
                label="Message Type"
                placeholder="Select a reason"
                options={titleOptions}
                className="h-fit p-2 w-full rounded-md"
              />
              <CustomFormField
                control={form.control}
                name="message"
                fieldType={formFieldTypes.TEXTAREA}
                label="Message"
                placeholder="Write your details here..."
                className="w-full h-40 rounded-md"
              />
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal" className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(251,191,36,0.08))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] max-md:flex-col max-md:items-start gap-4">
            <div className="space-y-1">
              <FieldTitle className="text-sm font-medium text-stone-100">Ready to send?</FieldTitle>
              <FieldDescription className="text-xs text-stone-400">
                Data used only to respond to your inquiry.
              </FieldDescription>
            </div>
            <div className="flex items-center gap-3 max-md:w-full max-md:justify-end">
              <Button type="button" variant="ghost" className="text-stone-400 hover:text-white" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit" className="bg-amber-400 text-stone-950 hover:bg-amber-300 px-6 font-medium">
                Send Message
              </Button>
            </div>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;