# StackOrcs

The official StackOrcs company website, built with Next.js 16, React 19, Motion, and Phosphor Icons.

## Included

- Responsive, motion-rich marketing experience
- Services, approach, company, and contact pages
- Privacy, terms, cookies, security, and accessibility pages
- SEO metadata, sitemap, robots, manifest, and branded icon
- Branded project inquiry emails through Resend
- Field Notes subscriptions, welcome email, and admin broadcast release desk
- Reduced-motion support and keyboard-accessible navigation

## Local development

    npm install
    npm run dev

Open http://localhost:3000.

## Production

    npm run build
    npm start

Set NEXT_PUBLIC_SITE_URL to the final production origin before deployment.

## Email and newsletter

Email delivery uses Resend with custom-domain sender configuration. Copy `.env.example` to `.env.local`, verify the sending domain in Resend, create a Field Notes segment, and configure the listed server-only values.

- Project inquiries send a branded notification to StackOrcs and a branded acknowledgement to the sender.
- Newsletter signups become contacts in the configured segment.
- `/admin` creates a reviewable draft broadcast by default and can send immediately when explicitly selected.
- Broadcast templates include Resend's per-recipient unsubscribe URL.

The free Resend plan is suitable for initial launch volume. Never expose `RESEND_API_KEY` or `ADMIN_PUBLISH_KEY` in client-side variables.

## Legal note

The included legal pages are a strong website baseline, not jurisdiction-specific legal advice. They should be reviewed with the company's registered details, governing law, hosting providers, and any future analytics or messaging integrations before launch.
