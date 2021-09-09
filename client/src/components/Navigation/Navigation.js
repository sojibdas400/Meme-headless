import React from "react";
import { AppBar, Container, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import useStyles from "../../styles";

const Navigation = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          <Link style={{textDecoration:"none"}} to="/">Meme Gallery</Link>
        </Typography>
        <div>
          <Link className={classes.stats} to="/stats">
            See Stats
          </Link>
        </div>
      </AppBar>
    </Container>
  );
};

export default withRouter(Navigation);
