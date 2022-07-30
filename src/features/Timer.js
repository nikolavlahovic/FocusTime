import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../components/Countdown';
import { ProgressBar } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { useKeepAwake } from "expo-keep-awake"
import { spacing, fontSizes } from '../utils/sizes';
import { ClearButton } from './ClearButton';
import { colors } from '../utils/colors';
export const Timer = ({ focusSubject, onClearSubject }) => {
  useKeepAwake("Timer Mounted Expo Keep Awake")
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    0.5 * ONE_SECOND_IN_MS,
    0.5 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    0.5 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    0.5 * ONE_SECOND_IN_MS,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!started}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
        <View style={styles.focusText}>
          <Text style={styles.text}>Focusing on:</Text>
          <Text style={styles.text}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <ProgressBar
          color={colors.progressBar}
          style={{ height: spacing.md }}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.startButton}>
          {!started ? (
            <RoundedButton
              size={150}
              title={'start'}
              onPress={() => setStarted((prevState) => !prevState)}
            />
          ) : (
            <RoundedButton
              size={150}
              title={'pause'}
              onPress={() => setStarted((prevState) => !prevState)}
            />
          )}
        </View>
        <View style={styles.addTimeButtonWrapper}>
          <RoundedButton
            size={75}
            title={'5'}
            onPress={() => {
              setMinutes(5);
            }}
          />
          <RoundedButton
            size={75}
            title={'10'}
            onPress={() => {
              setMinutes(10);
            }}
          />
          <RoundedButton
            size={75}
            title={'15'}
            onPress={() => {
              setMinutes(15);
            }}
          />
          <RoundedButton
            size={75}
            title={'20'}
            onPress={() => {
              setMinutes(20);
            }}
          />
        </View>
        <View style={styles.clearButton}>
          <ClearButton onClearSubject={onClearSubject} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  startButton: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: colors.white,
  },
  addTimeButtonWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: colors.white,
    paddingBottom: 20,
  },
  countdown: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusText: {
    justifyContent: 'center',
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  clearButton: {
    alignItems: "center",
    marginBottom: 20
  }
});
