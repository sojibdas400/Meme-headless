import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creatint meme</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

// import { Button, Grid, Input, Paper, TextField } from "@material-ui/core";
// import React, { useState } from "react";
// import FileBase from "react-file-base64";
// import { createPost } from "../../actions/posts";
// import { useDispatch } from "react-redux";

// import useStyles from "./styles";
// const Form = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const [postData, setPostData] = useState({
//     creator: "",
//     title: "",
//     message: "",
//     tags: "",
//     selectFile: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createPost(postData));
//   };

//   return (
//     <Paper className={classes.paper}>
//       <form
//         autoComplete="off"
//         noValidate
//         className={`${classes.root} ${classes.form}`}
//         onSubmit={handleSubmit}
//       >
//         <Grid container spacing={1}>
//           <Grid item xs={5}>
//             <TextField
//               name="meme"
//               variant="outlined"
//               placeholder="Provide meme link"
//               fullWidth
//               value={postData.meme}
//               onChange={(e) =>
//                 setPostData({ ...postData, meme: e.target.value })
//               }
//             ></TextField>
//           </Grid>
//           <Grid xs={3}>
//             <Button variant="contained" color="primary" type="submit">
//               Add Meme
//             </Button>
//           </Grid>
//           <Grid xs={4}>
//             <FileBase
//               type="file"
//               multiple={false}
//               onDone={(base64) =>
//                 setPostData({ ...postData, selectFile: base64 })
//               }
//             ></FileBase>
//           </Grid>
//         </Grid>
//       </form>
//     </Paper>
//   );
// };

// export default Form;
