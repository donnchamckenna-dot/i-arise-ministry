# I Arise Ministry: Phase 1 strategy brief

Draft, 13 November 2026. For review by Donncha and Iva.

Sources: master project prompt; Iva's CV (2021); Iva's cover letter (undated, around 2021); ministry logo image; *Veronica's Bookstore* promotional images (December 2021).

Labels used below:
- **Confirmed**: stated in the supplied documents.
- **To verify**: in the documents but possibly out of date, or needs Iva's approval.
- **Recommendation**: my proposal. Not a fact.

---

## 1. Iva and the ministry

### Confirmed (from the 2021 CV and cover letter)

- PhD in Christian Spirituality, Milltown Institute, Dublin (2007 to 2013). Thesis: *Memory, Hope and Transformation in Restoration Ministries: A Dialogue between a Classical and a Contemporary Christian Spiritual Tradition through a Case Study in Northern Ireland*.
- MA in Classical Christian Spirituality, Milltown Institute (2005 to 2007). Dissertation: *Belfast, a City with a Wounded Heart: Hope of Redemption*, published by LAP, Saarbrücken, 2010.
- Diploma in Spiritual Direction, Manresa Jesuit Retreat House, accredited by NUI Maynooth (2016 to 2018).
- BA in Philosophy and Religious Culture, Jesuit Philosophical Faculty, Zagreb.
- Came to Dublin from Croatia in 2005. Ecumenical involvement from the start of her faith journey.
- Contributor to *A Living Word*, RTÉ Radio 1 (2014 to 2020). Short story on *Sunday Miscellany*, RTÉ Radio 1 (2015).
- Poems in *Learning to Love* (Proost, 2014) and *Reaching for Mercy* (Proost, 2018), ed. Chris Goan.
- Over 15 articles, including in *Teresianum*, *Spirituality* and *L'Osservatore Romano*.
- Talks include "Restoring our Inner Goodness: Healing of Memories" (Carmelites, Oxford, 2021), "Love your enemies" (Avila Carmelite Centre, 2019) and "St Patrick, a Mirror of God's Love" (2014). Also talks at universities across Ireland, and in Washington and Rome.
- *Veronica's Bookstore*: children's book, on Amazon Kindle in December 2021, with a book signing at St Teresa's, Clarendon Street.

### To verify with Iva

- **Current roles.** In 2021 she was Ministry Facilitator with The Church's Ministry of Healing, Ireland (since 2013) and a freelance spiritual director (since 2018). Is either still current? Should the Church's Ministry of Healing be named at all?
- **Prayer ministry.** Is she still on the Living Water prayer ministry team?
- ***The Year of Celebrations*.** No source material yet: cover, description, age range, publisher, year.
- ***Veronica's Bookstore*.** Is it the 8 to 12 book mentioned in the CV? Publisher? Is it still for sale, and where?
- **Portrait.** Is she happy with the 2021 photo? A higher-resolution portrait is needed.
- **The name "I Arise".** Is there a particular Scripture verse or story behind it? Do not assume one.
- **Website email.** Which address should enquiries go to? Her personal mobile and email from the CV will not be published.

### What is distinctive (Recommendation)

Many ministries offer retreats. Few are led by someone with doctoral research specifically on the **healing of memories** in a society marked by conflict. That is Iva's distinctive authority. She brings together:

- a scholar's depth, especially in St John of the Cross and the Carmelite tradition
- a spiritual director's gentleness
- an ecumenical reconciler's experience, Catholic and at home with other Christians
- a storyteller's imagination, in poems, radio reflections and children's books

The site should let all four show. It should lead with warmth, with credentials close behind as reassurance.

---

## 2. Brand and design direction

### Confirmed assets

- **Shamrock logo:** gold watercolour shamrock on a warm red watercolour ground, with an "I ARISE MINISTRY" wordmark.
- **Brand colours:** Restoration Red `#CB5B59`, Warm Coral `#E1806F`, Contemplative Blue `#2C4681`.
- **Golden key:** used in the book artwork. The front of *Veronica's Bookstore* appears to have small ornamental keys beside Iva's name.

### Recommendations, as built in the first draft

- **Story of the page: night to dawn.** The homepage opens in midnight and blue, with a warm coral and gold glow rising at the foot of the hero. Then it moves into ivory and parchment, which feels like opening a book.
- **The red watercolour is used once, at full strength.** It appears as a single band carrying the line "Renewal begins in the human heart. It does not have to end there." Used sparingly, it keeps its force.
- **Shamrock.**
  - The original artwork is used as a circular badge in the header, the favicon and the hero.
  - It was cropped from the 1080px square image.
  - We need the original file, ideally a transparent PNG or SVG, for crisp use at large sizes.
- **Key.**
  - A fine, line-drawn key marks section openings, the footer and the 404 page ("This door seems to be locked").
  - It is never used as an icon grid.
- **Type.**
  - Headings: Alegreya. It is a calligraphic book face designed for literature, with a hand-drawn warmth that suits a storyteller and fits the illustrated books.
  - Body text: Alegreya Sans, its companion. It is very legible on phones.
  - Small labels above headings are set in italic serif rather than spaced-out capitals.
  - Both fonts are open-source and self-hosted, so there are no Google Fonts requests and nothing to declare under GDPR.
  - Changed from Cormorant Garamond and Source Sans 3 after feedback that the first draft felt generic.
- **Supporting colours:**
  - Ivory `#F8F1E8`: page background
  - Parchment `#EFE4D4`: alternate sections
  - Sage teal `#426668`: spirituality pathways section
  - Midnight `#202B44`: hero, mailing list, footer
  - Gold `#D9AD65`: small accents on dark backgrounds
- **Accessibility adjustments:**
  - Brand red is 3.6:1 on ivory. That passes for large headings, not for body text or buttons.
  - Buttons and links therefore use a deeper red, `#A8403F` (5.4:1).
  - Coral is decorative only.
- **Photography (still to source):** natural light, Irish landscape at dawn, candlelight, hands, open books, stone and water. Avoid stock "praying silhouette" images.

---

## 3. Sitemap and homepage structure

### Sitemap

- `/` Home
- `/vision/` Our Vision
- `/retreats/` Retreats & Events. Individual event pages come later.
- `/spirituality/` Healing & Spirituality. Each theme becomes an article.
  - Healing of Memories
  - St John of the Cross
  - St John Henry Newman
  - Carmelite Spirituality
  - Prayer and Contemplation
  - Forgiveness and Reconciliation
  - Spiritual Restoration and Hope
- `/books/` Books & Writings
- `/about/` About Iva
- `/contact/` Contact
- `/privacy/` Privacy
- 404 page

### Homepage, as built

| Section | Content |
|---|---|
| Hero | Shamrock, "Healing the heart. Renewing the nation.", calls to action: Explore Retreats, Discover Our Vision |
| Invitation | Memories that still ache; who the ministry draws on; a welcome to every tradition |
| The journey | Remembering, Healing, Arising (I, II, III) |
| Heart to nation | Red watercolour band; communities carry memories too; link to Iva's Northern Ireland research and St Patrick |
| Founder | Portrait and short personal biography |
| Retreats | Live from content files, with an empty state (currently showing) |
| Pathways | The seven spirituality themes |
| Books | *Veronica's Bookstore*, *The Year of Celebrations*, *Belfast, a City with a Wounded Heart* |
| Mailing list | Placeholder until a provider is chosen |
| Closing | "Come and rest a while." |

The headline is the working theme from the brief. It is not yet an approved slogan.

---

## 4. Technical architecture

### As built

- **Framework:** Astro 7 with static output, TypeScript in strict mode, Tailwind CSS 4. No React.
- **Content collections:**
  - `retreats`: date, format, location, leader, audience, status, cost, registration link
  - `books`: kind, year, publisher, cover, buy link, and a verified flag
- **Single source of truth:**
  - `src/config/site.ts`: site settings, navigation and themes
  - `src/styles/global.css`: brand tokens
- **Images:** optimised to WebP at build time with responsive sizes.
- **Hosting:** Cloudflare Workers with static assets. GitHub `main` publishes production, and other branches publish preview versions.
- **Search engines:**
  - Canonical URLs, a sitemap and Open Graph tags are in place.
  - Indexing is switched off until launch.
- **Privacy:** no cookies, analytics or third-party requests at present.

### Recommendations, still to add

- **Contact form:** a small Worker endpoint, protected by Cloudflare Turnstile, sending through an email service. It needs one API key, stored as a Cloudflare secret and never in Git.
- **Mailing list:** an EU-friendly provider such as MailerLite or Buttondown, embedded with clear consent wording.
- **Structured data:** JSON-LD for the Organisation, Person, Books and Events, added once the details are verified.
- **Repository visibility:** make the GitHub repository private, as the brief requires. It is currently public.

---

## 5. Phased plan

| Phase | Status | Output |
|---|---|---|
| 1. Discovery and strategy | Done (this brief) | Facts and gaps identified |
| 2. Design system | Done in code, for review | Tokens, type, components, logo treatment |
| 3. Architecture and content | Next | Vision and About pages written; Iva reviews tone and facts |
| 4. Homepage | First draft live on a preview link | Refine after feedback |
| 5. Full build | | Spirituality articles, books, retreat pages, contact form, mailing list |
| 6. Quality checks | | Accessibility, mobile, Lighthouse, links, forms |
| 7. Launch | Needs the domain and Iva's approval | Custom domain, indexing on, placeholders off |
| 8. Handover | | Editing guide (README to start) |

## What I need from you

1. Original logo files, ideally a transparent PNG or SVG, plus any other brand artwork, including the golden key.
2. Cover and details for *The Year of Celebrations*.
3. A recent, high-resolution portrait of Iva, approved by her.
4. Answers to the "To verify" list above.
5. The domain, and the email address the website should use.
