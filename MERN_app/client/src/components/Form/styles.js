import { makeStyles } from "@material-ui/core/styles";
const rubik = "'Rubik', rubik";
export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#c0b7b1",
    // backgroundColor: "#ffff00",
    // marginTop: "15%",
    // minWidth: "20em",
    float: "right",
    width: "85%",
  },
  form: {
    display: "block",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    display: "block",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#92a5c9",
    color: "#2e3238",
  },
  buttonClear: {
    backgroundColor: "#abb2bb",
    color: "#2e3238",
  },
  form2: {
    display: "inline-block",
    flexWrap: "wrap",
    marginTop: "5%",
    marginBottom: "0%",
    justifyContent: "center",
    marginRight: "0%",
    textAlign: "center",
  },
  typography: {
    fontFamiyl: {rubik}
  }
  // temporary: {
  //   fontFamily: theme.typography.fontFamily.openSans,
  // }
}));
