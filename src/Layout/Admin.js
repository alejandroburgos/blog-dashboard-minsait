import React from "react";
import routes from "../routes";
import { Sidebar } from "../shared/Sidebar";
import Index from "../Views/Index";

import { Grid } from "@mui/material";

const Admin = (props) => {
  return (
    <>
      <Grid container>
        <Grid item sm={1} md={1} xl={2}>
          <Sidebar {...props} routes={routes} />
        </Grid>

        <Grid item sm={11} md={11} xl={10}>
          <Index routes={routes} />
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
