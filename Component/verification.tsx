import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableHighlight,
} from 'react-native';

const Verification = props => {
  const {eemail} = props.route.params;

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.row}>
          <Text style={{fontSize: 24, color: '#242435'}}>OTP Verification</Text>
          <Text
            style={{
              fontSize: 17,
              color: '#242435',
              marginTop: 10,
              lineHeight: 24,
              marginBottom: 20,
            }}>
            We've just sent a unique One-Time Password (OTP) to your registered
            email {eemail}.
          </Text>

          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            keyboardType="numeric"
            maxLength={1}
            placeholder=""
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            keyboardType="numeric"
            maxLength={1}
            placeholder=""
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            maxLength={1}
            keyboardType="numeric"
            placeholder=""
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            maxLength={6}
            keyboardType="numeric"
            placeholder="Enter OTP"
          />
        </View>
      </SafeAreaView>
      <Text style={styles.buttonStyle}></Text>

      <TouchableHighlight
        onPress={() => props.navigation.navigate('Signup')}
        style={styles.submit}>
        <Text style={styles.submitineer}>Verify</Text>
      </TouchableHighlight>

      <Text style={{fontSize: 13, color: '#242435', marginTop: 16}}>
        Didn’t get OTP ?                           Resend OTP in 00:30 sec..
      </Text>
    </View>
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
    width: 340,
    marginTop: 30,
    marginRight: 20,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,

    padding: 10,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  buttonStyle: {
    marginTop: 15,
    marginBottom: 16,
  },
  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 10,
    marginTop: 0,
    fontSize: 17,
    padding: 15,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Verification;
