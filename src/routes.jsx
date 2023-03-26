import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  PoliticalParties,
  Elections,
  PollingUnits,
  Votings,
  Agents,
  Settings,
  Reports,
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Elections",
      //   path: "/elections",
      //   element: <Elections />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Political Parties",
      //   path: "/political-parties",
      //   element: <PoliticalParties />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Polling Units",
      //   path: "/polling-units",
      //   element: <PollingUnits />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Voting",
        path: "/votings",
        element: <Votings />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "Agents",
      //   path: "/agents",
      //   element: <Agents />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Settings",
      //   path: "/settings",
      //   element: <Settings />,
      // },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "Reports",
      //   path: "/reports",
      //   element: <Reports />,
      // },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      // {
      //   icon: <UserPlusIcon {...icon} />,
      //   name: "sign up",
      //   path: "/sign-up",
      //   element: <SignUp />,
      // },
      // {
      //   icon: <UserPlusIcon {...icon} />,
      //   name: "Reset Password",
      //   path: "/reset-password",
      //   element: <SignUp />,
      // },
    ],
  },
];

export default routes;
