import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 50px",
    // backgroundColor: "#9DB5B2",
    backgroundColor: "#e8f4f8",
  },
  heading: {
    // color: "#3B413C",
    color: "#1B1B3A",
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily.raleway,
  },
  image: {
    marginLeft: "15px",
    justifyContent: "flex-start",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    margin: "15px 15px",
    backgroundColor: "#CACECE",
    alignItems: "center",
    justifyContent: "inherit",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  Avatar: {
    justifyContent: "flex-end",
  }
}));
