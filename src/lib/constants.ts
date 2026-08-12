export const SITE_CONFIG = {
  name: "IEDC CEKNPY",
  fullName: "Innovation & Entrepreneurship Development Centre",
  college: "College of Engineering Karunagappally",
  collegeShort: "CEKNPY",
  tagline: "Architecting Ideas. Engineering Founders.",
  description:
    "The official Innovation and Entrepreneurship Development Centre chapter of College of Engineering Karunagappally (CEKNPY). Fostering student startups, technical innovations, hackathons, and creative leadership.",
  url: "https://iedc.ceknpy.ac.in",
  email: "iedc@ceknpy.ac.in",
  location: "College of Engineering Karunagappally, Kollam, Kerala - 690523",
  socials: {
    linkedin: "https://linkedin.com/company/iedc-ceknpy",
    instagram: "https://instagram.com/iedc_ceknpy",
    twitter: "https://twitter.com/iedc_ceknpy",
    github: "https://github.com/iedc-ceknpy",
    youtube: "https://youtube.com/@iedcceknpy",
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team/current" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
