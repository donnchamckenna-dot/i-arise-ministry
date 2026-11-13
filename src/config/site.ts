/**
 * Site-wide settings. Change things here, not in individual pages.
 */
export const site = {
  name: 'I Arise Ministry',
  founder: 'Dr Iva Beranek',
  // TODO-CONTENT: replace with the real domain once it is connected.
  url: 'https://i-arise-ministry.example',
  description:
    'A Catholic ministry of prayer, healing of memories and restoration, rooted in the contemplative tradition and the Christian heritage of Ireland.',
  locale: 'en-IE',
  // Keep false until the site is approved for launch. When false, every page
  // carries a noindex tag and robots.txt asks search engines to stay away.
  allowIndexing: false,
  // Shows the gold "to confirm" boxes. Set false before launch.
  showPlaceholders: true,
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Our Vision', href: '/vision/' },
  { label: 'Retreats & Events', href: '/retreats/' },
  { label: 'Healing & Spirituality', href: '/spirituality/' },
  { label: 'Books & Writings', href: '/books/' },
  { label: 'About Iva', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: 'Privacy', href: '/privacy/' },
];

/** Themes for the Healing & Spirituality area. Order here = order on the site. */
export const spiritualityThemes = [
  { slug: 'healing-of-memories', title: 'Healing of Memories', line: 'Bringing old hurts to God.' },
  { slug: 'st-john-of-the-cross', title: 'St John of the Cross', line: 'Finding God in the dark.' },
  { slug: 'st-john-henry-newman', title: 'St John Henry Newman', line: 'Faith, conscience and the inner life.' },
  { slug: 'carmelite-spirituality', title: 'Carmelite Spirituality', line: 'Prayer as friendship with God.' },
  { slug: 'prayer-and-contemplation', title: 'Prayer and Contemplation', line: 'Learning to be still.' },
  { slug: 'forgiveness-and-reconciliation', title: 'Forgiveness and Reconciliation', line: 'Making peace, slowly.' },
  { slug: 'restoration-and-hope', title: 'Spiritual Restoration and Hope', line: 'What God starts, he finishes.' },
] as const;
