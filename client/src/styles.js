import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  stats: {
    float: "right",
    width: "150px",
    border: "1px solid black",
    padding: "10px",
    margin: "10px 20px",
    textAlign: "center",
    textDecoration: "none"
  },
}));
