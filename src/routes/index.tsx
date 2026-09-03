import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — Transcripts in Three Minutes" },
      {
        name: "description",
        content:
          "Upload your video and get an accurate Chinese or English transcript in three minutes. Built for creators, educators, and engineers.",
      },
      { property: "og:title", content: "Video Speed Reader — Transcripts in Three Minutes" },
      {
        property: "og:description",
        content: "上傳影片，三分鐘內拿到逐字稿。Accurate transcripts for creators, educators, and engineers.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    title: "高準確度逐字稿",
    en: "High-accuracy transcripts",
    body: "Powered by OpenAI Whisper, with solid support for both Chinese and English audio.",
  },
  {
    title: "三分鐘交付",
    en: "Three-minute turnaround",
    body: "Everything is processed in the background — you get an email the moment it's ready.",
  },
  {
    title: "可商用授權",
    en: "Commercial-use ready",
    body: "You own the output. Repurpose it into blog posts, course notes, or searchable archives.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Video Speed Reader
          </span>
          <Link
            to="/auth"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Sign in / 登入
          </Link>
        </div>
      </header>

      <main>
        <section className="hero-glow relative overflow-hidden">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                Whisper-powered · 中英雙語
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-gradient mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Video Speed Reader
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-xl font-medium sm:text-2xl">上傳影片，三分鐘內拿到逐字稿。</p>
              <p className="mt-2 text-base text-muted-foreground">
                Upload your video, get a clean transcript in three minutes.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex justify-center">
                <Link
                  to="/auth"
                  className="shadow-glow rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Sign in / 登入
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-28">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.en} delay={i * 120}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-semibold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight">{f.title}</h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">({f.en})</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted-foreground">
          © 2026 Video Speed Reader
        </div>
      </footer>
    </div>
  );
}
