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
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Register = props => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 13,
                color: '#242435',
                marginTop: 250,
                lineHeight: 20,
                marginBottom: 10,
                textAlign: 'center',
              }}>
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web{' '}
            </Text>
          </View>
        </SafeAreaView>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, top: 10, padding: 2}}>
            <TouchableHighlight style={styles.submit}>
              <Text style={styles.submitineer}>Register</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, top: 10, padding: 2}}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate('Editprofile1')}
              style={styles.submit}>
              <Text style={styles.submitineer}>Sign In</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View style={{marginRight: 10}}>
          <Text
            onPress={() => props.navigation.navigate('Signup')}
            style={{fontSize: 17, marginLeft: 11, marginTop: 20}}>
            {' '}
            <Ionicons name="home-outline" size={24} />{' '}
          </Text>

          <Text
            onPress={() => props.navigation.navigate('Signup')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 5,
            }}>
            {' '}
            Home{' '}
          </Text>
        </View>
        <View>
          <Text
            style={{marginRight: 10}}
            onPress={() => props.navigation.navigate('Findjob')}
            style={{fontSize: 17, marginLeft: 16, marginTop: 20}}>
            {' '}
            <Ionicons name="bag-outline" size={24} />{' '}
          </Text>

          <Text
            style={{marginRight: 10}}
            onPress={() => props.navigation.navigate('Findjob')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 5,
            }}>
            {' '}
            Find Job{' '}
          </Text>
        </View>
        <View>
          <Text
            onPress={() => props.navigation.navigate('JobApplied')}
            style={{fontSize: 17, marginLeft: 19, marginTop: 20}}>
            {' '}
            <MaterialCommunityIcons
              name="application-cog-outline"
              size={24}
            />{' '}
          </Text>

          <Text
            onPress={() => props.navigation.navigate('JobApplied')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              marginRight: 10,
              borderRadius: 5,
            }}>
            {' '}
            Job Applied{' '}
          </Text>
        </View>
        <View>
          <Text
            onPress={() => props.navigation.navigate('Inbox')}
            style={{fontSize: 17, marginLeft: 11, marginTop: 20}}>
            {' '}
            <MaterialCommunityIcons name="inbox-outline" size={24} />{' '}
          </Text>

          <Text
            onPress={() => props.navigation.navigate('Inbox')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              marginRight: 10,
              borderRadius: 5,
            }}>
            {' '}
            Inbox{' '}
          </Text>
        </View>
        <View>
          <Text
            onPress={() => props.navigation.navigate('Profile')}
            style={{fontSize: 17, marginLeft: 16, marginTop: 20}}>
            {' '}
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
            />{' '}
          </Text>

          <Text
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              marginRight: 10,
              borderRadius: 5,
            }}>
            {' '}
            Profile{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 130,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
  },

  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 25,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Register;
