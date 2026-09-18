import Services from "@/components/Services/Services";

export const metadata = {
  title: "Services & Subscriptions | Abdullah Al Zubaer",
  description: "Web Development, Full Stack & Mobile App Development, Enterprise AWS Cloud & Speed Optimization Subscription Plans.",
};

export default function ServicesRoute() {
  return (
    <div className="pt-2 pb-6 bg-[#f5f4f0] dark:bg-slate-900">
      <Services />
    </div>
  );
}
