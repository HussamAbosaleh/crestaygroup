type IconProps = { size?: number };

const Facebook = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);
const Instagram = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Github = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.75.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.66.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);
const TikTok = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
  </svg>
);

export const socials = [
  { name: "Facebook", url: "https://facebook.com/crestaygroup", Icon: Facebook },
  { name: "Instagram", url: "https://instagram.com/crestaygroup", Icon: Instagram },
  { name: "TikTok", url: "https://tiktok.com/@crestay.group", Icon: TikTok },
  { name: "LinkedIn", url: "https://linkedin.com/in/crestay-group", Icon: Linkedin },
  { name: "GitHub", url: "https://github.com/crestaygroup", Icon: Github },
];

export function SocialLinks({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const base =
    variant === "dark"
      ? "border-white/10 bg-white/[0.03] text-white/70 hover:border-[var(--gold)] hover:text-[var(--gold)]"
      : "border-border bg-card text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]";
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 ${base}`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
