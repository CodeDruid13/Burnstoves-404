export const CopyrightText = `© ${new Date().getFullYear()} Burn Stoves. All rights reserved`;

interface IFooterLinks {
  title: string;
  items: {
    title: string;
    href: string;
    tag?: string;
  }[];
}

export const Company: IFooterLinks = {
  title: "Company",
  items: [
    { title: "About us", href: "/" },
    { title: "Blog", href: "#" },
  ],
};

export const Products: IFooterLinks = {
  title: "Products",
  items: [
    {
      title: "Charcoal Appliances",
      href: "/",
    },
    {
      title: "Wood & Briquette Appliances",
      href: "/",
    },
    {
      title: "LPG Appliances",
      href: "/",
    },
    {
      title: "Carbon Credits",
      href: "/",
    },
  ],
};

export const Impact: IFooterLinks = {
  title: "Impact",
  items: [
    {
      title: "Our Impact",
      href: "/",
    },
    {
      title: "Awards & Recognition",
      href: "/",
    },
  ],
};

export const Support: IFooterLinks = {
  title: "Support",
  items: [
    {
      title: "Contact Us",
      href: "/",
    },
    {
      title: "Be a Distributor",
      href: "/",
    },
    {
      title: "Where to Buy",
      href: "/",
    },
    {
      title: "Warranty",
      href: "/",
    },
    {
      title: "Help & FAQ's",
      href: "/",
    },
  ],
};

export const Media: IFooterLinks = {
  title: "Media",
  items: [
    {
      title: "Newsletter",
      href: "/",
    },
    {
      title: "Research & Publications",
      href: "/",
    },
    {
      title: "Newsroom",
      href: "/",
    },
    {
      title: "Quality Policy",
      href: "/",
    },
  ],
};

export const More: IFooterLinks = {
  title: "More",
  items: [
    {
      title: "Carbon Credits",
      href: "/",
    },
    { title: "Register Warranty", href: "#" },
    { title: "Bettervest 2020", href: "#" },
  ],
};

export const Legal: IFooterLinks = {
  title: "Legal",
  items: [
    { title: "Cookies Policy", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Law Enforcement", href: "#" },
    { title: "Status", href: "#" },
  ],
};

export const Follow: IFooterLinks = {
  title: "Follow Us",
  items: [
    { title: "Twitter", href: "#" },
    { title: "Youtube", href: "#" },
    { title: "LinkedIn", href: "#" },
  ],
};

export const Social: IFooterLinks = {
  title: "Social Media Links",
  items: [
    { title: "Twitter", href: "#" },
    { title: "Youtube", href: "#" },
    { title: "LinkedIn", href: "#" },
  ],
};
