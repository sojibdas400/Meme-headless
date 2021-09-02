import React from "react";
import SingleMeme from "./SingleMeme/singleMeme";
import useStyles from "./styles";
const Memes = () => {
    const classes = useStyles();
  return (
    <>
      <h1>Memes</h1>;
      <SingleMeme />
      <SingleMeme />
      <SingleMeme />
    </>
  );
};

export default Memes;
