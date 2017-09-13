import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import { ULStyleguide } from './ULStyleguide'

export const ULStyles = StyleSheet.create({
  colorPrimary: {
    color: ULStyleguide.color.primary
  },
  colorBlack: {
    color: ULStyleguide.color.black
  },
  colorWhite: {
    color: ULStyleguide.color.white
  },
  textCenter: {
    textAlign: 'center'
  },
  window: {
    flex: 1
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    padding: ULStyleguide.spacing,
  },
  backgroundWhite: {
    backgroundColor: ULStyleguide.color.white,
  },
  backgroundBlack: {
    backgroundColor: ULStyleguide.color.black,
  },
  backgroundPrimary: {
    backgroundColor: ULStyleguide.color.primary,
  },
  buttonPrimary: {
    paddingHorizontal: ULStyleguide.spacing*2,
    paddingVertical: ULStyleguide.spacing/1.5,
    backgroundColor: ULStyleguide.color.primary,
    marginBottom: ULStyleguide.spacing,
  },
  buttonWhite: {
    paddingHorizontal: ULStyleguide.spacing*2,
    paddingVertical: ULStyleguide.spacing/1.5,
    backgroundColor: ULStyleguide.color.white,
    marginBottom: ULStyleguide.spacing,
  },
  buttonBlack: {
    paddingHorizontal: ULStyleguide.spacing*2,
    paddingVertical: ULStyleguide.spacing/1.5,
    backgroundColor: ULStyleguide.color.black,
    marginBottom: ULStyleguide.spacing,
  },
  title: {
    marginBottom: ULStyleguide.spacing,
    fontSize: 30,
  },
  subTitle: {
    marginBottom: ULStyleguide.spacing,
  },
});
