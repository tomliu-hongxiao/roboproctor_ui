import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
} from "react-feather";

const pagesSection = [
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Dashboard",
    // children: [
    // {
    //   href: "/dashboard/default",
    //   title: "Default",
    // },
    //   {
    //     href: "/dashboard/analytics",
    //     title: "Analytics",
    //   },
    //   {
    //     href: "/dashboard/saas",
    //     title: "SaaS",
    //   },
    // ],
  },
  // {
  //   href: "/pages",
  //   icon: Layout,
  //   title: "Pages",
  //   children: [
  //     {
  //       href: "/pages/profile",
  //       title: "Profile",
  //     },
  //     {
  //       href: "/pages/settings",
  //       title: "Settings",
  //     },
  //     {
  //       href: "/pages/pricing",
  //       title: "Pricing",
  //     },
  //     {
  //       href: "/pages/chat",
  //       title: "Chat",
  //     },
  //     {
  //       href: "/pages/blank",
  //       title: "Blank Page",
  //     },
  //   ],
  // },
  // {
  //   href: "/projects",
  //   icon: Briefcase,
  //   title: "Projects",
  //   badge: "8",
  // },
  // {
  //   href: "/orders",
  //   icon: ShoppingCart,
  //   title: "Orders",
  // },
  // {
  //   href: "/invoices",
  //   icon: CreditCard,
  //   title: "Invoices",
  //   children: [
  //     {
  //       href: "/invoices",
  //       title: "List",
  //     },
  //     {
  //       href: "/invoices/detail",
  //       title: "Detail",
  //     },
  //   ],
  // },
  // {
  //   href: "/tasks",
  //   icon: CheckSquare,
  //   title: "Tasks",
  //   badge: "17",
  // },
  // {
  //   href: "/calendar",
  //   icon: Calendar,
  //   title: "Calendar",
  // },
  // {
  //   href: "/auth",
  //   icon: Users,
  //   title: "Auth",
  //   children: [
  //     {
  //       href: "/auth/sign-in",
  //       title: "Sign In",
  //     },
  //     {
  //       href: "/auth/sign-up",
  //       title: "Sign Up",
  //     },
  //     {
  //       href: "/auth/reset-password",
  //       title: "Reset Password",
  //     },
  //     {
  //       href: "/auth/404",
  //       title: "404 Page",
  //     },
  //     {
  //       href: "/auth/500",
  //       title: "500 Page",
  //     },
  //   ],
  // },
];

const elementsSection = [
  {
    href: "/components",
    icon: Grid,
    title: "Physics",
    children: [
      {
        href: "/components/alerts",
        title: "Intro to Physics",
      },
    ],
  },
  {
    href: "/charts",
    icon: PieChart,
    title: "Statiscs",
  },
  {
    href: "/Math",
    icon: CheckSquare,
    title: "Math",
    children: [
      {
        href: "/forms/pickers",
        title: "Intro to Math",
      },
    ],
  },
  //   {
  //     href: "/tables",
  //     icon: List,
  //     title: "Tables",
  //     children: [
  //       {
  //         href: "/tables/simple-table",
  //         title: "Simple Table",
  //       },
  //       {
  //         href: "/tables/advanced-table",
  //         title: "Advanced Table",
  //       },
  //       {
  //         href: "/tables/data-grid",
  //         title: "Data Grid",
  //       },
  //     ],
  //   },
  // {
  //   href: "/icons",
  //   icon: Heart,
  //   title: "Icons",
  //   children: [
  //     {
  //       href: "/icons/material-icons",
  //       title: "Material Icons",
  //     },
  //     {
  //       href: "/icons/feather-icons",
  //       title: "Feather Icons",
  //     },
  //   ],
  // },
  // {
  //   href: "/maps",
  //   icon: Map,
  //   title: "Maps",
  //   children: [
  //     {
  //       href: "/maps/google-maps",
  //       title: "Google Maps",
  //     },
  //     {
  //       href: "/maps/vector-maps",
  //       title: "Vector Maps",
  //     },
  //   ],
  // },
];

const docsSection = [
  // {
  //   href: "/documentation/welcome",
  //   icon: BookOpen,
  //   title: "Documentation",
  // },
  // {
  //   href: "/changelog",
  //   icon: List,
  //   title: "Changelog",
  //   badge: "v3.2.1",
  // },
];

const navItems = [
  // {
  //   title: "Pages",
  //   pages: pagesSection,
  // },
  {
    title: "Assignments",
    pages: elementsSection,
  },
  // {
  //   title: "Material App",
  //   pages: docsSection,
  // },
];

export default navItems;
