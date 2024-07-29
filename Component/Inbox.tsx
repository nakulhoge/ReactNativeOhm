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
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Inbox = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ccc',
              borderRadius: 40,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginLeft: 15,
                color: '#231F20',
              }}>
              Staff Nurse
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 0,
                marginLeft: 18,
                color: '#231F20',
              }}>
              Ozanera Hospital
            </Text>
          </View>
          <View style={{marginLeft: 120}}>
            <Text style={{fontSize: 10}}>Today </Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#2DA08E',
                marginLeft: 5,
                borderRadius: 40,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ccc',
              borderRadius: 40,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginLeft: 15,
                color: '#231F20',
              }}>
              Orthopedic Doctor
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 0,
                marginLeft: 18,
                color: '#231F20',
              }}>
              Bharati Hospital
            </Text>
          </View>

          <View style={{marginLeft: 50}}>
            <Text style={{fontSize: 10}}>Today </Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#2DA08E',
                marginLeft: 5,
                borderRadius: 40,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ccc',
              borderRadius: 40,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginLeft: 15,
                color: '#231F20',
              }}>
              Staff Nurse
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 0,
                marginLeft: 18,
                color: '#231F20',
              }}>
              Ozanera Hospital
            </Text>
          </View>
          <View style={{marginLeft: 110}}>
            <Text style={{fontSize: 10}}>Today </Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#2DA08E',
                marginLeft: 5,
                borderRadius: 40,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ccc',
              borderRadius: 40,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginLeft: 15,
                color: '#231F20',
              }}>
              Staff Nurse
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 0,
                marginLeft: 18,
                color: '#231F20',
              }}>
              Ozanera Hospital
            </Text>
          </View>
          <View style={{marginLeft: 110}}>
            <Text style={{fontSize: 10}}>Today </Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#2DA08E',
                marginLeft: 5,
                borderRadius: 40,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}>1</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          marginTop: 160,
          marginLeft: 10,
        }}>
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
    padding: 28,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Inbox;
