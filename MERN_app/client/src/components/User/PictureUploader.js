import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
// import $ from "jquery";
import styles from "./PictureUploader.css";

import { updateUser } from "../../actions/userProfile";

const PictureUploader = ({ user, id, pic }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [picData, setPicData] = useState({
    profilePicture: pic,
  });

  const clearPhoto = (event) => {
    setPicData({
      profilePicture: "",
    });
  };
  const handlePictureSelected = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, { ...picData }));
    clearPhoto();
  };
  return (
    <form autoComplete="off" noValidate onSubmit={handlePictureSelected}>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) =>
          setPicData({
            ...picData,
            profilePicture: base64,
          })
        }
      ></FileBase>
      <Button
        //   className={classes.buttonSubmit}
        variant="contained"
        // color="primary"
        size="large"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};
// <>
// <form autoComplete="off" noValidate onSubmit={handlePictureSelected}>
//   <FileBase
//     type="file"
//     multiple={false}
//     onDone={({ base64 }) =>
//       setPicData({
//         ...picData,
//         profilePicture: base64,
//       })
//     }
//   ></FileBase>
//   <Button
//     //   className={classes.buttonSubmit}
//     variant="contained"
//     // color="primary"
//     size="large"
//     type="submit"
//     fullWidth
//   >
//     Submit
//   </Button>
//   </form>
//   </>
{
  /* <input
        type="file"
        name="photo"
        onChange={handlePictureSelected}
        id="upload-photo"
      /> */
}
{
  /* <br />
      <br />
      {picData.profilePicture && (
        <div>
          <img alt="not fount" width={"250px"} src={picData.profilePicture} />
          <br />
          <button onClick={clearPhoto}>Remove</button>
        </div>
      )}
      <hr /> */
}

export default PictureUploader;
