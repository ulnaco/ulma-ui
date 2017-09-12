import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { ULStyles } from '../Styles/ULStyles';

export class ULButton extends React.Component {

  render() {
    return (
      <View>
      {this.props.white &&
        <View style={ULStyles.buttonWhite}>
          <Text style={[ULStyles.colorBlack, ULStyles.textCenter]}>{this.props.text}</Text>
        </View>
      }
      {this.props.primary &&
        <View style={ULStyles.buttonPrimary}>
          <Text style={[ULStyles.colorWhite, ULStyles.textCenter]}>{this.props.text}</Text>
        </View>
      }
      </ View>

    )
  }
}
