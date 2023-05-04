import { Article, Section, SuggestedArticleType, Support } from "@/types";
import icon1 from "../assets/image/category/1.svg";
import icon2 from "../assets/image/category/2.svg";
import icon3 from "../assets/image/category/3.svg";
import icon4 from "../assets/image/category/4.svg";
import section1 from "../assets/image/section/1.svg";
import section2 from "../assets/image/section/2.svg";
import section3 from "../assets/image/section/3.svg";
import section4 from "../assets/image/section/4.svg";
export const SUPPORT_CATEGORY: Support[] = [
  {
    name: "Knowledge base",
    id: 1,
    description:
      "Knowledge Base, Let us walk you through our help sections and services step-by-step.",
    url: "/knowledge-base",
    layout: "list",
    icon: icon1,
  },
  {
    name: "Specific guides",
    id: 2,
    description:
      "Specific guides, Let us walk you through our help sections and services step-by-step.",
    url: "/specific-guides",
    layout: "list",
    icon: icon2,
  },
  {
    name: "How-to videos",
    id: 3,
    description:
      "How-to videos, Let us walk you through our help sections and services step-by-step.",
    url: "/how-to-videos",
    layout: "video",
    icon: icon3,
  },
  {
    name: "Quality updates",
    id: 4,
    description:
      "Quality updates, Let us walk you through our help sections and services step-by-step.",
    url: "/quality-updates",
    layout: "updates",
    icon: icon4,
  },
];

export const SUPPORT_SUBCATEGORY: Section[] = [
  {
    name: "Account",
    id: 1,
    description: "account",
    url: "account",
    category: 1,
    icon: section1,
  },
  {
    name: "Billing",
    id: 2,
    description: "billing",
    url: "billing",
    category: 1,
    icon: section3,
  },
  {
    name: "General support",
    id: 3,
    description: "getting-started",
    url: "general-support",
    category: 1,
    icon: section2,
  },
  {
    name: "Data & Security",
    id: 4,
    description: "data-security",
    url: "data-security",
    category: 1,
    icon: section4,
  },
  {
    name: "guide 1",
    id: 5,
    description: "troubleshooting",
    url: "guide-1",
    category: 2,
    icon: section1,
  },
  {
    name: "Troubleshooting",
    id: 6,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 2,
    icon: section2,
  },
  {
    name: "Troubleshooting",
    id: 7,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 2,
    icon: section3,
  },
  {
    name: "Troubleshooting",
    id: 8,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 2,
    icon: section4,
  },
  {
    name: "guides",
    id: 9,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 3,
    icon: section1,
  },
  {
    name: "guides",
    id: 10,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 3,
    icon: section2,
  },
  {
    name: "guides",
    id: 11,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 3,
    icon: section3,
  },
  {
    name: "guides",
    id: 12,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 3,
    icon: section4,
  },
  {
    name: "guides",
    id: 13,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 3,
    icon: section1,
  },
  {
    name: "About Checkin",
    id: 14,
    description: "about checkin",
    url: "about-checkin",
    category: 2,
    icon: section2,
  },
];

export const SUPPORT_ARTICLES: Article[] = [
  {
    id: 1,
    category: 1,
    section: 1,
    title: "How to create an account",
    description: "How to create an account",
    content:
      "piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde",
    url: "how-to-create-an-account",
  },
  {
    id: 2,
    category: 1,
    section: 1,
    title: "How to update an account",
    description: "How to create an account",
    content:
      "psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    url: "how-to-update-an-account",
  },
  {
    id: 3,
    category: 1,
    section: 1,
    title: "How to delete an account",
    description: "How to create an account",
    content:
      "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w",
    url: "how-to-delete-an-account",
  },
  {
    id: 4,
    category: 1,
    section: 1,
    title: "How to sell an account",
    description: "How to create an account",
    content:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages ",

    url: "how-to-sell-an-account",
  },
  {
    id: 5,
    category: 1,
    section: 1,
    title: "How to sell an account",
    description: "How to create an account",
    content: "How to create an account",

    url: "how-to-sell-an-account",
  },
  {
    id: 6,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "edefined chunks as necessary, making this the first true generator on th",
    url: "how-to-get-billing",
  },
  {
    id: 7,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "oing through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections ",
    url: "how-to-get-billing",
  },
  {
    id: 9,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "ce of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
    url: "how-to-get-billing",
  },
  {
    id: 8,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content: "1960s with the release of Letraset sheets containing Lorem Ipsum",
    url: "how-to-get-billing",
  },
  {
    id: 10,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of e Finibus Bonorum et Malorum ",
    url: "how-to-get-billing",
  },
  {
    id: 11,
    category: 1,
    section: 4,
    title: "how to secure your account",
    description:
      "here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lore",
    content: "How to create an account",
    url: "how-to-get-billing",
  },
  {
    id: 12,
    category: 2,
    section: 14,
    title: "How checkin works",
    description: "How checkin works",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "how-checkin-works",
  },
  {
    id: 13,
    category: 2,
    section: 14,
    title: "Patnership",
    description: "Patner with checkin",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "patnership",
  },
  {
    id: 14,
    category: 2,
    section: 14,
    title: "Our community policy",
    description: "How checkin works",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "checkin-community-policy",
  },
  {
    id: 15,
    category: 4,
    section: 14,
    title: "Our safety concerns",
    description: "Our safety concerns",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "our-safety-concerns",
  },
];

export const SUGGESTED_ARTICLES: SuggestedArticleType[] = [
  {
    id: 1,
    title: "About Checkin",
    articles: SUPPORT_ARTICLES.filter((article) => article.category === 2),
  },
  {
    id: 2,
    title: "Your account",
    articles: SUPPORT_ARTICLES.filter(
      (article) => article.category === 1
    ).slice(0, 5),
  },
  {
    id: 3,
    title: "Safety",
    articles: SUPPORT_ARTICLES.filter((article) => article.category === 4),
  },
  {
    id: 4,
    title: "Claims and damages",
    articles: SUPPORT_ARTICLES.filter((article) => article.category === 2),
  },
];
