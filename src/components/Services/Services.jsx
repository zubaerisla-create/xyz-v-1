
import React, { useState, lazy, Suspense } from "react";
import Title from "../Title/Title";
import { Element } from "react-scroll";
const Tilt = lazy(() => import("react-parallax-tilt"));
import { FaCheckCircle, FaTimes, FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaGlobe, FaMobileAlt, FaTachometerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const subscriptionPlans = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Modern, responsive & SEO-optimized web applications.",
    price: "$499",
    period: "/ project or month",
    badge: "Popular",
    icon: FaGlobe,
    gradient: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    features: [
      "Custom React & Next.js Frontend",
      "100% Mobile & Tablet Responsive",
      "VPS Server Setup & Nginx / SSL Config",
      "SEO & Core Web Vitals Optimization",
      "API Testing & 1 Month Support"
    ]
  },
  {
    id: "full-stack-mobile",
    title: "Full Stack & Mobile App",
    subtitle: "Complete web platform + cross-platform mobile apps.",
    price: "$999",
    period: "/ project or month",
    badge: "Best Value",
    icon: FaMobileAlt,
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
    features: [
      "Full Web Platform + Android & iOS Mobile App",
      "iOS Deployment (TestFlight & App Store)",
      "Android Publishing (Google Play Store)",
      "Node.js / Express / Django Backend",
      "VPS & AWS Deployment with Docker & SSL",
      "3 Months Priority Support & QA Testing"
    ]
  },
  {
    id: "enterprise-perf",
    title: "Enterprise & Optimization",
    subtitle: "High-scale architecture, AWS cloud & speed optimization.",
    price: "$1,499",
    period: "/ custom tier",
    badge: "Enterprise",
    icon: FaTachometerAlt,
    gradient: "from-purple-500 to-indigo-500",
    bgLight: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    features: [
      "AWS Cloud Infrastructure (EC2, S3, CloudFront)",
      "Linux VPS Cluster, Nginx Load Balancing & Docker",
      "End-to-End Mobile & Web Automated Testing",
      "Lighthouse 95+ Speed & Caching Overhaul",
      "AI Automation & Custom AI Agent Integration",
      "24/7 Priority Support & Maintenance"
    ]
  }
];

const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: ""
  });

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStatus("idle");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required contact fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7b8df874-281c-47f8-bb32-95f6a3baf6e9",
          subject: `Service Subscription Request: ${selectedPlan?.title} (${selectedPlan?.price})`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          plan: selectedPlan?.title,
          plan_price: selectedPlan?.price,
          message: `Subscription Plan: ${selectedPlan?.title}\nPrice: ${selectedPlan?.price}\nPhone/WhatsApp: ${formData.phone}\nClient Requirements: ${formData.requirements || "No additional requirements specified."}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        toast.success("Subscription request sent successfully! 🎉 Abdullah will contact you via email shortly.");
        setFormData({ name: "", email: "", phone: "", requirements: "" });
        setTimeout(() => handleCloseModal(), 1500);
      } else {
        throw new Error(result.message || "Failed to submit subscription request");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      toast.error("Failed to send subscription request. Please try again!");
    }
  };

  return (
    <Element name="services" className="element pt-2 pb-6 sm:pt-4 sm:pb-8 bg-[#f5f4f0] dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title={"Services & Subscriptions"}
          subtitle={"Choose a subscription plan or service tier to start your next project."}
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {subscriptionPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Tilt
                key={plan.id}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#ffffff"
                className="rounded-3xl"
                gyroscope={false}
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative group bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl border border-gray-200 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${plan.bgLight} ${plan.textColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${plan.gradient} text-white shadow-sm`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {plan.subtitle}
                    </p>

                    <div className="flex items-baseline mb-6">
                      <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium ml-2">
                        {plan.period}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 mb-8 pt-4 border-t border-gray-100 dark:border-slate-700/60">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <FaCheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.textColor}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleOpenModal(plan)}
                    className={`w-full py-3.5 px-6 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-bold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2`}
                  >
                    <span>Subscribe / Select Plan</span>
                    <span>→</span>
                  </button>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>

      {/* Subscription Request Form Modal */}
      {isModalOpen && selectedPlan && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-lg w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/80 flex items-center justify-between">
              <div>
                <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-gradient-to-r ${selectedPlan.gradient} text-white shadow-sm inline-block mb-1`}>
                  Selected Plan
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Subscribe to {selectedPlan.title} ({selectedPlan.price})
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Email Address * (You will receive a confirmation here)
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 15600 47265"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Project Details / Special Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe your project goals, timeline, or any specific technologies..."
                  rows={4}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white text-sm outline-none resize-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${selectedPlan.gradient} text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    status === "loading" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <span>Sending Request...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Submit Subscription Request</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center leading-tight">
                🔒 Your request will be delivered directly to Abdullah Al Zubaer's inbox. He will reply to discuss project details.
              </p>
            </form>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Services;