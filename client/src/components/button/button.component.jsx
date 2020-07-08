import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMode } from "../../redux/themes/themes.actions";
import { selectMode } from '../../redux/themes/themes.selectors';

import {
  Button
} from './button.styles';

export const ButtonMode = ({ toggleMode }) => (
  <Button onClick={toggleMode} />
);

const mapDispatchToProps = dispatch => ({
  toggleMode: () => dispatch(toggleMode())
});

const mapStateToProps = createStructuredSelector({
  mode: selectMode
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonMode);
