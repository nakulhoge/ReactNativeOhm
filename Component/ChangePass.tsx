import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {useTokenContext} from './TokenContext';

const ChangePass = () => {
  const {token} = useTokenContext();

  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleResetPassword = () => {
    // Create FormData object
    const formData = new FormData();
    formData.append('email', email);
    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);
    formData.append('confirmPassword', confirmPassword);
  
    // Make the POST request
    fetch('https://www.ohmjobs.com/JobSeekars/ChangePassword', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`, // Assuming token is a JWT token
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 10}}>
            Email
          </Text>
          <TextInput
            style={styles.input2}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            maxLength={14}
            placeholder="Enter Old Password"
            onChangeText={text => setOldPassword(text)}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            maxLength={8}
            placeholder="Create New Password"
            onChangeText={text => setNewPassword(text)}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            maxLength={8}
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
          />
          <Text style={{marginTop: 10, textAlign: 'right', color: '#1665DB'}}>
            Forgot Password?
          </Text>
        </SafeAreaView>

        <TouchableHighlight
          style={styles.submit}
          onPress={handleResetPassword}
        >
          <Text style={styles.submitineer}>Reset Password</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
        padding: 28,
        backgroundColor: '#fff',
        flex: 1,
      },
    
      input: {
        height: 40,
        marginTop: 30,
        fontSize: 17,
        borderRadius: 10,
        borderColor: 'rgba(36, 36, 53, 0.12);',
        borderWidth: 1,
        zIndex: -9999,
    
        padding: 10,
      },
    
      input2: {
        height: 40,
        marginTop: 5,
        fontSize: 17,
        borderRadius: 10,
        borderColor: 'rgba(36, 36, 53, 0.12);',
        borderWidth: 1,
        zIndex: -9999,
    
        padding: 10,
      },
    
      buttonStyle: {
        marginTop: 30,
      },
      dropdown: {
        marginTop: 30,
      },
      button: {
        backgroundColor: '#2DA08E',
        borderRadius: 10,
        marginTop: 0,
        fontSize: 17,
        padding: 15,
      },
    
      buttonineer: {
        color: '#fff',
        textAlign: 'center',
      },
      submit: {
        backgroundColor: '#2DA08E',
        borderRadius: 10,
        marginTop: 30,
        fontSize: 17,
        padding: 15,
      },
    
      submitineer: {
        color: '#fff',
        textAlign: 'center',
      },
});

export default ChangePass;
