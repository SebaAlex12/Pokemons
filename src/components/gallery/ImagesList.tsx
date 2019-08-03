import React, { Component } from "react";
import { fetchImages, Images } from "../../actions/gallery/index";
import { connect } from "react-redux";
import { StoreState } from "../../reducers/index";

interface Iprops {
  images: Images[];
  fetchImages(): any;
}

class ImagesList extends Component<Iprops> {
  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    const { images } = this.props;
    console.log("images: ", images);
    return (
      <div>
        <h1>Where is my gallery - will be in the future ???</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { images: Images[] } => {
  return { images: state.images };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(ImagesList);
