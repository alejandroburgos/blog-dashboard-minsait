import Index from "./Views/Index";

var routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Index,
    layout: "/",
    icon: "iconDashboard",
  },
  {
    path: "/",
    name: "Chats",
    component: Index,
    layout: "/",
  },
  {
    path: "/",
    name: "Documents",
    component: Index,
    layout: "/",
  },
  {
    path: "/",
    name: "Blog",
    component: Index,
    layout: "/",
  },
  {
    path: "/",
    name: "Message",
    component: Index,
    layout: "/",
  },
  {
    path: "/",
    name: "Users",
    component: Index,
    layout: "/",
  },
  {
    path: "/",
    name: "Settings",
    component: Index,
    layout: "/",
  },
  {
    path: "/",
    name: "Log out",
    component: Index,
    layout: "/",
  },
];
export default routes;
