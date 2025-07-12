import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigation = useNavigation();
    const back = axios.create({baseURL:"http://192.168.1.17/8082", withCredentials: true})

    const eventSubmit = () => {
        back.post('/login', {email: email, password: password}).then(res => {navigation.navigate("Home")}).catch(err => {console.log(err)})
    };

    return(
        <View style={{backgroundColor: "#141313", width: '100%', height: '100%'}}>
            <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 50, top: 100, alignSelf: "center"}}>Login</Text>
            <TextInput value={email} onChangeText={setEmail} placeholderTextColor={"#D9D9D9"} placeholder="Adresse Email" style={{borderBottomColor: "#D9D9D9", borderBottomWidth: 1, marginBottom: 40, width: '80%', alignSelf: "center", top: 200, color: "#D9D9D9"}}></TextInput>
            <TextInput value={password} onChangeText={setPassword} placeholderTextColor={"#D9D9D9"} placeholder="Mot de passe" secureTextEntry={true} style={{borderBottomColor: "#D9D9D9",borderBottomWidth: 1, width: '80%', alignSelf: "center", top: 250, color: "#D9D9D9"}}></TextInput>
            <TouchableOpacity onPress={eventSubmit} style={{alignSelf:"center", top: '37%'}}><Text style={{color: "#D9D9D9", fontStyle: "italic", borderBottomColor: "#D9D9D9",borderBottomWidth: 1}}>Se Connecter</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Register")}} style={{alignSelf:"center", top: '44%'}}><Text style={{color: "#D9D9D9", fontStyle: "italic"}}>Pas encore de compte? Inscrivez-vous ici</Text></TouchableOpacity>
        </View>
    );
}