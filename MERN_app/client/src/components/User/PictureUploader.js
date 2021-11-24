import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import $ from "jquery";
import styles from "./PictureUploader.css";

import {updateUser, getUser} from "../../actions/userProfile";

const PictureUploader = ({ id, pic }) => {
  const dispatch = useDispatch();
  const [picData, setPicData] = useState({
    profilePicture: "",
    title: "Upload Profile Picture",
  });
  useEffect(() => {
    dispatch(getUser(id));
  }, [id, dispatch]);
  
  const user = useSelector((state) => state.users);

  const handlePictureSelected = async (event) => {
    var picture = URL.createObjectURL(event.target.files[0]);
    setPicData({
      profilePicture: picture,
      title: "Change Profile Picture"
    })
    console.log(picData);
    console.log(user);
    dispatch(updateUser(id, {...picData, profilePicture:picture}));
  }
  const clearPhoto = (event) => {
    setPicData({
      profilePicture: "",
      title: "Upload Profile Picture"
    })
  }
  return (
    <div>
        <label for="upload-photo">{picData.title}</label>
        <input
          type="file"
          name="photo"
          onChange={handlePictureSelected}
          id="upload-photo"
        />
        <br />
        <br />
        {picData.profilePicture && (
          <div>
          <img alt="not fount" width={"250px"} src={picData.profilePicture} />
          <br />
          <button onClick={clearPhoto}>Remove</button>
          </div>
        )}
        <hr />
      </div>
  )
}

export default PictureUploader;
