import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GenerateOTP = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Add state to handle error messages
  const [otpp, setotpp] = useState('');

 
  const handleGenerateOTP = async () => {
    try {
      const apiUrl = 'http://www.ohmjobs.com/account/login';

      // Construct form data object
      const formData = new FormData();
      formData.append('userType', 'JobSeekar');
      formData.append('email', email);
      formData.append('password', password);
     

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'name': 'test', // Correct format for headers
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.error(
          'Failed to generate OTP. Server returned:',
          response.status,
        );
        console.error('Error details:', data);
        setError('Failed to generate OTP. Please try again.');
        return;
      }

      if (data.error) {
        setError(data.message);
      } else {
        setError(null);

        if (data.otp) {
          props.navigation.navigate('verification', {
            eemail: email,
          });
        } else {
          setError('Failed to generate OTP. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during OTP generation:', error.message);
      setError('An error occurred. Please try again.'); // Set error message state
    }
  };

  const handleLoginWithGoogle = () => {
    // TODO: Implement Google login logic
  };

  const handleLoginWithApple = () => {
    // TODO: Implement Apple login logic
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: '#242435'}}>Enter email</Text>
      <Text style={{fontSize: 17, color: '#242435', marginTop: 10}}>
        Please enter your email associated with your account. We will send the
        OTP to this email.
      </Text>

      <SafeAreaView>
        <View style={styles.sectionstyle}>
          <FontAwesome name="envelope" size={22} style={styles.im3} />
          <TextInput
            style={styles.input2}
            onChangeText={text => setEmail(text)}
            maxLength={40}
            placeholder="example@example.com"
            keyboardType="email-address"
          />
        </View>
        <View>
          <TextInput
            style={styles.input3}
            onChangeText={text => setPassword(text)}
            maxLength={40}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            style={styles.im2}
          />
        </View>
      </SafeAreaView>

      <TouchableHighlight onPress={handleGenerateOTP} style={styles.submit}>
        <Text style={styles.submitineer}>Generate OTP</Text>
      </TouchableHighlight>
      <View>
        <Text
          style={styles.im9}
          onPress={() => props.navigation.navigate('Signup')}>
          {' '}
          Register
        </Text>
      </View>
      <View>
        <Text style={styles.err}>{error}</Text>
      </View>

      <Text style={{fontSize: 17, marginTop: 40, textAlign: 'center'}}>
        Or Log in with
      </Text>

      <View style={styles.socialLoginButton}>
        <Image style={styles.im6} source={require('../images/google.png')} />
        <Text
          onPress={handleLoginWithGoogle}
          style={styles.socialLoginButtonText}>
          Login with Google
        </Text>
      </View>

      <View style={styles.socialLoginButton}>
        <Image style={styles.im6} source={require('../images/apple.png')} />
        <Text
          onPress={handleLoginWithApple}
          style={styles.socialLoginButtonText}>
          Login with Apple
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: '#fff',
    flex: 1,
  },
  err: {
    marginLeft: 2,
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
    paddingLeft: 60,
    paddingRight: 30,
  },
  sectionstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  input3: {
    marginTop: 15,
    fontSize: 17,
    paddingLeft: 63,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
  },
  im9: {
    textAlign: 'right',
    marginTop: 17,
    fontSize: 17,
    marginLeft: 25,
  
  },
  im3: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 40,
    right: 300,
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
  socialLoginButton: {
    alignContent: 'center',
    position: 'relative',
    marginTop: 30,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
  },
  socialLoginButtonText: {
    textAlign: 'center',
    padding: 15,
  },
  im2: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 26,
    left: 10,
  },
  im6: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 12,
    left: 10,
  },
});

export default GenerateOTP;
