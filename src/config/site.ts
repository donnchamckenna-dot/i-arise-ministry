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
  { slug: 'healing-of-memories', title: 'Healing of Memories', line: 'Bringing what still hurts into the light of God’s mercy.' },
  { slug: 'st-john-of-the-cross', title: 'St John of the Cross', line: 'The dark night, and the love that leads through it.' },
  { slug: 'st-john-henry-newman', title: 'St John Henry Newman', line: 'Conscience, faith and the hidden life of the soul.' },
  { slug: 'carmelite-spirituality', title: 'Carmelite Spirituality', line: 'A tradition of prayer, silence and friendship with God.' },
  { slug: 'prayer-and-contemplation', title: 'Prayer and Contemplation', line: 'Learning to be still and to listen.' },
  { slug: 'forgiveness-and-reconciliation', title: 'Forgiveness and Reconciliation', line: 'The slow, grace-filled work of making peace.' },
  { slug: 'restoration-and-hope', title: 'Spiritual Restoration and Hope', line: 'What God begins in us, he carries on.' },
] as const;
