import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    margin: "20px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    // backgroundColor: "#9DB5B2",
    backgroundColor: "#e4e0dd",
    // margin: "0",
    // padding: "0px,0px,0px,0px",
    // width: "100%",
  },
  heading: {
    // color: "#3B413C",
    // color: "#1B1B3A",
    color: "#353132",
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily.rubik,
  },
  image: {
    marginLeft: "15px",
    justifyContent: "flex-start",
  },
  toolbar: {
    display: "flex",
    // float: "right",
    justifyContent: "flex-end",
    // width: "400px",
  },
  toolbarElement: {
    '&:hover': {
      backgroundColor: '#C0B7B1',
    },
    margin: "0",
    border: "0",
    paddingLeft: "5%",
    paddingRight: "5%",
    borderRadius: "0%",
  },
  rightSide: {
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "flex-end",
    width: "400px",
  },
  // userName: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  toolbarElementTypography: {
    fontFamily: theme.typography.fontFamily.almarai,
  },
  toolbarUsername: {
    margin: "0",
    border: "0",
    borderRadius: "0%",
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
    margin: "20px",
  },
  Avatar: {
    justifyContent: "flex-end",
  },
}));
