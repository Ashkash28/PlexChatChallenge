/* @flow */

import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-vertical: 5;
`;

const Image = styled.Image`
  height: 10;
  width: 10;
`;

const Text = styled.Text`
  font-size: 10;

`;

type Props = {
  imageUrl: string,
  bookTitle: string,
}

export default function ListItem(props: Props) {
  const { imageUrl, bookTitle } = props;
  return (
    <Container>
      <Image source={{ uri: imageUrl }} />
      <Text>{bookTitle}</Text>
    </Container>
  );
}
