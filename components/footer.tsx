import { Config } from "@/config";
import { ArrowSwap } from "./ui/arrow-swap";
import { LocalTime } from "./ui/local-time";

const socials = [
  { label: "GitHub", href: Config.links.github },
  { label: "LinkedIn", href: Config.links.linkedIn },
];

export function Footer() {
  return (
    <footer className="frame border-t border-line pb-8 pt-10">
      <p className="max-w-md text-muted">{Config.footer.description}</p>

      <div className="grid-12 type-label mt-16 gap-y-6 text-muted">
        <p className="col-span-4 md:col-span-3">
          © {new Date().getFullYear()} {Config.name}
        </p>
        <p className="col-span-2 md:col-span-3">
          {Config.role}
          <br />
          {Config.location} · <LocalTime />
        </p>
        <ul className="col-span-2 flex flex-col gap-1 md:col-span-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-fg"
              >
                {social.label}
                <ArrowSwap />
              </a>
            </li>
          ))}
        </ul>
        <p className="col-span-4 md:col-span-3 md:text-right">
          <a
            href="#main"
            className="group inline-flex items-center gap-2 transition-colors hover:text-fg"
          >
            Back to top
            <span aria-hidden="true" className="inline-block -rotate-90">
              <ArrowSwap direction="right" />
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}
