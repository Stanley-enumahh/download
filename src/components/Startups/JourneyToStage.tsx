const steps = [
  {
    number: "01",
    tag: "APPLICATIONS OPEN",
    title: "Submit Your Pitch Deck",
    description:
      "Complete the online form detailing your business model, traction, and funding ask.",
    align: "left",
  },
  {
    number: "02",
    tag: "INITIAL SCREENING",
    title: "Expert Review Panel",
    description:
      "Our committee of industry experts evaluates applications based on the core criteria.",
    align: "right",
  },
  {
    number: "03",
    tag: "SEMI-FINALS",
    title: "Virtual Pitch Sessions",
    description:
      "Top 50 startups pitch virtually to select investors to secure a spot on the main stage.",
    align: "left",
  },
  {
    number: "04",
    tag: "MAIN EVENT",
    title: "Live Finals at Download Tech",
    description:
      "The top 10 finalists compete live on the main stage for the grand prize.",
    align: "right",
  },
];

export default function JourneyToStage() {
  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Journey to the Stage
          </h2>
          <p className="text-white/80 text-base max-w-xl leading-relaxed">
            Review the application timeline to ensure you don't miss key
            deadlines. Early applicants receive priority review.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line — hidden on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 py-8"
            >
              {/* Left slot */}
              <div className="w-full md:w-[45%] md:pr-10 flex md:justify-end">
                {step.align === "left" ? (
                  <div className="border border-white/10 bg-[#0a1e35] rounded-2xl p-6 flex flex-col gap-2 w-full md:max-w-sm text-left">
                    <span className="text-[#F48636] text-xs font-semibold uppercase tracking-widest">
                      {step.tag}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>

              {/* Center number */}
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-xl border border-[#4a90d9]/40 bg-[#031632] flex items-center justify-center">
                <span className="text-[#4a90d9] text-sm font-bold">
                  {step.number}
                </span>
              </div>

              {/* Right slot */}
              <div className="w-full md:w-[45%] md:pl-10 flex md:justify-start">
                {step.align === "right" ? (
                  <div className="border border-white/10 bg-[#0a1e35] rounded-2xl p-6 flex flex-col gap-2 w-full md:max-w-sm text-left md:text-right">
                    <span className="text-[#F48636] text-xs font-semibold uppercase tracking-widest">
                      {step.tag}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
