# Video Transcript Hub

(source information: https://github.com/uopsdod/claude-2-ai-video-speedreader/tree/m0-landing-page/.claude/skills)

# Product / AI Video Reader 

## Required Accounts 

- lovable: https://lovable.dev/

- github: https://github.com/ 

- vercel: https://vercel.com/

- supabase: https://supabase.com/

## Build 1st version on Lovable 

- go to https://lovable.dev/

- attach lovable-best-practice skill 

 - https://github.com/uopsdod/claude-2-ai-video-speedreader/blob/m0-landing-page/.claude/skills/lovable-best-practice/SKILL.md

- attach supabase-best-practice skill 

 - https://github.com/uopsdod/claude-2-ai-video-speedreader/blob/m0-landing-page/.claude/skills/supabase-best-practice/SKILL.md

Prompt """ 

(source: https://github.com/uopsdod/claude-2-ai-video-speedreader/blob/m0-landing-page/.claude/skills/m0-landing-page/SKILL.md)

Build a SaaS landing page + authenticated app shell for Video Speed Reader, a product that turns any video into an accurate transcript in three minutes, targeted at content creators, educators, and engineers who record long-form video and need a fast, clean transcript to repurpose into blog posts, course notes, or searchable archives.

The site must include:

1. A public landing page (`/`) with:

   - Hero section: product name "Video Speed Reader" prominently displayed, value prop "上傳影片，三分鐘內拿到逐字稿。" (English subtitle: "Upload your video, get a clean transcript in three minutes."), and a primary CTA button labeled "Sign in / 登入" in the top-right header

   - Features section with exactly 3 feature cards:

     * Card 1: "高準確度逐字稿 (High-accuracy transcripts)" — powered by OpenAI Whisper, supports Chinese and English

     * Card 2: "三分鐘交付 (Three-minute turnaround)" — processed in the background, you get an email when it's ready

     * Card 3: "可商用授權 (Commercial-use ready)" — you own the output, use it however you like

   - Footer with copyright "© 2026 Video Speed Reader"

2. Authentication using Lovable's built-in Supabase-style auth (use whatever auth backend Lovable provides by default — Lovable Cloud is fine for this v1; we'll swap to a user-owned Supabase project in a later step):

   - Sign Up page with email + password

   - Sign In page with email + password

   - Sign Out functionality

   - Email confirmation can be disabled for simplicity in this v1

3. An authenticated app shell at `/app` that the user lands on after signing in:

   - Greets the signed-in user by email: "Hi {user.email}"

   - A placeholder message: "Your dashboard is coming soon. Upload functionality will be added in the next milestone."

   - A Sign Out button in the header

Design requirements:

- Modern, professional dark theme (purple/violet accent on a near-black background)

- Use Inter or a similar sans-serif font

- Mobile responsive

- Tasteful subtle animations (fade-in on scroll is fine; don't overdo it)

Out of scope for this v1: video upload widget, transcript display, payment, custom database tables (do NOT create a `profiles` or `videos` table — only use Supabase's default `auth.users`). Those come in later milestones. Stick to landing page + auth + placeholder dashboard.

"""

## Check the 1st version on Lovable 

- get the lovable deployed site url (ex. XXX)

- check landing page style 

- check sign up / sign in features 

## Migrate Code from Lovable to GitHub 

- click the Github button on Lovable > add account > connect 

- once connected, go to www.github.com > go to you account and check the project exists (ex. XXX)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f4e62c27-f435-410a-af96-85fa59cf3075).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
