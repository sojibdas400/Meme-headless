import React, { useEffect } from "react";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import Memes from "./components/Memes/Memes";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="default">
        <Typography classsName={classes.heading} variant="h2" align="center">
          Meme Gallery
        </Typography>
      </AppBar>

      <Typography variant="h4" align="center">
        stats
      </Typography>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={10}>
              <Form />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Memes />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
