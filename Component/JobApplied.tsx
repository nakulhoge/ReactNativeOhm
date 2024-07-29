/// dummy code

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
import Fontisto from 'react-native-vector-icons/Fontisto';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const logo = require('../images/check_circle.png');
const JobDetail = ({route, props}) => {
 const {JobDetail} = route.params;

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1}}></View>
        </View>

        <View style={styles.boxmain}>
          <View style={{flexDirection: 'row', flex: 1, position: 'relative'}}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.vlogo}
                source={{uri: jobDetails.logo}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 17,
                  justifyContent: 'flex-end',
                  color: '#242435',
                  textAlign: 'center',
                  marginLeft: 15,
                }}>
                {jobDetails.jobTitle}
                <Text>
                  {' '}
                  <Image source={logo} width={24} height={26} />{' '}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#242435',
                  marginTop: 5,
                  marginLeft: 18,
                }}>
                Lets find relevant for you
              </Text>
            </View>
          </View>

          <Text style={{fontSize: 13, color: '#242435', marginTop: 15}}>
            {' '}
            <Fontisto
              name="map-marker-alt"
              size={16}
              style={{color: '#2DA08E'}}
            />{' '}
            <Text style={{marginRight: 20}}> {jobDetails.location} </Text>
          </Text>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 5}}>
            Experince : {jobDetails.minExperience}-{jobDetails.maxExperience}{' '}
            years
          </Text>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 5}}>
            Posted Date : {jobDetails.createdDate}
          </Text>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 5}}>
            Key Skills : {jobDetails.keySkill}
          </Text>

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  backgroundColor: '#F2F2F2',
                  marginTop: 10,
                  textAlign: 'justify',

                  padding: 10,
                  marginRight: 10,
                  borderRadius: 4,
                }}>
                Full Time{' '}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'justify',
                  marginTop: 10,
                  fontSize: 15,
                  backgroundColor: '#F2F2F2',
                  padding: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}>
                {' '}
                Urgent{' '}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'justify',
                  marginTop: 10,
                  fontSize: 15,
                  backgroundColor: '#F2F2F2',
                  padding: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}>
                {' '}
                Internship{' '}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 13, color: '#2DA08E', marginTop: 20}}>
                Salary : {jobDetails.minSal_thausand}-
                {jobDetails.maxSal_thausand} k
              </Text>
            </View>
            <View style={{flex: 1, top: 10, padding: 2}}>
              <TouchableHighlight>
                <Text
                  onPress={() => props.navigation.navigate('Register')}
                  style={{
                    color: '#231F20',
                    marginLeft: 10,
                    marginTop: 6,
                    textAlign: 'right',
                  }}>
                  Cancel Request
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: '#242435',
            marginTop: 0,
            textAlign: 'center',
          }}>
          Your request has successfully delivered to company, please wait for
          Company Feedback!
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 10, marginLeft: 16}}>
        <View style={{marginRight: 10}}>
          <Text
            onPress={() => props.navigation.navigate('RecentJob')}
            style={{fontSize: 17, marginLeft: 11, marginTop: 20}}>
            {' '}
            <Ionicons name="home-outline" size={24} />{' '}
          </Text>

          <Text
            onPress={() => props.navigation.navigate('RecentJob')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 5,
            }}>
            Home
          </Text>
        </View>
        <View>
          <Text
            onPress={() => props.navigation.navigate('Findjob')}
            style={{
              fontSize: 17,
              marginLeft: 16,
              marginTop: 20,
              marginRight: 10,
            }}>
            {' '}
            <Ionicons name="bag-outline" size={24} />{' '}
          </Text>

          <Text
            onPress={() => props.navigation.navigate('Findjob')}
            style={{
              textAlign: 'justify',
              marginTop: 0,
              fontSize: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 5,
              marginRight: 10,
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
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 140,
  },
  logo: {
    width: 90,
    height: 12.92,
    alignItems: 'flex-start',
    left: 20,
  },
  vlogo: {
    height: 80,
    width: 90,
  },

  boxmain: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 10,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },
  boxmain2: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(45, 160, 142, 0.12)',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default JobDetail;
