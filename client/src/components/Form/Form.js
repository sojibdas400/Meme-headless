import React, { useState, useEffect } from "react";
import imageToBase64 from "image-to-base64";
import { TextField, Button, Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const handleFileInput = async (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const base64 = await convertbase64(file);
    console.log(base64);
    setPostData({ ...postData, selectedFile: base64 });
    // dispatch(createPost(postData));
    handleSubmit(event);
  };
  const convertbase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid
            autoFocus={false}
            item
            alignItems="baseline"
            lg={9}
            md={9}
            xs={12}
          >
            <TextField
              name="creator"
              placeholder="Provide link"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
            <Button
              className={classes.buttonsub}
              fullWidth
              color="primary"
              type="submit"
            >
              Add Meme
            </Button>
          </Grid>
          <Grid
            item
            alignItems="center"
            md={3}
            xs={12}
            spacing={4}
            justifyContent="center"
          >
            <div className={classes.fileInput}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                onChange={(e) => {
                  handleFileInput(e);
                }}
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  center
                  size="small"
                  // variant="outlined"
                  fullWidth
                  color="primary"
                  component="span"
                >
                  Upload
                </Button>
              </label>
              {/* <FileBase
                className={classes.input}
                type="file"
                id="contained-button-file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              /> */}
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
