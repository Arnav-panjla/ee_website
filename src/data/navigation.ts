export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "GALLERY", href: "/gallery" },
  { label: "PEOPLE", href: "/people" },
  {
    label: "ENGAGE",
    children: [
      { label: "Make a contribution", href: "/contribution" },
      { label: "Seek collaboration", href: "/collaboration" },
      { label: "Seek consultation", href: "/consultation" },
      { label: "Seek Training", href: "/training" },
      { label: "Famous Enterpeneurs", href: "/entrepreneurs" },
      { label: "Distinguished Alumni @EE", href: "/alumni" },
    ],
  },
  { label: "CONTACT", href: "/contact" },
  {
    label: "ADMISSION",
    children: [
      { label: "UG", href: "/ug" },
      { label: "PG", href: "/pg" },
    ],
  },
  { label: "RESEARCH", href: "/research" },
  {
    label: "ACADEMICS",
    children: [
      { label: "BTECH", href: "/btech" },
      { label: "MSR", href: "/msr" },
      { label: "MTECH", href: "/mtech" },
      { label: "PHD", href: "/phd" },
    ],
  },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Faculty", href: "/people" },
  { label: "Engage", href: "/engage" },
  { label: "Academics", href: "/btech" },
  { label: "Admissions", href: "/ug" },
  { label: "Contact", href: "/contact" },
] as const;
