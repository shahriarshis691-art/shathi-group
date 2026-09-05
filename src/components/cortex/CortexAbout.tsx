export function CortexAbout() {
  return (
    <section id="capabilities" className="bg-[#F7F8FA] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 uppercase md:text-4xl">
            About Us
          </h2>
          <p className="mt-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Sovereign Tech in Its Purest State.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 text-xs leading-relaxed text-neutral-600 md:grid-cols-2 md:text-sm md:text-justify">
          <p>
            Cortex Soft Solutions was founded on a singular belief: enterprise infrastructure should outlive the subscription cycles that constrain it. We eliminate recurring cloud dependencies by engineering custom microservices and sovereign architectures that belong entirely to the client. Every system we design is built for lifetime ownership — no vendor lock-in, no perpetually renewing licenses, no hidden operational drift. From the ground up, our platforms are architected for operational autonomy, giving organizations the rare ability to scale without sacrificing control.
          </p>
          <p>
            Engineering precision is not a department at Cortex; it is the operating system. Our teams work in deep collaboration with client leadership to translate complex operational realities into bespoke software architectures. High-performance scalability is engineered into every layer — from distributed databases and event-driven pipelines to real-time observability stacks. The result is infrastructure that feels less like a vendor relationship and more like a permanent, embedded extension of the enterprise itself.
          </p>
        </div>
      </div>
    </section>
  );
}
