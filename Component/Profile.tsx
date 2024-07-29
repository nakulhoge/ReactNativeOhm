import React, {useEffect, useState} from 'react';
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

import DropDownPicker from 'react-native-dropdown-picker';
const photo = require('../images/photo.png');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTokenContext} from './TokenContext';

const Profile = props => {
  const {token} = useTokenContext();

  const [details, setDetails] = useState({
    firstName: '',
    emailID: '',
  });

  const fetchDataWithToken = async () => {
    try {
      const apiUrl =
        'https://www.ohmjobs.com/job-seeker/getPersonalInformation';

      const requestData = {
        key1: 'value1',
        key2: 'value2',
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        console.error(
          'Failed to fetch data. Server returned:',
          response.status,
        );
        return;
      }

      const data = await response.json();

      setDetails({
        firstName: data.data.firstName || '',
        emailID: data.data.emailID || '',
      });
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
    fetchDataWithToken();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{backgroundColor: '#F2F2F2', paddingBottom: 15}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginTop: 15,
                  marginLeft: 15,
                }}>
                <Image source={photo} />
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{fontSize: 22, marginLeft: 14}}>
                  {details.firstName}
                </Text>
                <Text
                  style={{fontSize: 13, marginTop: 0, marginLeft: 18}}>
                    {details.emailID}
                  </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  right: 34,
                  width: 50,
                  height: 50,
                  backgroundColor: '#2DA08E',
                  borderRadius: 40,
                  marginLeft: 80,
                  marginTop: 55,
                }}>
                <MaterialCommunityIcons
                  name="camera-plus"
                  size={24}
                  style={{color: '#fff', marginTop: 11, marginLeft: 12}}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{marginRight: 20, marginLeft: 20, marginTop: 20}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 13, color: '#242435', marginTop: 10}}>
                Profile Completed
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: 'right',
                  marginTop: 10,
                  fontSize: 13,
                  color: '#2DA08E',
                }}>
                {' '}
                60%{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#BBE8E1',
              height: 7,
              width: '100%',
              borderRadius: 5,
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: '#2DA0BE',
                height: 7,
                width: '60%',
                borderRadius: 5,
                position: 'absolute',
              }}></View>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 15,
              marginTop: 25,
              marginLeft: 30,
              color: '#231F20',
            }}>
            Options
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(36, 36, 53, 0.12)',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text style={{color: '#231F20', marginLeft: 12}}></Text>

          <Text style={{fontSize: 17, marginLeft: 16, marginTop: 5}}>
            {' '}
            <Feather name="edit-2" size={24} />{' '}
            <Text
              onPress={() => props.navigation.navigate('Editprofile1')}
              style={{paddingLeft: 25, color: '#231F20'}}>
              {' '}
              Edit Profile{' '}
            </Text>
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(36, 36, 53, 0.12)',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text style={{fontSize: 17, marginLeft: 16, marginTop: 5}}>
            {' '}
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
            />{' '}
            <Text
              onPress={() => props.navigation.navigate('Accountset')}
              style={{paddingLeft: 25, color: '#231F20'}}>
              {' '}
              Account Setting{' '}
            </Text>
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(36, 36, 53, 0.12)',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text
            onPress={() => props.navigation.navigate('Profile')}
            style={{fontSize: 17, marginLeft: 16, marginTop: 5}}>
            {' '}
            <MaterialCommunityIcons name="lock-outline" size={24} />{' '}
            <Text
              onPress={() => props.navigation.navigate('ChangePass')}
              style={{paddingLeft: 25, color: '#231F20'}}>
              {' '}
              Change Password{' '}
            </Text>
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(36, 36, 53, 0.12)',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text style={{fontSize: 17, marginLeft: 16, marginTop: 5}}>
            {' '}
            <AntDesign name="contacts" size={24} />{' '}
            <Text style={{paddingLeft: 25, color: '#231F20'}}> Contact Us</Text>
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(36, 36, 53, 0.12)',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text style={{fontSize: 17, marginLeft: 16, marginTop: 5}}>
            {' '}
            <Octicons name="sign-out" size={24} />{' '}
            <Text style={{paddingLeft: 25, color: '#231F20'}}> Sign Out</Text>
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 10,marginLeft:10}}>
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
    backgroundColor: '#fff',
    flex: 1,
  },
  boxmain: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
  },
});

export default Profile;
