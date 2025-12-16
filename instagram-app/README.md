## Moment · Instagram-inspired social app

Moment is a polished, fully client-side Instagram experience built with Next.js 14, the App Router, and Tailwind CSS. It features a responsive feed, stories, reels, messaging, explore surfaces, and profile views—ready to deploy to Vercel.

### Tech stack

- Next.js 14 (App Router, TypeScript, `app/` directory)
- Tailwind CSS with custom utility layers for story gradients and line clamping
- React Icons for the UI iconography

### Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to browse the app. The experience adapts to mobile and desktop layouts automatically.

### Available routes

- `/` – Home feed with stories, posts, and trending reels
- `/explore` – Curated discovery grid with detail pages
- `/reels` & `/reels/[id]` – Short-form video gallery and reel detail mock
- `/messages` – Inbox overview with quick actions
- `/search`, `/notifications`, `/create` – Dedicated surfaces for common flows
- `/profile` & `/profile/[handle]` – Profile overview and dynamic creator placeholder
- `/privacy`, `/terms`, `/api` – Static policy and platform pages

### Production build

```bash
npm run build
npm run start
```

Moment is designed to deploy seamlessly with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-c5e46402
```
