import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: "#141313", alignContent: "center"}}>
      <View style={styles.titleContainer}>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20}}>AppGestion</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    top: 40,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
