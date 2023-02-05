import {
  BanknotesIcon,
  UserPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Total Votes Casted",
    value: "850,007",
    footer: {
      color: "text-green-500",
      value: "55%",
      label: "of votes cated",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Total Registered Voters",
    value: "1,233,462",
    footer: {
      color: "text-red-500",
      value: "",
      label: "Bauchi North",
    },
  },
  {
    color: "green",
    icon: ChartBarIcon,
    title: "All Progressives Congress Votes",
    value: "750,987",
    footer: {
      color: "text-green-500",
      value: "88%",
      label: "of Casted Votes",
    },
  },
  {
    color: "pink",
    icon: ChartBarIcon,
    title: "Peoples Democratic Party",
    value: "103,430",
    footer: {
      color: "text-green-500",
      value: "12%",
      label: "of Casted Votes",
    },
  },
];

export default statisticsCardsData;
