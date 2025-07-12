import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Register(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmpass, setConfirmpass] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const navigation = useNavigation();
    const back = axios.create({baseURL:"http://192.168.1.17:8082", withCredentials: true});

    //add verif syntaxe mail, pseudo, mdp, verif confirmation mdp, puis faire login (back, verif syntaxe, puis a voir si on fait verif en envoyant mail)
    const eventSubmit = () => {
        back.post('/register', {username: username, email: email, password: password}).then(res => {
            navigation.navigate("Login");
        }).catch(err => {
            console.log(err);
        })
    };

    return(
        <View style={{backgroundColor: "#141313", width: '100%', height: '100%'}}>
            <Text style={{color: "#D9D9D9", fontWeight: "bold", fontSize: 50, top: 100, alignSelf: "center"}}>Register</Text>
            <TextInput value={email} onChangeText={setEmail} placeholderTextColor={"#D9D9D9"} placeholder="Adresse Email" style={{borderBottomColor: "#D9D9D9", borderBottomWidth: 1, marginBottom: 40, width: '80%', alignSelf: "center", top: 200, color: "#D9D9D9"}}></TextInput>
            <TextInput value={username} onChangeText={setUsername} placeholderTextColor={"#D9D9D9"} placeholder="Pseudonyme" style={{borderBottomColor: "#D9D9D9", borderBottomWidth: 1, width: '80%', alignSelf: "center", top: 200, color: "#D9D9D9"}}></TextInput>
            <TextInput value={password} onChangeText={setPassword} placeholderTextColor={"#D9D9D9"} placeholder="Mot de passe" secureTextEntry={true} style={{borderBottomColor: "#D9D9D9",borderBottomWidth: 1, width: '80%', alignSelf: "center", top: 250, marginBottom: 40, color: "#D9D9D9"}}></TextInput>
            <TextInput value={confirmpass} onChangeText={setConfirmpass} placeholderTextColor={"#D9D9D9"} placeholder="Mot de passe" secureTextEntry={true} style={{borderBottomColor: "#D9D9D9",borderBottomWidth: 1, width: '80%', alignSelf: "center", top: 250, color: "#D9D9D9"}}></TextInput>
            <TouchableOpacity onPress={eventSubmit} style={{alignSelf:"center", top: '37%'}}><Text style={{color: "#D9D9D9", fontStyle: "italic", borderBottomColor: "#D9D9D9",borderBottomWidth: 1}}>S'inscrire</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={{alignSelf:"center", top: '44%'}}><Text style={{color: "#D9D9D9", fontStyle: "italic"}}>Déjà un compte? Connectez-vous ici</Text></TouchableOpacity>
        </View>
    );
}