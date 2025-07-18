import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Message({receiver_id}:any) {
  const navigation = useNavigation<any>();
  const back = axios.create({baseURL:"http://192.168.1.17:8082", withCredentials: true})
  const [logged, setLogged] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");



  useFocusEffect(useCallback(() => {
    back.get('/status').then(res => {setLogged(res.data.logged)}).catch(err => {navigation.navigate("(tabs)", {screen: "index"})});
  }, [logged]))

  const handleSubmit = () => {
   
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: "#141313", alignContent: "center"}}>
      <View style={styles.titleContainer}>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20}}>AppGestion</Text>
      </View>
        <TextInput value={message} onChange={handleSubmit} onChangeText={setMessage} placeholderTextColor={"#D9D9D9"} placeholder="Ecrire un message..." style={{borderBottomColor: "#D9D9D9", borderBottomWidth: 1, marginBottom: 40, width: '80%', alignSelf: "center", top: '80%', color: "#D9D9D9"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    top: 40,
  },
});
