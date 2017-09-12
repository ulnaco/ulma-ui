import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { ULStyles } from '../ULStyles';

export class ULTitle extends React.Component {

  render() {
    return (
      <View>
        {this.props.lite &&
          <Text style={[ULStyles.title, ULStyles.colorWhite]}>{this.props.text}</Text>
        }
        {!this.props.lite &&
          <Text style={ULStyles.title}>{this.props.text}</Text>
        }
      </ View>
    )
  }
}
