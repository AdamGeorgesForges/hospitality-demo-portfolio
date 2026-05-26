import Image from "next/image";
import { ArrowRight, Globe, Star, CheckCircle2, ExternalLink } from "lucide-react";

const demos = [
  {
    name: "The Aurelian",
    category: "Luxury Boutique",
    tag: "Live",
    tagline: "An intimate adults-only retreat in the heart of wine country",
    href: "https://hotel-demo-luxury-boutique.pages.dev",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    color: "bg-[#1a1520]",
    accent: "#c9a55a",
    features: ["Wine Country", "Adults Only", "Fine Dining"],
  },
  {
    name: "The Meridian",
    category: "Business Hotel",
    tag: "Live",
    tagline: "Where Houston's business travelers find their stride",
    href: "https://hotel-demo-business-stay.pages.dev",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    color: "bg-[#0f1923]",
    accent: "#2d7d7d",
    features: ["IAH Airport", "Co-working", "Express Check-in"],
  },
  {
    name: "The Paper Mill House",
    category: "Artsy Boutique",
    tag: "Live",
    tagline: "Sleep inside the gallery. Live inside the art.",
    href: "https://hotel-demo-art-house.pages.dev",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    color: "bg-[#1c1a14]",
    accent: "#d4a843",
    features: ["Arts District", "Live Music", "Gallery Spaces"],
  },
  {
    name: "The Governor's House",
    category: "Historic Inn",
    tag: "Live",
    tagline: "Where Texas history becomes your story",
    href: "https://hotel-demo-historic-inn.pages.dev",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    color: "bg-[#2c1810]",
    accent: "#c9a55a",
    features: ["Historic Main Street", "Wine Cellar", "Antique Library"],
  },
  {
    name: "The Timberline Residences",
    category: "Extended Stay",
    tag: "Live",
    tagline: "Your address for 30 days or better",
    href: "https://hotel-demo-extended-stay.pages.dev",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    color: "bg-[#1a1a1a]",
    accent: "#2d7d7d",
    features: ["Near IAH", "Full Kitchens", "Weekly Housekeeping"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e8e4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1a1a1a] flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg">Hospitality Demos</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:adam@odntsolutions.com" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                Contact for your hotel
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-[#c9a55a] tracking-widest uppercase text-xs font-bold mb-4">Independent Hotel Website Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-6">
              Five hotel website demos,<br />
              <span className="text-[#c9a55a]">one portfolio.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              Each demo is a production-ready frontend prototype built to show design direction, UX patterns, and WordPress conversion path for independent hotel operators.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#demos" className="flex items-center gap-2 bg-[#c9a55a] text-[#1a1a1a] px-6 py-3.5 text-sm font-bold hover:bg-[#d4b566] transition-colors">
                View Demos <ArrowRight size={14} />
              </a>
              <a href="mailto:adam@odntsolutions.com" className="flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 text-sm font-bold hover:bg-white/20 transition-colors">
                Discuss Your Hotel Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#fafaf8] border-b border-[#e8e8e4] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "5", label: "Hotel Demos" },
              { n: "5", label: "Live URLs" },
              { n: "Next.js", label: "Tech Stack" },
              { n: "WordPress", label: "Conversion Ready" },
            ].map(({ n, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black text-[#1a1a1a]">{n}</p>
                <p className="text-sm text-[#1a1a1a]/40 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section id="demos" className="py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tight text-[#1a1a1a]">The demos.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <a
                key={demo.name}
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative h-64 overflow-hidden mb-4">
                  <Image
                    src={demo.img}
                    alt={demo.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: demo.color + "aa" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{demo.category}</p>
                    <h3 className="text-2xl font-black text-white mb-2">{demo.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{demo.tagline}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#22c55e] text-white text-xs font-bold px-2 py-1 flex items-center gap-1">
                    <CheckCircle2 size={10} /> {demo.tag}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    {demo.features.map((f) => (
                      <span key={f} className="text-xs text-[#1a1a1a]/40 border border-[#e8e8e4] px-2 py-0.5">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1a1a1a]/60 group-hover:text-[#1a1a1a] transition-colors">Visit live demo</span>
                  <ExternalLink size={14} className="text-[#1a1a1a]/30 group-hover:text-[#c9a55a] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">From prototype to live site.</h2>
          <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Each demo is a production-ready frontend built to WordPress conversion standards. The same visual design, refined UX, and responsive layouts — delivered as a custom WordPress theme, Gutenberg blocks, or headless WordPress with a Next.js frontend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Custom WordPress Theme", desc: "Full PHP/WordPress theme built to match the demo exactly. Editable via the WordPress customizer and block editor." },
              { title: "Gutenberg Block Sections", desc: "Each section becomes a reusable WordPress block pattern. Clients can build and rearrange pages without code." },
              { title: "Headless WordPress + Next.js", desc: "WordPress as the CMS, Next.js as the frontend. The demo IS the production site — fast, secure, and globally distributed." },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center p-6 border border-white/10">
                <CheckCircle2 size={20} className="text-[#c9a55a] mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <a href="mailto:adam@odntsolutions.com" className="inline-flex items-center gap-2 bg-[#c9a55a] text-[#1a1a1a] px-8 py-4 text-sm font-bold hover:bg-[#d4b566] transition-colors">
            Start a conversation <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white border-t border-[#e8e8e4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-4">Ready to talk about your hotel?</h2>
          <p className="text-[#1a1a1a]/50 text-lg leading-relaxed mb-8">
            Whether you need a single landing page, a full website redesign, or a multi-property portfolio — reach out and let's scope it out.
          </p>
          <a href="mailto:adam@odntsolutions.com" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 text-sm font-bold hover:bg-[#3a3a3a] transition-colors">
            adam@odntsolutions.com <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fafaf8] border-t border-[#e8e8e4] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#1a1a1a]/30 text-xs">© 2026 Hospitality Demo Portfolio — Adam GeorgesForges / ODNT Solutions</p>
          <p className="text-[#1a1a1a]/30 text-xs">Prototype work. Not represented as completed client deliverables.</p>
        </div>
      </footer>
    </div>
  );
}
