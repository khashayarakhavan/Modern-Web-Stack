import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import addCollectionAndDocuments from '../../firebase/firebase.utils';
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection, selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer
} from "./addDbToFirestore.styles";

export const FirebaseDBPage = ({ collectionsArray }) => {
    // const { title, items } = collection;
    useEffect(() => {
      addCollectionAndDocuments('shopdata', collectionsArray.map(({title, items}) => ({title, items}) ));
    });

  return (
    <CollectionPageContainer>
      <marquee>
        Hello
      </marquee>
      <p>Data successfully transferred to Firestore.</p>
    </CollectionPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps)(FirebaseDBPage);
