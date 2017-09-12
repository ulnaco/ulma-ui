import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { ULStyles } from '../Styles/ULStyles';

export class ULSubTitle extends React.Component {

  render() {
    return (
      <View>
        {this.props.lite &&
          <Text style={[ULStyles.subTitle, ULStyles.colorWhite, ULStyles.textCenter]}>{this.props.text}</Text>
        }
        {!this.props.lite &&
          <Text style={[ULStyles.subTitle, ULStyles.textCenter]}>{this.props.text}</Text>
        }
      </ View>
    )
  }
}
