/* @flow */

import React from 'react';
import styled from 'styled-components/native';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {
  bookAuthor: string,
  bookTitle: string,
}

export default function ListItem(props: Props) {
  const { bookAuthor, bookTitle } = props;
  return (
    <Container>
        <View>
            <Text numberOfLines={2} style={styles.title}>{bookTitle}</Text>
        </View>
        <View>
            <Text numberOfLines={1} style={styles.author}>By: {bookAuthor}</Text>
        </View>
    </Container>
  );
}

const Container = styled.View`
  padding-vertical: 10;
`;

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    flex: 1,
    fontSize: 16,
    textAlign: 'center'
  },
  author: {
    flex: 1,
    fontStyle: 'italic',
    marginTop: 5,
    textAlign: 'right',
  },
});
