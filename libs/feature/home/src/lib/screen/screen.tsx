import { StyleSheet, Text, View } from 'react-native';
import { TextLink } from 'solito/link';

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Here is a basic starter to show you how you can navigate from one screen
        to another. This screen uses the same code on Next.js and React Native.
      </Text>
      <TextLink href="/user/amos">To user profile</TextLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 16,
  },
});
