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
  screen: {
    padding: styleguide.spacing,
  },
});
