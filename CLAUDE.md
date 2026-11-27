# I Arise Ministry website: notes for Claude

Claude reads this file automatically when working in this repository. It explains where the site lives, how it is built and the rules for changing it. Keep it up to date: when a change alters anything described here, update this file in the same commit.

The site belongs to Dr Iva Beranek (I Arise Ministry). It went live at https://iarise.ie on 21 November 2026. Donncha McKenna built it and handed it over on 27 November 2026.

## Where everything lives

| What | Where |
| --- | --- |
| Website | https://iarise.ie and https://www.iarise.ie |
| Domain registration | Hosting Ireland (Iva's account), renews 25 February 2027 |
| Code (the master copy) | GitHub repository `i-arise-ministry`, in Iva's GitHub account |
| Hosting | Cloudflare, Workers & Pages, project `i-arise-ministry`, in Iva's Cloudflare account |
| Domain settings (DNS) | Cloudflare, Domains, iarise.ie |
| Public contact email | iarise.ministry@gmail.com |
| Instagram | https://www.instagram.com/ivadublin/ |

Every push to the `main` branch on GitHub goes live by itself in about two minutes. If a build fails, Cloudflare keeps the last working version live, so check the live site after each change.

**DNS settings to keep:** no A record for `iarise.ie` and no CNAME for `www` (Cloudflare adds its own when the site is connected to the domain). Keep the MX record. The `mail` record stays "DNS only".

## How Claude should work on the site

1. Read `README.md` and `docs/strategy.md` in the repository.
2. Make changes on a new branch. Build with `npm run build` and check the pages in a browser, on desktop and phone sizes.
3. Merge to `main` and push. That publishes the site.
4. Only work on the site from one chat at a time.

Iva often sends changes as screenshots with notes, or as a Word document with new words in red. Red means "add this" (it is black on the site). Struck-through text means "remove this". Keep her wording exactly unless she asks otherwise.

## How the site is built

- Astro, TypeScript and Tailwind. Fully static. Config for Cloudflare is in `wrangler.jsonc`.
- Fonts: Alegreya (headings) and Alegreya Sans (text).
- Colours: Restoration Red #CB5B59, Warm Coral #E1806F, Contemplative Blue #2C4681, Ivory #F8F1E8, Parchment #EFE4D4, Sage #426668, Gold #D9AD65.
- Written in Iva's first person.

**Settings in `src/config/site.ts`:**
- `url: 'https://iarise.ie'`
- `allowIndexing: true` (search engines can find the site)
- `showPlaceholders: false` (set to `true` temporarily to show gold "to confirm" notes for open items)
- `contact`: email, Instagram, LinkedIn (LinkedIn still empty)
- The main menu (`mainNav`) and the Journey dropdown (`journeyNav`)

## What is on the site

- **Menu:** Home, Journey with me (Spiritual Direction, Retreats & Speaking, Courses), Books, Articles, Treasures, About. Vision is linked from the homepage and the footer. Contact sits at the bottom of every page; there is no contact page. Old `/writing/` links redirect to `/articles/` (`public/_redirects`).
- **Homepage (`src/pages/index.astro`):** a scrolling story "through the door". Iva's illustrated door (`src/assets/story/door-leaf.png`, boy removed) swings open as you scroll. Then nine chapters: I Through the door (snowflakes turn into roses), II The golden thread (3D shamrock), III The wounded heart (the crack fills with gold), IV The inner diamond, V The dark night, VI The battles, VII The key of forgotten dreams (3D key), VIII Companions on the way (St Philip Neri's flame and St Thérèse's heart, both taken from Iva's key artwork; St John of the Cross's glowing cross; St Patrick's shamrock), IX Arise. Then a welcome from Iva, the Journey with me cards and "Take your time". A link under the door skips to the welcome.
- **Scroll animation:** each chapter gets a CSS variable `--p` from 0 to 1 as you scroll. It works even when a visitor's computer has "reduce animations" on (Iva's desktop does). Only the big zoom through the door is switched off for those visitors (`data-door-zoom`). Use units in CSS stroke values (for example `calc(... * 1px)`), because some desktop browsers ignore unitless values.
- **3D emblems:** Iva's golden shamrock and key spin, turn towards the mouse and burst into gold on tap. Component `src/components/Emblem3D.astro`, images in `public/emblems/`. Used on every page.
- **Courses (`src/pages/journey/courses.astro`):** "Love the Lord Your God", a four-week course on prayer, in person or on Zoom, with both posters and "Express your interest".
- **Retreats & Speaking (`src/pages/journey/retreats-speaking.astro`):** two day retreats, "Where there is no love, put love" and "Healing past wounds: forgiveness and writing a new story with your life", with posters. The posters show past dates and prices, so the page text leaves those out. Also a list of talks given.
- **Books (`src/pages/books.astro`, one file per book in `src/content/books/`):** covers from Iva's print files, descriptions from the back covers, and Amazon links for the two children's books (Veronica's Bookstore and its sequel The Year of Celebrations).
- **Articles (`src/data/articles.ts`, page `src/pages/articles/[slug].astro`):** three published articles, each on a themed page (winter Narnia, Regency rose, or both): "My literary friendship with Jane Austen and C. S. Lewis", "When Oxford turns into Narnia", "Jane Austen: 250 years since the birth of the literary giant".
- **Treasures (`src/pages/treasures.astro`):** what Iva treasures, in her words. Not a blog.
- **Vision (`src/pages/vision.astro`):** the fuller story and the ARISE values.

## Still open

- LinkedIn link
- Dates for upcoming retreats and courses; how spiritual direction sessions work
- Which roles on the About page are still current
- Book reviews from the back covers (Ivana Han, Lauren Heithaus, Megan Madden and one more), if Iva wants them
- RTÉ "A Living Word" recordings
- A higher-resolution portrait
- What each part of the key stands for, for hover labels on the 3D key

**Wording choices still to confirm with Iva:** "where Heaven is a limit" on the Vision page (kept as written); "the living of the virtues" kept in the Jane Austen treasure; the Oxford talk says "given yearly at Boars Hill, Oxford", though 2024 was in London; the Jane Austen article was typed from photos of the printed pages.

## Content rules

- Never invent reviews, qualifications, events, dates or prices.
- Don't publish Iva's private phone number or address. iarise.ministry@gmail.com is the public email.
- Spiritual healing is never presented as a substitute for medical or psychological care.
- Narnia, Lucy, Aslan, C. S. Lewis and Tolkien can be named in text but never drawn: no lion, lamppost or wardrobe.
- No photos of real people other than Iva.
- Quote modern writers in paraphrase, except inside Iva's own published articles.
- Never put passwords or keys in the code.

## Talking to Iva

Iva is not a developer. Explain things in plain English, in short sentences, without technical words. Tell her what changed on the site, not how the code changed. Before anything that can't easily be undone (deleting pages, changing domain or DNS settings), ask her first.
