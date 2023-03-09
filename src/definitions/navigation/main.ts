const Products = {
  title: "Products",
  href: "",
  // showcase: Products_Header,
  subitems: [
    {
      title: "Charcoal Appliances",
      subtitle: "East Africa's best-selling charcoal cookstove.",
      icon: "/images/Charcoal.png",
      href: "",
    },
    {
      title: "Wood & Briquette Appliances",
      subtitle: "World’s most fuel-efficient rocket stove for household use.",
      icon: "/images/Wood.png",
      href: "",
    },
    {
      title: "LPG Appliances",
      subtitle: "World-Class Energy Efficient Appliances.",
      icon: "/images/LPG.png",
      href: "",
    },
    // {
    //   title: "Electric Appliances",
    //   subtitle: "World-Class Electric Appliances.",
    //   icon: Electric,
    //   href: "/products/electric-pressure-cooker",
    // },
    // {
    //   title: "Carbon Credits",
    //   subtitle: "Offset your carbon credits.",
    //   icon: Carbon,
    //   href: "carbon-credits",
    // },
  ],
};

const Impact = {
  title: "Impact",
  href: "",
  // showcase: Impact_Header,
  subitems: [
    {
      title: "Our Impact",
      subtitle: "Our stoves have impacted 15M+ lives.",
      icon: "/images/Impact.png",
      href: "",
    },
    {
      title: "Awards & Recognition",
      subtitle: "Our global recognition for edge innovation.",
      icon: "/images/Awards.png",
      href: "",
    },
  ],
};

const Support = {
  title: "Support",
  href: "",
  // showcase: Support_Header,
  subitems: [
    {
      title: "Contact Us",
      subtitle: "Get answers to your queries.",
      icon: "/images/Contact.png",
      href: "",
    },
    {
      title: "Be a Distributor",
      subtitle: "Join our network.",
      icon: "/images/Distribute.png",
      href: "",
    },
    {
      title: "Where to Buy",
      subtitle: "Get our products.",
      icon: "/images/Buy.png",
      href: "",
    },
    {
      title: "Warranty",
      subtitle: "Access our warranty services.",
      icon: "/images/Warranty.png",
      href: "",
    },
    {
      title: "Help & FAQ's",
      subtitle: "Get help with our products.",
      icon: "/images/FAQ.png",
      href: "",
    },
  ],
};

const Media = {
  title: "Media",
  href: "",
  subitems: [
    {
      title: "Newsletter",
      subtitle: "Our awesome newsletters at a glance.",
      icon: "/images/Newsletter.png",
      href: "",
    },
    {
      title: "Research & Publications",
      subtitle: "Our research, publications and surveys.",
      icon: "/images/Research.png",
      href: "",
    },
    {
      title: "Newsroom",
      subtitle: "Latest Burn news articles and media.",
      icon: "/images/News.png",
      href: "",
    },
    {
      title: "Testimonials",
      subtitle: "Our impact from real users.",
      icon: "/images/Testimonials.png",
      href: "",
    },
    {
      title: "Quality Policy",
      icon: "/images/Quality.png",
      subtitle: "Our commitment to exceed expectations.",
      href: "",
    },
  ],
};

const CarbonCredits = {
  title: "Carbon Credits",
  href: "",
  subitems: [
    {
      title: "Corporate",
      icon: "/images/Corporate.png",
      subtitle: "Save forests. Improve lives. Make a difference for corporates",
      href: "",
    },
    {
      title: "Individual",
      icon: "/images/Individual.png",
      subtitle:
        "Save forests. Improve lives. Make a difference for individuals",
      href: "",
    },
  ],
};

const Careers = {
  title: "Careers",
  href: "",
  subitems: [
    {
      title: "Jobs",
      icon: "/images/Jobs.png",
      subtitle: "Help impact positively on life on earth.",
      href: "",
    },
    {
      title: "Life at BURN",
      icon: "/images/Life.png",
      subtitle: "Be part of a world-class team changing lives.",
      href: "",
    },
    {
      title: "Life in Kenya",
      icon: "/images/Kenya.png",
      subtitle: "Powering prosperity begins with empowering our people.",
      href: "",
    },
  ],
};

const AboutUs = {
  title: "About Us",
  href: "",
};

export const main = [
  AboutUs,
  Products,
  Impact,
  Support,
  Media,
  Careers,
  CarbonCredits,
];
export const mobile = [
  Products,
  Impact,
  Support,
  Media,
  CarbonCredits,
  Careers,
  AboutUs,
];

export const more = [Media, CarbonCredits, Careers, AboutUs];

// Add Tag to any navigation item
export const ItemsTag: {
  title: string;
  badge?: string;
  colorScheme?: string;
}[] = [
  {
    title: "More Products",
    badge: "Soon",
    colorScheme: "green",
  },
  {
    title: "Account Forms",
    badge: "Modal",
    colorScheme: "pink",
  },
  // {
  //   title: "Account Overview",
  //   badge: "Hot",
  //   colorScheme: "pink",
  // },
];
