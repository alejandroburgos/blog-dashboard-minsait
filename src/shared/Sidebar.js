import React from "react";

import { Card, Button, List, ListItem } from "@mui/material";

import logo from "../assets/images/Dasdas Logo 1.svg";
import iconDashboard from "../assets/images/icon/iconDashboard.svg";
import iconChats from "../assets/images/icon/chart.svg";
import iconDocuments from "../assets/images/icon/documents.svg";
import iconBlog from "../assets/images/icon/post.svg";
import iconMessage from "../assets/images/icon/message.svg";
import iconUsers from "../assets/images/icon/user.svg";
import iconSettings from "../assets/images/icon/settings.svg";
import iconLogout from "../assets/images/icon/logout.svg";

export const Sidebar = (props) => {
  let icon;

  return (
    <>
      <Card className="p-0 " style={{ minHeight: "100%" }}>
        <div className="text-center">
          <img
            className="p-4 text-center"
            src={logo}
            alt="logo"
            width="150px"
            style={{ marginBottom: "40px" }}
          />
        </div>

        <List component="div" className="p-3 nav">
          {props.routes.map((route, i) => {
            switch (route.name) {
              case "Dashboard":
                icon = iconDashboard;
                break;
              case "Chats":
                icon = iconChats;
                break;
              case "Documents":
                icon = iconDocuments;
                break;
              case "Blog":
                icon = iconBlog;
                break;
              case "Message":
                icon = iconMessage;
                break;
              case "Users":
                icon = iconUsers;
                break;
              case "Settings":
                icon = iconSettings;
                break;
              case "Log Out":
                icon = iconLogout;
                break;
              default:
                break;
            }
            return (
              <div style={{ width: "100%" }} key={i}>
                <ListItem
                  className="pt-2 nav-button"
                  button
                  selected={route.name === "Dashboard"}
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    className="text-center "
                    style={{ marginRight: 15 }}
                    src={icon}
                    alt={route.name}
                  />
                  <span>{route.name}</span>
                </ListItem>
              </div>
            );
          })}
          <Button className="nav-button-post">+ New Post</Button>
        </List>
      </Card>
    </>
  );
};
