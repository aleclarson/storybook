import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { a } from '@react-spring/native';
import { EmotionProps } from '../Shared/theme';

const Container: typeof a.View = styled(a.View)`
  background: ${(props: EmotionProps) => props.theme.backgroundColor};
`;

interface Props {
  style: any[];
}

export default class Panel extends PureComponent<Props> {
  render() {
    const { children, style } = this.props;
    return <Container style={[StyleSheet.absoluteFillObject, ...style]}>{children}</Container>;
  }
}
