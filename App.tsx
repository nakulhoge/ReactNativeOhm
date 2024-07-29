import React from 'react'
import { Button, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Genarateotp from './Component/Genarateotp'
import verification from './Component/verification'
import Signup from './Component/Signup'
import PersonalInfo from './Component/PersonalInfo'
import Qualification from './Component/Qualification'
import Experience from './Component/Experience'
import Editprofile1 from './Component/Editprofile1'
import Edit_profile_first from './Component/Edit_profile_first';
import Edit_profile_second from './Component/Edit_profile_second';
import RecentJob from './Component/RecentJob';
import Findjob from './Component/Findjob';
import JobDetail from './Component/JobDetail';
import JobApplied from './Component/JobApplied';
import Register from './Component/Register';
import Profile from './Component/Profile';
import ChangePass from './Component/ChangePass';
import Accountset from './Component/Accountset';
import Inbox from './Component/Inbox';
import { TokenProvider } from './Component/TokenContext'






const Stack=createNativeStackNavigator()
const App = () => {

  
  return (
    <TokenProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{  headerStyle: { backgroundColor: '#fff',  }, headerTitleStyle:{ fontSize:0, color:'#fff'}, headerShadowVisible: false }} name="Genarateotp" component={Genarateotp} />
    <Stack.Screen  options={{ headerTitleStyle:{ fontSize:0, color:'#fff'}, headerShadowVisible: false  } } name="verification" component={verification} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:0, color:'#fff'}, headerShadowVisible: false }}  name="Signup" component={Signup} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerShadowVisible: false,title: 'Personal Information' }}  name="PersonalInfo" component={PersonalInfo} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerShadowVisible: false,title: 'Qualification' }}  name="Qualification" component={Qualification} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerShadowVisible: false,title: 'Experience' }}  name="Experience" component={Experience} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Edit Profile' }}  name="Editprofile1" component={Editprofile1} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Edit Profile' }}  name="Edit_profile_first" component={Edit_profile_first} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Edit Profile' }}  name="Edit_profile_second" component={Edit_profile_second} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:0, color:'#fff'}, headerStyle: {backgroundColor: '#Fff'}, headerShadowVisible: false }}  name="RecentJob" component={RecentJob} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerStyle: {backgroundColor: '#fff'}, headerShadowVisible: false,title: 'Find Your Job' }}  name="Findjob" component={Findjob} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerStyle: {backgroundColor: '#fff'}, headerShadowVisible: false,title: 'Job Detail' }}  name="JobDetail" component={JobDetail} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435'}, headerStyle: {backgroundColor: '#fff'}, headerShadowVisible: false,title: 'Job Applied' }}  name="JobApplied" component={JobApplied} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:0, color:'#fff'}, headerStyle: {backgroundColor: '#fff'}, headerShadowVisible: false }}  name="Register" component={Register} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435' }, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Profile'  }}  name="Profile" component={Profile} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435' }, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Change Password'  }}  name="ChangePass" component={ChangePass} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435' }, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Account Setting'  }}  name="Accountset" component={Accountset} />
    <Stack.Screen options={{ headerTitleStyle:{ fontSize:24, color:'#242435' }, headerStyle: {backgroundColor: '#F2F2F2'}, headerShadowVisible: false,title: 'Inbox'  }}  name="Inbox" component={Inbox} />
   
     </Stack.Navigator>
  </NavigationContainer></TokenProvider>
  )
};




export default App