import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";
import { ImageBackground } from "react-native-web";

const sendText = async (phoneNumber) => {
  await fetch("https://dev.stedi.me/twofactorlogin/"+phoneNumber, {
    method: "Post",
    headers: {
      'Content-Type': 'application/text'
    }
  });
  console.log("Phone number: ",phoneNumber);
}

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(null);

  return (
    <SafeAreaView style ={styles.mainView}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="801-555-1212"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOtp}
        value={otp}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
      >
        <Text>send text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
      >
        <Text>log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView:{
    marginTop: 100
  }, 
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    margin: 15,
    width: 75,
  }
});

export default Login;