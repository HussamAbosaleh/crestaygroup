import { motion } from "framer-motion";
import logoAsset from "../../assets/logo.png";
import logoAsset1 from "../../assets/logo1.png";
import logoAsset2 from "../../assets/logo2.png";
import logoAsset3 from "../../assets/logo3.png";
import { useI18n } from "../../lib/i18n";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Clock,
  Leaf,
  ArrowUpRight,
  Code2,
  Rocket,
  Globe2,
  Layers,
  TrendingUp,
  Mail,
  MapPin,
  Check,
  Globe,
} from "lucide-react";

import { SocialLinks } from "./Social";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-[var(--gold)]" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
        {children}
      </span>
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="section-dark relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--gold)] opacity-[0.06] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-x relative">
        <motion.div {...fade} className="mx-auto max-w-4xl text-center">
          <Kicker>{t("hero.kicker")}</Kicker>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[5rem]">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/60 md:text-xl">
            {t("hero.sub")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#ventures"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[var(--onyx-deep)] transition-all hover:bg-[var(--gold-soft)] hover:shadow-[0_10px_40px_-10px_oklch(0.78_0.12_80/0.6)]"
            >
              {t("hero.cta1")}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--gold)] hover:text-[var(--onyx-deep)]"
            >

              {t("hero.cta2")}
            </a>
          </div>
        </motion.div>
        <br />
                 <div className="mt-6 text-xs font-semibold flex items-center justify-center uppercase tracking-[0.25em] text-white/50">
                  {t("hero.tags1")} • {t("hero.tags2")} • {t("hero.tags3")} • {t("hero.tags4")}
                </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 flex items-center justify-center w-full"
        >
          <img src={logoAsset1} alt="" aria-hidden className="w-full max-w-5xl opacity-95"
style={{
  maskImage: "radial-gradient(circle, white 65%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(circle, white 65%, transparent 100%)"
}} />
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <motion.div {...fade} className="md:col-span-5">
          <Kicker>{t("about.kicker")}</Kicker>
          <h2 className="text-4xl leading-tight text-foreground md:text-[3.3rem]">
            {t("about.title")}
          </h2>
        </motion.div>
        <motion.div {...fade} className="md:col-span-7 md:pt-8">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("about.body")}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-11">
            {[
  { n: t("about.stat.media"), l: "" },
  { n: t("about.stat.technology"), l: "" },
  { n: t("about.stat.ai"), l: "" },
].map((s) => (
              <div key={s.l} className="border-t border-border pt-4">
                <div className="font-display text--xl text-foreground md:text-2xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function VisionMission() {
  const { t } = useI18n();
  const items = [
    { k: "vision", icon: Globe2 },
    { k: "mission", icon: Rocket },
  ];
  return (
    <section className="section-dark relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="container-x relative grid gap-6 md:grid-cols-2">
        {items.map(({ k, icon: Icon }, i) => (
          <motion.div
            key={k}
            {...fade}
            transition={{ ...fade.transition, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-10 transition-all hover:border-[var(--gold)]/30"
          >
            <Icon className="mb-6 text-[var(--gold)]" size={32} />
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              {t(`vm.${k}.t`)}
            </div>
            <p className="mt-4 font-display text-2xl leading-snug text-white md:text-3xl">
              {t(`vm.${k}.b`)}
            </p>
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[var(--gold)] opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const valueIcons = {
  innovation: Sparkles,
  integrity: ShieldCheck,
  excellence: Award,
  longterm: Clock,
  sustain: Leaf,
};

export function Values() {
  const { t } = useI18n();
  const keys: (keyof typeof valueIcons)[] = ["innovation", "integrity", "excellence", "longterm", "sustain"];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <Kicker>{t("values.kicker")}</Kicker>
          <h2 className="text-4xl text-foreground md:text-5xl">{t("values.title")}</h2>
        </motion.div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {keys.map((k, i) => {
            const Icon = valueIcons[k];
            return (
              <motion.div
                key={k}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_20px_60px_-30px_oklch(0.78_0.12_80/0.5)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)] group-hover:text-[var(--onyx-deep)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{t(`v.${k}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`v.${k}.b`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Structure() {
  const { t } = useI18n();
  return (
    <section id="structure" className="section-dark relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="container-x relative">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <Kicker>{t("struct.kicker")}</Kicker>
          <h2 className="text-4xl text-white md:text-5xl">{t("struct.title")}</h2>
        </motion.div>

        <div className="mt-16 flex flex-col items-center">
          <div className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-6 py-3 font-display text-lg tracking-wide text-white">
            CRESTAY <span className="gold-text">GROUP</span>
          </div>
          <div className="my-4 h-8 w-px bg-gradient-to-b from-[var(--gold)]/60 to-transparent" />

          <motion.div
            {...fade}
            className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40"
          >
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-xl bg-[var(--onyx-deep)]">
              <img src={logoAsset2} alt="" className="h-25 w-25 rounded-md" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-white">{t("struct.crestay.t")}</h3>
            <p className="mt-2 text-sm text-white/60">{t("struct.crestay.b")}</p>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Ventures() {
  const { t } = useI18n();
  const services = ["ven.s.web", "ven.s.ecom", "ven.s.auto", "ven.s.ai"];
  return (
    <section id="ventures" className="bg-background py-24 md:py-32">
      <div className="container-x">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <Kicker>{t("ven.kicker")}</Kicker>
          <h2 className="text-4xl text-foreground md:text-5xl">{t("ven.title")}</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Crestay venture card */}
          <motion.div
            {...fade}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_30px_80px_-40px_oklch(0.78_0.12_80/0.4)] md:p-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-27 w-27 items-center justify-center rounded-xl bg-[var(--onyx-deep)]">
                <img src={logoAsset2} alt="" className="h-25 w-25 rounded-md" />
              </div>
              <span className="rounded-full bg-[var(--gold)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--gold)]">
                {t("ven.status.active")}
              </span>
            </div>
            <h3 className="mt-8 font-display text-3xl text-foreground">Crestay</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("ven.crestay.tag")}</p>

            <div className="mt-6 border-t border-border pt-6">
              
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                {t("ven.services")}
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={14} className="text-[var(--gold)]" />
                    {t(s)}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://crestay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--onyx-deep)] transition-all hover:bg-[var(--gold-soft)]"
            >
              {t("ven.visit")}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Upcoming venture */}
          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-card/50 p-8 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/50 md:p-10"
          >
            
            <div className="flex items-center justify-between">
              <div className="flex h-27 w-27 items-center justify-center rounded-xl bg-muted">
                <img src={logoAsset3} alt="" className="h-25 w-25 rounded-md" />
              </div>
              <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {t("ven.status.dev")}
              </span>
            </div>
            <h3 className="mt-8 font-display text-3xl text-foreground">{t("ven.upcoming.t")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("ven.upcoming.b")}</p>
            <div className="mt-auto pt-10 text-xs uppercase tracking-widest text-muted-foreground/70">
              ✦ Coming Soon
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Strategy() {
  const { t } = useI18n();
  const items = [
    { y: "2025", k: "strat.2026" },
    { y: "2026", k: "strat.2027" },
    { y: "2027", k: "strat.2028" },
    { y: "∞", k: "strat.future" },
  ];
  return (
    <section id="strategy" className="section-dark relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="container-x relative">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <Kicker>{t("strat.kicker")}</Kicker>
          <h2 className="text-4xl text-white md:text-5xl">{t("strat.title")}</h2>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--gold)]/60 via-[var(--gold)]/20 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.y}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--gold)] ring-4 ring-[var(--onyx-deep)] md:left-1/2" />
                <div className={`pl-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} md:pl-0`}>
                  <div className="font-display text-5xl gold-text md:text-6xl">{it.y}</div>
                  <p className="mt-2 text-lg text-white/70">{t(it.k)}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const whyIcons = [TrendingUp, Code2, Layers, Award, Leaf];

export function Why() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <Kicker>{t("why.kicker")}</Kicker>
          <h2 className="text-4xl text-foreground md:text-5xl">{t("why.title")}</h2>
        </motion.div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((n, i) => {
            const Icon = whyIcons[i];
            return (
              <motion.div
                key={n}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-[var(--gold)] hover:shadow-[0_20px_60px_-30px_oklch(0.78_0.12_80/0.4)]"
              >
                <Icon className="text-[var(--gold)]" size={26} />
                <h3 className="mt-5 font-display text-2xl text-foreground">{t(`why.${n}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`why.${n}.b`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  
  return (
    <section id="contact" className="section-dark relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="container-x relative grid gap-16 md:grid-cols-2">
        <motion.div {...fade}>
          <Kicker>{t("contact.kicker")}</Kicker>
          <h2 className="text-4xl text-white md:text-5xl">{t("contact.title")}</h2>

          <div className="mt-12 space-y-5 text-white/80">
            <div className="flex items-center gap-4">
              <MapPin className="text-[var(--gold)]" size={20} />
              <span>{t("Düsseldorf, Germany")}</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[var(--gold)]" size={20} />
              <a href="mailto:office@crestaygroup.com" className="hover:text-[var(--gold)]">
                office@crestay.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://crestaygroup.com" target="_blank" rel="noopener noreferrer">
                <Globe className="text-[var(--gold)]" size={20} />
              </a>
              <span>crestaygroup.com</span>
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              {t("contact.follow")}
            </div>
            <SocialLinks />
          </div>
        </motion.div>

        <motion.form
  {...fade}
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
>
  <input
    type="hidden"
    name="access_key"
    value="aa5e518f-14e6-4e81-826a-74392f601fee"
  />

  {(["name", "email", "company"] as const).map((f) => (
    <div key={f}>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
        {t(`contact.${f}`)}
      </label>
      <input
        name={f}
        required={f !== "company"}
        type={f === "email" ? "email" : "text"}
        maxLength={120}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--gold)]"
      />
    </div>
  ))}

  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
      {t("contact.message")}
    </label>
    <textarea
      name="message"
      required
      rows={4}
      maxLength={2000}
      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--gold)]"
    />
  </div>

  <button
    type="submit"
    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--onyx-deep)] transition-all hover:bg-[var(--gold-soft)]"
  >
    {t("contact.send")}
    <ArrowUpRight size={16} />
  </button>
</motion.form>
      </div>
    </section>
  );
}

export function Footer() {
 const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-[var(--onyx-deep)] py-16 text-white/70">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="" className="h-10 w-10 rounded-md" />
              <span className="font-display text-lg text-white">
                CRESTAY <span className="white-text">GROUP</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/50">{t("footer.tag")}</p>
            <div className="mt-6">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                {t("footer.follow")}
              </div>
              <SocialLinks />
            </div>
          </div>

       <div className="md:col-span-3">
  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
    {t("footer.quicklinks")}
  </div>

  <ul className="space-y-2 text-sm">
    <li>
      <a href="#about" className="hover:text-[var(--gold)]">
        {t("nav.about")}
      </a>
    </li>

    <li>
      <a href="#structure" className="hover:text-[var(--gold)]">
        {t("nav.structure")}
      </a>
    </li>

    <li>
      <a href="#ventures" className="hover:text-[var(--gold)]">
        {t("nav.ventures")}
      </a>
    </li>

    <li>
      <a href="#strategy" className="hover:text-[var(--gold)]">
        {t("nav.strategy")}
      </a>
    </li>

    <li>
      <a href="#contact" className="hover:text-[var(--gold)]">
        {t("nav.contact")}
      </a>
    </li>

    <li>
  <Link to="/privacy" className="hover:text-[var(--gold)]">
    {t("footer.privacy")}
  </Link>
</li>

<li>
  <Link to="/legal-notice" className="hover:text-[var(--gold)]">
    {t("footer.imprint")}
  </Link>
</li>
  </ul>
</div>

          <div className="md:col-span-4">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              {t("footer.contact")}
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[var(--gold)]" />
                <span>{t("Düsseldorf , Germany")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--gold)]" />
                <a href="mailto:office@crestay.com" className="hover:text-[var(--gold)]">
                  office@crestay.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://crestaygroup.com" target="_blank" rel="noopener noreferrer">
                  <Globe size={16} className="text-[var(--gold)]" />
                </a>
                <span>crestaygroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/50">
          © {(2026)} Crestay Group. All rights reserved. 
        </div>
      </div>

    </footer>
  );
}
