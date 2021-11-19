import React from "react";
// import $ from "jquery";
import styles from "./PictureUploader.css";
export default class PictureUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: false,
      src: false,
      title: "Upload Profile Picture"
    };
  }

  handlePictureSelected(event) {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src,
      title: "Change Profile Picture"
    });
  }

  renderPreview() {
    if (this.state.src) {
      return <img src={this.state.src} height="150" width="200" />;
    }
  }

  // upload() {
  //   var formData = new FormData();

  //   formData.append("file", this.state.picture);

  //   $.ajax({
  //     url: "/some/api/endpoint",
  //     method: "POST",
  //     data: formData,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     success: function (response) {
  //       // Code to handle a succesful upload
  //     },
  //   });
  // }

  render() {
    return (
      <div>
        <label for="upload-photo">{this.state.title}</label>
        <input
          type="file"
          name="photo"
          onChange={this.handlePictureSelected.bind(this)}
          id="upload-photo"
        />
        {/* <input
          type="file"
          onChange={this.handlePictureSelected.bind(this)}
        /> */}
        <br />
        <br />
        <div>
          {this.renderPreview()}
          {/* {this.upload.bind(this)} */}
        </div>
        <hr />
      </div>
    );
  }
}