import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
  Typography,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import musicIcon from "../../images/musicIcon.png";
import avataricon from "../../images/avataricon.jpg";
const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };

  const openUser = () => history.push(`/users/${user?.result?._id}`);
  // Need to handle when user is null -> lead to 404 error

  const blog = () => {
    history.push("/posts");
  };

  const home = () => history.push("/");

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
      elevation={0}
      square={false}
    >
      {user ? (
        <>
          <div className={classes.brandContainer}>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              variant="h2"
              // align="center"
            >
              Harmony
            </Typography>
            {/* <img
              className={classes.image}
              src={musicIcon}
              alt="musicIcon"
              height="60"
            /> */}
          </div>
          <Toolbar className={classes.toolbar}>
            <div className={classes.rightSide}>

              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <IconButton className={classes.toolbarElement}>
                        <Typography className={classes.toolbarElementTypography} {...bindTrigger(popupState)} variant="h6">
                          Explore
                        </Typography>
                      </IconButton>
                    <Menu  {...bindMenu(popupState)} >
                      <MenuItem onClick={blog} >Blogs</MenuItem>
                      <MenuItem onClick={home} >Playlists</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>

              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <IconButton className={classes.toolbarElement}>
                        <Typography className={classes.toolbarElementTypography} {...bindTrigger(popupState)} variant="h6">
                          {user.result.name}
                        </Typography>
                      </IconButton>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={openUser} >Profile</MenuItem>
                      <MenuItem onClick={logout} >Log Out</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>

              {/* <IconButton className={classes.toolbarElement}>
                <Typography className={classes.toolbarElementTypography} variant="h6">
                  Profile
                </Typography>
              </IconButton> */}

              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
            </div>
          </Toolbar>
        </>
      ) : (
        <>
          <div className={classes.brandContainer}>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              variant="h2"
              // align="center"
            >
              Harmony
            </Typography>
            </div>

            <Toolbar className={classes.toolbar}>
              <div className={classes.rightSide}>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <IconButton className={classes.toolbarElement}>
                            <Typography className={classes.toolbarElementTypography} {...bindTrigger(popupState)} variant="h6">
                              Explore
                            </Typography>
                          </IconButton>
                        <Menu  {...bindMenu(popupState)} >
                          <MenuItem onClick={blog} >Blogs</MenuItem>
                          <MenuItem onClick={home} >Playlists</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>

                <IconButton className={classes.toolbarElement} component={Link} to="/auth" variant="contained">
                    <Typography className={classes.toolbarElementTypography} variant="h6">
                      Sign In
                    </Typography>
                  </IconButton>
                </div>
            </Toolbar>
        </>
      )}
    </AppBar>
  );
};

export default Navbar;
