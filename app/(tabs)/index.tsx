import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const back = axios.create({baseURL:"http://192.168.1.17:8082", withCredentials: true})
  const [logged, setLogged] = useState<boolean>(false);

  useFocusEffect(useCallback(() => {
    back.get('/status').then(res => {setLogged(res.data.logged)}).catch(err => {})
  }, [logged]))


  return (
    <View style={{width: '100%', height: '100%', backgroundColor: "#141313", alignContent: "center"}}>
      <View style={styles.titleContainer}>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20}}>AppGestion</Text>
      </View>
      {!logged && (<TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={{top: '30%', alignSelf: "center"}}><Text style={{color: "#D9D9D9", fontSize: 20}}>Login</Text></TouchableOpacity>)}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    top: 40,
  },
});
