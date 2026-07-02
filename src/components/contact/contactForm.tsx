"use client";

import { useForm } from "react-hook-form";
import { IoSendSharp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // hook up your API here
    reset();
  };

  return (
    <section className="bg-(--navy) py-20 px-6 md:px-16 flex flex-col gap-6 items-center">
      <span className="flex items-center w-[80%] gap-5 justify-center">
        <hr className="hidden md:flex w-[35%] border-white/30" />
        <p className="text-[#83CFFF] text-sm">GET IN TOUCH WITH US</p>
        <hr className="hidden md:flex w-[35%] border-white/30" />
      </span>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Form */}
        <div className="w-full md:flex-1 bg-white/10 rounded-lg p-4 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#F48636] text-xl font-bold">
              Send us a message
            </h2>
            <p className="text-white text-sm leading-relaxed">
              We'd love to hear from you. Fill out the form below and we'll get
              back to you as soon as possible
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Full name + Email row */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-white text-sm">Full name</label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Enter your full name here"
                  className="bg-[#FAFAFA33] border border-[#E1E1E1] text-white placeholder:text-white/20 text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-[#F48636] transition-colors"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="text-white text-sm">Email Address</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  placeholder="your@email.com"
                  className="bg-[#FAFAFA33] border border-[#E1E1E1] text-white placeholder:text-white/30 text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-[#F48636] transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Subject</label>
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="What is it about?"
                className="bg-[#FAFAFA33] border border-[#E1E1E1] text-white placeholder:text-white/30 text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-[#F48636] transition-colors"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Tell us more about your question or concern...."
                rows={5}
                className="bg-[#FAFAFA33] border border-[#E1E1E1] text-white placeholder:text-white/30 text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-[#F48636] transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-(--orange) hover:opacity-90 transition-opacity disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-base mt-2"
            >
              <IoSendSharp size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Contact info */}
        <div className="w-full md:w-72 flex flex-col gap-6">
          {/* Call / WhatsApp */}
          <div className="bg-[#FAFAFA33] rounded-lg p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-green-400" />
              <h3 className="text-[#F48636] font-bold text-base">
                Call us or WhatsApp
              </h3>
            </div>
            <div className="flex flex-col gap-2 pl-1">
              <a
                href="tel:+23470453758140"
                className="text-white text-sm hover:text-[#F48636] transition-colors"
              >
                +234 7045375814
              </a>

              <a
                href="tel:+2348164568682"
                className="text-white text-sm hover:text-[#F48636] transition-colors"
              >
                +234 8164568682
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#FAFAFA33] rounded-lg p-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-red-400" />
              <h3 className="text-[#F48636] font-bold text-base">Email Us</h3>
            </div>
            <a
              href="mailto:downloadtechevent@gmail.com"
              className="text-white text-sm hover:text-[#F48636] transition-colors pl-1"
            >
              downloadtechevent@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
