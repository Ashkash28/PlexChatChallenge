/* @flow */

import React from 'react';
import styled from 'styled-components/native';

type Props = {
  value: string,
  placeholder?: string,
  onChangeText: Function,
}

export default function SearchInput(props: Props) {
  return (
    <Container>
      <Input {...props} />
    </Container>
  );
}

const Container = styled.View`
  margin-vertical: 15;
`;

const Input = styled.TextInput`
  color: gray;
  height: 20;
  font-size: 18;
`;