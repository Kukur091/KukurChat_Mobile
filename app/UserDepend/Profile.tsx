import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const back = axios.create({baseURL:"http://192.168.1.17:8082", withCredentials: true})
  const [username, setUsername] = useState<string>("");
  const [id, setId] = useState(route.params.id);

  useFocusEffect(
    useCallback(() => {
      back.get(`/get/${id}`).then(res => {setUsername(res.data.result.username)}).catch(err => {console.log(err)});
    }, [id])
  );



  return (
    <View style={{width: '100%', height: '100%', backgroundColor: "#141313", alignContent: "center", alignSelf: "center",}}>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20}}>AppGestion</Text>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20, top: 50, alignSelf: "flex-start", left: 80}}>{username}</Text>
        <TouchableOpacity style={{top: 70, alignSelf: "flex-start", left: 100}} onPress={() => {navigation.navigate("messages", {screen: "message"})}}><Ionicons name='chatbubble-ellipses-outline' style={{color: "#D9D9D9", fontSize: 35}}></Ionicons></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    top: 40,
  },
});
