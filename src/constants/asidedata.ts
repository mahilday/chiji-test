import { ReactComponent as HomeFill } from "../assets/home-fill.svg";
import { ReactComponent as ReactBriefcase } from "../assets/briefcase-fill.svg";
import { ReactComponent as ReactPerson } from "../assets/person-fill.svg";
import { ReactComponent as ReactNpm } from "../assets/npm-fill.svg";
import logoreal from "../assets/logo.svg";
import Dashboard from '../pages/Dashboard';
import Gigs from '../pages/Gigs';

export const logo = logoreal;
export const menu = [
  {
    name: "Dashboard",
    Icon: HomeFill,
    link: "/dashboard",
    Tag: Dashboard
  },
  {
    name: "Gigs",
    Icon: ReactBriefcase,
    link: "/gigs",
    Tag: Gigs
  },
  {
    name: "Company",
    Icon: ReactNpm,
    link: "/company",
    Tag: Gigs
  },
  {
    name: "User",
    Icon: ReactPerson,
    link: "/user",
    Tag: Gigs
  },
];
