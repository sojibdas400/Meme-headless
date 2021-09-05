import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0),
      width: "60%",
      border: "1px solid black",
      padding: "5px",
      borderRight: "none",
    },
    "& .MuiInput-underline":{
       "&::before":{
         border:"none"
       }
    },
    },
  buttonsub: {
    width: "37%",
    padding: "9px",
    border: "1px solid black",
    borderRadius: 0,
  },
  input: {
    display: "none",
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    textAlign: "center",
    width: "99%",
    padding: " 5px 1px",
    border: "1px solid black",
    borderRadius: 0,
  },
}));
