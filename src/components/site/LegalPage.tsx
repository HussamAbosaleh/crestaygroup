import { ArrowLeft } from "lucide-react";
import { Footer } from "./Sections";
import { useI18n } from "../../lib/i18n";
import { Nav } from "./Nav";

export function LegalPage({
  type,
}: {
  type: "privacy" | "imprint";
}) {
  const { t } = useI18n();

  const sections = Array.from({ length: 8 }, (_, i) => ({
    t: t(`${type}.s${i + 1}.t`),
    b: t(`${type}.s${i + 1}.b`),
  }));

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      <section className="section-dark relative overflow-hidden pt-36 pb-20 md:pt-44">
        <div className="absolute inset-0 grid-bg" />

        <div className="container-x relative">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[var(--gold)]"
          >
            <ArrowLeft size={16} />
            {t("legal.back")}
          </a>

          <h1 className="mt-6 font-display text-4xl text-white md:text-6xl">
            {t(`${type}.title`)}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
            {t(`${type}.intro`)}
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <article className="mx-auto max-w-3xl space-y-10">
            {sections.map((s) => (
              <div
                key={s.t}
                className="border-l-2 border-[var(--gold)]/40 pl-6"
              >
                <h2 className="font-display text-2xl text-foreground md:text-3xl">
                  {s.t}
                </h2>

                <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                  {s.b}
                </p>
              </div>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}