import React from "react";
import { Grid, Badge, Stack, Avatar, Divider } from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";

import avatar from "../assets/images/avatar/ToyFaces_Colored_BG_8 1.svg";

export const Navbar = () => {
  return (
    <div className="d-flex">
      <Grid sx={{ m: 2 }}>
        <div className="ml-3 text-left">
          <h1>Dashboard</h1>
          <small>Hi Hüseyin, welcome back!</small>
        </div>
      </Grid>

      <Grid
        sx={{ m: 2 }}
        className="navbar"
        container
        justifyContent="flex-end"
      >
        <div className="ml-3">
          <form>
            <input
              type="search"
              label="Search everything"
              placeholder="Search everything"
            />
          </form>
        </div>
      </Grid>

      <Grid sx={{ m: 2 }} className="navbar">
        <Badge color="primary" variant="dot" in>
          <NotificationsNone color="primary" />
        </Badge>
      </Grid>

      <Divider
        className=" navbar"
        orientation="vertical"
        style={{ margin: "40px 5px 5px 10px", height: "30px" }}
      />

      <Grid sx={{ m: 2 }} className="navbar">
        <Stack direction="row" spacing={2}>
          <Avatar alt={"avatar"} src={avatar} />
        </Stack>
      </Grid>
    </div>
  );
};
