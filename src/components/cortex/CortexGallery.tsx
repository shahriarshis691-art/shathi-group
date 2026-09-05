import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80",
    alt: "Enterprise datacenter with organized server racks",
    label: "Enterprise Datacenter",
  },
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    alt: "Executive engineering workspace with clean minimal workstation",
    label: "Executive Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    alt: "Modern server room with blue ambient lighting",
    label: "Server Architecture",
  },
];

export function CortexGallery() {
  return (
    <section className="bg-[#F7F8FA] pb-24">
      <div className="mx-auto max-w-6xl px-6 mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200/80 bg-neutral-100 shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
