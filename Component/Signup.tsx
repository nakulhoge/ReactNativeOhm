//main code

import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableHighlight,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTokenContext } from './TokenContext';


const Signup = props => {
  const { token, setAuthToken } = useTokenContext();
  const [FirstName, setFirstName] = useState('');
  const [emailID, setEmailid] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
  const [userType, setUsertype] = useState('');

  const [otp, setOtp] = useState('');
  const [nameerror, setNameerror] = useState(false);

  const [emailerror, setEmailerror] = useState(false);
  const [phoneerror, setPhoneerror] = useState(false);
  const [passerror, setPasserror] = useState(false);
  const [conpasserror, setConpasserror] = useState(false);
  const [otperror, setotperror] = useState();
  const [otpError, setOtpError] = useState(false);

  const generateOtp = async () => {
    try {
      const otpUrl = 'https://www.ohmjobs.com/job-seeker/genrateOTP';

      const formData = new FormData();
      formData.append('FirstName', FirstName);
      formData.append('userType', 'JobSeekar');
      formData.append('emailID', emailID);
      formData.append('mobileNumber', mobileNumber);
      formData.append('password', password);
      formData.append('confpassword', confpassword);

      let y = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!FirstName) {
        setNameerror(true);
      } else {
        setNameerror(false);
      }

      if (!emailID) {
        setEmailerror(true);
      } else if (y.test(emailID) === false) {
        setEmailerror(true);
        return false;
      } else {
        setEmailerror(false);
      }

      if (!mobileNumber) {
        setPhoneerror(true);
      } else {
        setPhoneerror(false);
      }

      if (!password) {
        setPasserror(true);
      } else if (password.length < 10) {
        setPasserror(true);
        return false;
      } else {
        setPasserror(false);
      }

      if (!userType) {
        setPhoneerror(true);
      } else {
        setPhoneerror(false);
      }

      if (!confpassword) {
        setConpasserror(true);
      } else if (confpassword !== password) {
        setConpasserror(true);
        return false;
      } else {
        setConpasserror(false);
      }

      if (!otp) {
        setotperror(true);
      } else {
        setotperror(false);
      }

      if (
        !FirstName ||
        !emailID ||
        !mobileNumber ||
        !password ||
        !confpassword
      ) {
        return false;
      }

      const response = await fetch(otpUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log(
          'Failed to generate OTP. Server returned:',
          response.status,
        );
        return;
      }

      const data = await response.json();
      if (data) {
        console.warn('OTP generated successfully,', data);
      } else {
        console.warn('Failed to generate OTP. Server response:', data);
      }
    } catch (error) {
      console.error('Error during OTP generation:', error);
    }
  };

  let test = () => {
    console.warn('hi');
  };
  const savedata = async () => {
    try {
      if (!otp) {
        setOtpError(true);
        return;
      } else {
        setOtpError(false);
      }

      const registrationUrl = 'https://www.ohmjobs.com/job-seeker/registration';

      const formData = new FormData();
      formData.append('FirstName', FirstName);
      formData.append('emailID', emailID);
      formData.append('mobileNumber', mobileNumber);
      formData.append('password', password);
      formData.append('confpassword', confpassword);
      formData.append('userType', 'JobSeekar');
      formData.append('otp', otp);

      const response = await fetch(registrationUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.warn('Registration failed. Server returned:', response.status);
        return;
      }

      const data = await response.json();
      const newtoken = data.finalToken;
    console.log(data)
      setAuthToken(newtoken)
      // token set to localstorage
      // await AsyncStorage.setItem('userToken', token);

      if (data) {
        props.navigation.navigate('PersonalInfo', {
          ffirstName: FirstName,
          eemail: emailID,
        });
      } else {
        console.warn('Registration failed. Server response:', data);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }

    let y = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!FirstName) {
      setNameerror(true);
    } else {
      setNameerror(false);
    }

    if (!emailID) {
      setEmailerror(true);
    } else if (y.test(emailID) === false) {
      setEmailerror(true);
      return false;
    } else {
      setEmailerror(false);
    }

    if (!mobileNumber) {
      setPhoneerror(true);
    } else {
      setPhoneerror(false);
    }

    if (!password) {
      setPasserror(true);
    } else if (password.length < 10) {
      setPasserror(true);
      return false;
    } else {
      setPasserror(false);
    }

    if (!userType) {
      setPhoneerror(true);
    } else {
      setPhoneerror(false);
    }

    if (!confpassword) {
      setConpasserror(true);
    } else if (confpassword !== password) {
      setConpasserror(true);
      return false;
    } else {
      setConpasserror(false);
    }

    if (!otp) {
      setotperror(true);
    } else {
      setotperror(false);
    }

    if (!FirstName || !emailID || !mobileNumber || !password || !confpassword) {
      return false;
    }
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 24, color: '#242435'}}>Sign Up</Text>
        <Text
          style={{
            fontSize: 17,
            color: '#242435',
            marginTop: 10,
            lineHeight: 24,
          }}>
          To get started, please follow these simple steps to create your
          account
        </Text>

        <SafeAreaView>
          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              onChangeText={text => setFirstName(text)}
              placeholder="Enter Name"
            />
          </View>

          {nameerror ? (
            <Text style={{color: '#ff0000'}}>please enter name </Text>
          ) : null}

          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              onChangeText={text => setEmailid(text)}
              placeholder="Email"
            />
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              style={styles.im2}
            />
          </View>
          {emailerror ? (
            <Text style={{color: '#ff0000'}}>please enter Email </Text>
          ) : null}

          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              onChangeText={number => setMobileNumber(number)}
              maxLength={12}
              placeholder="Phone number"
              keyboardType="numeric"
            />
            <FontAwesome name="phone" size={24} style={styles.im2} />
          </View>
          {phoneerror ? (
            <Text style={{color: '#ff0000'}}>please enter Phone number </Text>
          ) : null}

          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              maxLength={10}
              placeholder="Password"
            />

            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              style={styles.im2}
            />
          </View>

          {passerror ? (
            <Text style={{color: '#ff0000'}}>please enter Password </Text>
          ) : null}

          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              secureTextEntry={true}
              maxLength={10}
              onChangeText={text => setConfpassword(text)}
              placeholder="Confirm Password"
            />

            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              style={styles.im2}
            />
          </View>

          {conpasserror ? (
            <Text style={{color: '#ff0000'}}>
              please enter conform Password{' '}
            </Text>
          ) : null}

          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              onChangeText={text => setOtp(text)}
              placeholder="Verify OTP"
              keyboardType="numeric"
            />
          </View>

          {/* <View style={styles.sectionstyle}>
<TextInput
        style={styles.input2} secureTextEntry={true} 
        onChangeText={(text)=> setotp(text)} 
        placeholder="otp"
      
      />

<MaterialCommunityIcons name='lock-outline' size={24} style={ styles.im2} />
</View>
{ otperror ? <Text style = {{ color:'#ff0000'}}> enter valid otp </Text> : null} */}
        </SafeAreaView>

        <Text style={styles.buttonStyle}></Text>

        <TouchableHighlight onPress={generateOtp} style={styles.submit}>
          <Text style={styles.submitineer}>Generate OTP</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={savedata} style={styles.submit}>
          <Text style={styles.submitineer}>Register</Text>
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
  logo: {
    width: 241,
    height: 40,
    left: 50,
  },

  input: {
    height: 40,
    marginTop: 30,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,

    padding: 10,
  },

  input2: {
    height: 40,
    marginTop: 30,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    flex: 1,
    position: 'relative',

    padding: 10,
  },

  buttonStyle: {
    marginTop: 30,
  },

  im2: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 40,
    right: 10,
  },

  sectionstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 10,
    marginTop: 10,
    fontSize: 17,
    padding: 15,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Signup;
