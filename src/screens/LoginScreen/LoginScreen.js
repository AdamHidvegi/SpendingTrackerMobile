import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  }

  const onLoginPress = () => {

  }

  return (
    <View>
      <KeyboardAwareScrollView keyboardShouldPresistTaps='always'>
        <TextInput placeholder='E-mail' onChangeText={(text) => setEmail(text)} value={email} autoCapitalize='none'/>
        <TextInput secureTextEntry placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} autoCapitalize='none'/>
        <TouchableOpacity onPress={() => onLoginPress()}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <View>
          <Text>Don't have an account? <Text onPress={onFooterLinkPress}>Sign up</Text></Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )

}
