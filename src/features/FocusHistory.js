import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;
  const renderItem = ({ item }) => (
    <Text style={styles.historyItem}>- {item}</Text>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 25,
  },
  title: {
    color: colors.white,
    fontSize: spacing.lg,
    marginBottom: 10
  },

  historyItem: {
    color: colors.white,
    fontSize: spacing.md,
  },
});

export default FocusHistory;
