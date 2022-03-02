import React, { useState, useEffect } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { Container, Card, Button, Grid, List, ListItem } from "@mui/material";

import logo from "../assets/images/Dasdas Logo 1.svg";
import iconDashboard from "../assets/images/icon/iconDashboard.svg";
import iconChats from "../assets/images/icon/chart.svg";
export const Sidebar = (props) => {
  let icon;

  return (
    <>
      <Card className="p-0 " style={{ minHeight: window.innerHeight }}>
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
