import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Data Flow note:
// collections are filtered here using selectors outside of the component.
import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview, selectCollections } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview // converts object to array using `object.keys()` method.
});

export default connect(mapStateToProps)(CollectionsOverview);
