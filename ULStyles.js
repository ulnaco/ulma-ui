import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styleguide = {
  color: {
    primary: '#4A90E2',
    black: '#4A4A4A',
    white: '#FCFCFC'
  },
  spacing: 20
}

export const ULStyles = StyleSheet.create({
  colorPrimary: {
    color: styleguide.color.primary
  },
  colorBlack: {
    color: styleguide.color.black
  },
  colorWhite: {
    color: styleguide.color.white
  },
  textCenter: {
    textAlign: 'center'
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    padding: styleguide.spacing,
  },
  screenPrimary: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleguide.color.primary,
    padding: styleguide.spacing,
  },
  buttonPrimary: {
    paddingHorizontal: styleguide.spacing*2,
    paddingVertical: styleguide.spacing/2,
    backgroundColor: styleguide.color.primary,
  },
  buttonWhite: {
    paddingHorizontal: styleguide.spacing*2,
    paddingVertical: styleguide.spacing/2,
    backgroundColor: styleguide.color.white,
  },
  buttonBlack: {
    paddingHorizontal: styleguide.spacing*2,
    paddingVertical: styleguide.spacing/2,
    backgroundColor: styleguide.color.black,
  }
});
