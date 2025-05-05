// import User from '../Views/User';

import Finder from "../Views/Finder";
import User from "../Views/User";
import Setting from "../Views/Setting";
import Device from "../Views/Device";

import Temporary from '../Views/License/Temporary';
import Blacklist from '../Views/License/Blacklist';
import Restricted from '../Views/License/Restricted';

import Flexible from "../Views/Log/Flexible";
import Overstay from "../Views/Log/Overstay";
import Override from "../Views/Log/Override";
import SpecialUse from "../Views/Log/SpecialUse";
import LogTemporary from "../Views/Log/Temporary";
import Tracking from "../Views/Log/Tracking";
import Usage from "../Views/Log/Usage";
import Violation from "../Views/Log/Violation";



import {
  ManageAccount,
  IdCard,
  DataTable,
  TravelExplore,
  Settings,
  Detector
} from "../images/icons";


const routes = [
  {
    path: "/user",
    name: "_user",
    component: User,
    icon: ManageAccount,
    sider: true,
    exact: true
  },
  {
    path: "/finder",
    name: "_finder",
    component: Finder,
    icon: TravelExplore,
    sider: true,
  },
  {
    path: "/device",
    name: "_device",
    component: Device,
    icon: Detector,
    sider: true
  },
  {
    path: "/license",
    name: "_license",
    sider: true,
    icon: IdCard,
    children: [
      {
        path: "/temporary",
        name: "_temporary",
      },
      {
        path: "/blacklist",
        name: "_blacklist",
      },
      {
        path: "/restricted",
        name: "_restricted",
      },
    ]
  },
  {
    path: "/temporary",
    name: "_temporary",
    component: Temporary,
  },
  {
    path: "/blacklist",
    name: "_blacklist",
    component: Blacklist,
  },
  {
    path: "/restricted",
    name: "_restricted",
    component: Restricted,
  },
  {
    path: "/report",
    name: "_report",
    sider: true,
    icon: DataTable,
    children: [
      {
        path: "/flexible",
        name: "_flexible",
      },
      {
        path: "/overstay",
        name: "_overstay",
      },
      {
        path: "/override",
        name: "_override",
      },
      {
        path: "/specialuse",
        name: "_specialuse",
      },
      {
        path: "/log-temporary",
        name: "_log-temporary",
      },
      {
        path: "/usage",
        name: "_usage",
      },
      {
        path: "/violation",
        name: "_violation",
      },
    ]
  },
  {
    path: "/flexible",
    name: "_flexible",
    component: Flexible,
  },
  {
    path: "/overstay",
    name: "_overstay",
    component: Overstay,
  },
  {
    path: "/override",
    name: "_override",
    component: Override,
  },
  {
    path: "/specialuse",
    name: "_specialuse",
    component: SpecialUse,
  },
  {
    path: "/log-temporary",
    name: "_log-temporary",
    component: LogTemporary,
  },
  {
    path: "/tracking",
    name: "_tracking",
    component: Tracking,
  },
  {
    path: "/usage",
    name: "_usage",
    component: Usage,
  },
  {
    path: "/violation",
    name: "_violation",
    component: Violation,
  },
  {
    path: "/setting",
    name: "_setting",
    component: Setting,
    icon: Settings,
    sider: true
  },
]

export default routes