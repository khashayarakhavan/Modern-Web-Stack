import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import addCollectionAndDocuments from '../../firebase/firebase.utils';
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer
} from "./addDbToFirestore.styles";

export const FirebaseDBPage = ({ collectionsArray }) => {
    // const { title, items } = collection;
   
  addCollectionAndDocuments('collection', collectionsArray.map(({title, items}) => ({title, items}) ));
   
  return (
    <div>
      <marquee>Hello</marquee>
      <p>Data successfully transferred to Firestore.</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps)(FirebaseDBPage);
