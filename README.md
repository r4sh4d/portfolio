# rashad.dev

Personal portfolio of Rashad Murshudov — Next.js (App Router), React 19, Tailwind CSS v4.

## Editing content

All copy and portfolio data live in two files; components only render them.

| File               | Holds                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `config/index.ts`  | Name, role, location, email, links, and every section title/description                      |
| `data/index.ts`    | Projects (and their case-study sections), experience, education, skills, development process |

Adding a project to `data/index.ts` creates its case study at `/projects/<slug>` and adds it to the project index automatically. The first four projects are featured on the home page.

## Structure

- `app/` — routes: home, `/projects` (full index), `/projects/[slug]` (case studies)
- `components/sections/` — home page sections
- `components/project/` — project media, metadata and list used by home and case studies
- `components/motion/` — reveal, parallax, scroll-linked text, magnetic hover
- `app/globals.css` — design tokens, type scale, grid utilities and the reveal system

Motion uses `motion` (DOM renderer only, via `LazyMotion`) for scroll/pointer-linked values and [Lenis](https://github.com/darkroomengineering/lenis) for smooth wheel scrolling. Everything respects `prefers-reduced-motion`.

## Development

```bash
yarn install
yarn dev     # http://localhost:3000
yarn lint
yarn build
```

The contact form posts to `${NEXT_PUBLIC_API_URL}/api/messages` (see `services/contact.ts`).
