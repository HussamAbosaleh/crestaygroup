import { useEffect, useState } from "react";
import logoAsset from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useI18n } from "../../lib/i18n";
import type { Lang } from "../../lib/i18n";

const links = [
  { id: "about", k: "nav.about" },
  { id: "structure", k: "nav.structure" },
  { id: "ventures", k: "nav.ventures" },
  { id: "strategy", k: "nav.strategy" },
  { id: "contact", k: "nav.contact" },
];

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
       scrolled
  ? "backdrop-blur-xl bg-[oklch(0.05_0.005_240/0.85)] border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
  : "" }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
         <img
  src={logoAsset}
  alt="Crestay Group"
  className="h-15 w-15 rounded-lg object-cover"
/>
         <span className="hidden font-medium display text-xl tracking-[0.2em] text-white sm:block">
            CRESTAY <span className="white-text">GROUP</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium tracking-wide text-white/80 transition-all duration-300 hover:text-[var(--gold)]"
            >
              {t(l.k)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {(["en", "de", "ar"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors ${
                  lang === l ? "bg-[var(--gold)] text-[var(--onyx-deep)]" : "text-white/60 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[var(--onyx-deep)] lg:hidden">
          <div className="container-x flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-base text-white/80"
              >
                {t(l.k)}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              {(["en", "de", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                    lang === l ? "bg-[var(--gold)] text-[var(--onyx-deep)]" : "border border-white/20 text-white/70"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
