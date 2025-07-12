import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: "#141313", alignContent: "center"}}>
      <View style={styles.titleContainer}>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20}}>AppGestion</Text>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={{top: '30%', alignSelf: "center"}}><Text style={{color: "#D9D9D9", fontSize: 20}}>Login</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    top: 40,
  },
});
