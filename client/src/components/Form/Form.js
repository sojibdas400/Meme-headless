import { Button, Grid, Input, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";

import useStyles from "./styles";
const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectFile: "",
  });
  const handleSubmit = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <TextField
              name="meme"
              variant="outlined"
              placeholder="Provide meme link"
              fullWidth
              value={postData.meme}
              onChange={(e) =>
                setPostData({ ...postData, meme: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid xs={3}>
            <Button variant="contained" color="primary" type="submit">
              Add Meme
            </Button>
          </Grid>
          <Grid xs={4}>
            <FileBase
              type="file"
              multiple={false}
              onDone={(base64) =>
                setPostData({ ...postData, selectFile: base64 })
              }
            ></FileBase>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
