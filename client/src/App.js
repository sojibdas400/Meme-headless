import React from "react";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import Memes from "./components/Memes/Memes";

const App = () => {
  return (
    <Container maxWidth="sm">
      <AppBar position="" color="default">
        <Typography variant="h2" align="center">
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
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}>
              <Memes />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
