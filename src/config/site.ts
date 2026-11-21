/**
 * Site-wide settings. Change things here, not in individual pages.
 */
export const site = {
  name: 'I Arise Ministry',
  founder: 'Dr Iva Beranek',
  // TODO-CONTENT: replace with the real domain once it is connected.
  url: 'https://iarise.ie',
  description:
    'I Arise Ministry with Dr Iva Beranek: spiritual direction, retreats, talks and courses. Underneath all pain, joy is hidden.',
  locale: 'en-IE',
  // Keep false until the site is approved for launch. When false, every page
  // carries a noindex tag and robots.txt asks search engines to stay away.
  allowIndexing: true,
  // Shows the gold "to confirm" boxes. Set false before launch.
  showPlaceholders: false,
} as const;

/** Contact details shown at the bottom of every page. Leave a link empty to hide it. */
export const contact = {
  email: 'iarise.ministry@gmail.com',
  instagram: 'https://www.instagram.com/ivadublin/',
  linkedin: '', // TODO-CONTENT: full LinkedIn profile URL
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const journeyNav: NavItem[] = [
  { label: 'Spiritual Direction', href: '/journey/spiritual-direction/' },
  { label: 'Retreats & Speaking', href: '/journey/retreats-speaking/' },
  { label: 'Courses', href: '/journey/courses/' },
];

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Journey with me', href: '/journey/', children: journeyNav },
  { label: 'Books', href: '/books/' },
  { label: 'Articles', href: '/articles/' },
  { label: 'Treasures', href: '/treasures/' },
  { label: 'About', href: '/about/' },
];

/** The three ways to journey with Iva, used on Home and the Journey page. */
export const journeyWays = [
  {
    title: 'Spiritual Direction',
    href: '/journey/spiritual-direction/',
    line: 'One to one, at your own pace, listening together for where God is at work in your life.',
  },
  {
    title: 'Retreats & Speaking',
    href: '/journey/retreats-speaking/',
    line: 'Quiet days, retreats and talks for parishes, groups and conferences.',
  },
  {
    title: 'Courses',
    href: '/journey/courses/',
    line: 'Deeper learning on prayer, healing and the spiritual life.',
  },
];
