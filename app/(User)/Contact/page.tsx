import ContactForm from "@/components/ContactForm";
import BranchLocator from "@/components/BranchLocator";

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-12">
      <ContactForm />
      <BranchLocator />
    </div>
  );
}
