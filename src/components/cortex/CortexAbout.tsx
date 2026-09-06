export function CortexAbout() {
  return (
    <section id="capabilities" className="bg-[#F7F8FA] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-[clamp(1.75rem,8vw,2.25rem)] font-extrabold tracking-tight text-neutral-950 uppercase">
            About Us
          </h2>
          <p className="mt-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Sovereign Tech in Its Purest State.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-[11px] leading-relaxed text-neutral-600 sm:mt-10 sm:gap-8 md:gap-12 md:text-sm md:text-justify">
          <p>
            CORTEXIO Softsolutions was founded on a singular belief: enterprise infrastructure should outlive the subscription cycles that constrain it. We eliminate recurring cloud dependencies by engineering custom microservices and sovereign architectures that belong entirely to the client. Every system we design is built for lifetime ownership — no vendor lock-in, no perpetually renewing licenses, no hidden operational drift. From the ground up, our platforms are architected for operational autonomy, giving organizations the rare ability to scale without sacrificing control.
          </p>
          <p>
            Engineering precision is not a department at CORTEXIO; it is the operating system. Our teams work in deep collaboration with client leadership to translate complex operational realities into bespoke software architectures. High-performance scalability is engineered into every layer — from distributed databases and event-driven pipelines to real-time observability stacks. The result is infrastructure that feels less like a vendor relationship and more like a permanent, embedded extension of the enterprise itself.
          </p>
        </div>
      </div>
    </section>
  );
}
