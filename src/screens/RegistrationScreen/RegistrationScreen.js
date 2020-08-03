import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function RegistrationScreen({navigation}) {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onFooterLinkPress = () => {
    navigation.navigate('Login')
  }

  const onRegisterPress = () => {

  }

  return (
    <View>
      <KeyboardAwareScrollView keyboardShouldPresistTaps='always'>
        <TextInput placeholder='Full name' onChangeText={(text) => setFullName(text)} value={fullName}autoCapitalize='none'/>
        <TextInput placeholder='E-mail' onChangeText={(text) => setEmail(text)} value={email} autoCapitalize='none'/>
        <TextInput placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} autoCapitalize='none'/>
        <TextInput placeholder='Confirm Password' onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword} autoCapitalize='none'/>
        <TouchableOpacity onPress={() => onRegisterPress()}>
          <Text>Create Account</Text>
        </TouchableOpacity>
        <View>
          <Text>Already got an account?<Text onPress={onFooterLinkPress}>Log in</Text></Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )

}
