import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { ULStyles } from '../Styles/ULStyles';

export class ULListItem extends React.Component {

  render() {
    return (
      <View style={ULStyles.ListItem}>
        <View style={ULStyles.ListItemInner}>
          <Text style={ULStyles.ListItemTitle}>{this.props.title}</Text>
          <Text style={ULStyles.ListItemSubTitle}>{this.props.subTitle}</Text>
        </View>
      </ View>
    )
  }
}
