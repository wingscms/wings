import React, { Component } from 'react';

export default class CloudinaryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [
        {
          id: 1,
          type: 'video/mp4',
          src: `//res.cloudinary.com/${this.props.cloudName}/video/upload/vc_auto/${
            this.props.videoId
          }.mp4`,
        },
        {
          id: 2,
          type: 'video/webm',
          src: `//res.cloudinary.com/${this.props.cloudName}/video/upload/vc_auto/${
            this.props.videoId
          }.webm`,
        },
        {
          id: 3,
          type: 'video/ogg',
          src: `//res.cloudinary.com/${this.props.cloudName}/video/upload/vc_auto/${
            this.props.videoId
          }.ogg`,
        },
      ],
    };
  }

  // Supply the video source to the children.
  supplyUrls(children) {
    const { urls } = this.state;
    return React.Children.map(children, child => React.cloneElement(child, { urls }));
  }

  render() {
    return <div>{this.supplyUrls(this.props.children)}</div>;
  }
}
