import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const back = axios.create({baseURL:"http://192.168.1.17:8082", withCredentials: true})
  const [logged, setLogged] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState("");
  const [resultId, setResultId] = useState(0); // erreur undefinied

  useFocusEffect(useCallback(() => {
    back.get('/status').then(res => {setLogged(res.data.logged)}).catch(err => {});
  }, [logged]))

  
  const handleProfile = async () => {
    navigation.navigate("UserDepend", {screen: "Profile", params: { id: resultId }});
  }

  const handleSubmit = () => {
    if (search.trim().length === 0) {
      setResult("");
      setResultId(0);
      return;
    }
    back.post('/search', {userQuery: search}).then(res => {setResult(res.data.result.username); setResultId(res.data.result.id);}).catch(err => {});
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: "#141313", alignContent: "center"}}>
      <View style={styles.titleContainer}>
        <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 20}}>AppGestion</Text>
      </View>
      {!logged && (<TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={{top: '30%', width: '40%', height: '5%', borderWidth: 2, borderRadius: 12, borderColor: "#D9D9D9",alignSelf: "center", justifyContent: "center"}}><Text style={{color: "#D9D9D9", fontSize: 20, alignSelf: "center"}}>Se Connecter</Text></TouchableOpacity>)}
      {logged && (<View><TextInput value={search} onChange={handleSubmit} onChangeText={setSearch} placeholderTextColor={"#D9D9D9"} placeholder="Rechercher un utilisateur" style={{borderBottomColor: "#D9D9D9", borderBottomWidth: 1, marginBottom: 40, width: '80%', alignSelf: "center", top: 200, color: "#D9D9D9"}}></TextInput>
      <TouchableOpacity onPress={handleProfile} style={{top: 210}}><Text style={{color: "#D9D9D9", fontSize: 20, alignSelf: "center"}}>{result}</Text></TouchableOpacity>
 </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    top: 40,
  },
});
