import React, {useState, useEffect} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTokenContext} from './TokenContext';
const logoo = require('../images/Logo.jpg');

const RecentJob = props => {
  const {token} = useTokenContext();
  const [jobData, setJobData] = useState([]);
  const [jobCategory, setJobCategory] = useState('');
  const [items1, setItems1] = useState([]);

  const [open1, setopen1] = useState(false);

   const sjcsdc = [
    {label: 'DOCTORS', value: 'DOCTORS'},
    {label: 'NURSES', value: 'NURSES'},
    {label: 'TECHNICIANS/PHARMACY/DIETICIAN', value: 'TECHNICIANS/PHARMACY/DIETICIAN'},
    {label: 'ADMIN/MANAGERS', value: 'ADMIN/MANAGERS'},
    
  ];
//apply for job save 
const applyForJob = async () => {
  try {
    const apiUrl = 'https://www.ohmjobs.com/common/apply-for-job-save';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIxMjI5NzYiLCJsb2dpbl9uYW1lIjoidGVzdHNzIiwibG9naW5fZW1haWwiOiJ5dXZyYWpyYW5kaXZlODdAZ21haWwuY29tIiwidXNlclR5cGUiOiJKb2JTZWVrYXIiLCJKb2JDYXRlZ29yeUlEIjoiMiIsImRlcGFydG1lbnRJRCI6IjEiLCJob3NwaXRhbFVzZXJUeXBlIjoiIiwibmJmIjoxNjU0MTA0Mzg0LCJleHAiOjE2NTQxOTA3ODQsImlhdCI6MTY1NDEwNDM4NH0.fZWXK0hob_iPBFB_hPALhi9OySX0Gf3iMOYSDZae2ws';

    const formData = new FormData();
    formData.append('Mst_JobPostingID', '401');

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    
    if (!response.ok) {
      console.error('Failed to apply for job. Server returned:', response.status);
      console.error('Error details:', data);
      return;
    }

    // Handle successful response
    // Do something with the response data if needed
  } catch (error) {
    console.error('Error while applying for job:', error.message);
  }
};

// Call the function to make the request



  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await fetch(
          'http://www.ohmjobs.com/common/get-categories',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          },
        );

        const text = await response.text();

        if (!text) {
          console.error('Empty response from the API');
          return;
        }

        const data = JSON.parse(text);

        if (data.categoryrList) {
          const updatedItems1 = data.categoryrList.map(category => ({
            label: category.name,
            value: category.mst_Job_CategoryID.toString(),
          }));

          setItems1(updatedItems1);
        }
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    };

    fetchJobCategories();
  }, []);

  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await fetch(
          'http://www.ohmjobs.com/home/get-job-posting',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          },
        );

        const json = await response.json();

        if (
          !json ||
          !json.data ||
          !json.data.classifiedResult ||
          !Array.isArray(json.data.classifiedResult)
        ) {
          console.error('Invalid or empty response from the API');
          return;
        }

        setJobData(json.data.classifiedResult);
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    };

    fetchJobCategories();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View>
            {/* <Image style={styles.loogo} source={logoo} /> */}
          </View>

          <View style={styles.sectionstyle}>
            {/* <TextInput
              placeholder="Find jobs near you"
              style={{
                justifyContent: 'flex-end',
                borderRadius: 10,
                borderColor: 'rgba(36, 36, 53, 0.12)',
                borderWidth: 1,
                width: 225,
                paddingLeft: 40,
                height: 36,
                position: 'relative',
                marginLeft: 40,
              }}
              onChangeText={text => setinput(text)}
              value={input}
            />

            <Fontisto
              name="search"
              size={24}
              style={styles.im2}
              onPress={fetchJobs}
            /> */}
          </View>
        </View>
        <View>
          <DropDownPicker
            items={sjcsdc}
            style={{
              marginTop: 20,
              marginBottom: 10,
              backgroundColor: '#F2F2F2',
            }}
            dropDownDirection="BOTTOM"
            open={open1}
            setOpen={() => setopen1(!open1)}
            value={jobCategory}
            setValue={val => setJobCategory(val)}
            maxHeight={200}
            autoScroll
            placeholder="Job Category"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, top: 10, padding: 2, width: 394, height: 100}}>
            <TouchableHighlight style={styles.submit}>
              <Text style={styles.submitineer}>Classified</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, top: 10, padding: 2}}>
            <TouchableHighlight style={styles.submit2}>
              <Text style={styles.submitineer2}>Featured</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, top: 10, padding: 2}}>
            <TouchableHighlight style={styles.submit2}>
              <Text style={styles.submitineer2}>News Paper</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 24, color: '#242435', marginTop: 0}}>
              Recent Jobs{' '}
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
              View all{' '}
            </Text>
          </View>
        </View>

        {jobData.map((data, index) => (
          <View style={styles.boxmain} key={index}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View>
                <Image
                  resizeMode="contain"
                  style={styles.logo}
                  source={{uri: data.logo}}
                />
              </View>
              <View
                style={{
                  position: 'relative',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <Text
                  style={{
                    fontSize: 17,

                    color: '#242435',
                    textAlign: 'center',
                    marginLeft: 15,
                    width: '70%',
                  }}>
                  {data.jobTitle}
                </Text>

                <Text style={{position: 'absolute', left: 210}}>
                  <Feather
                    name="bookmark"
                    size={16}
                    style={{color: '#231F20'}}
                    onPress={applyForJob}
                  />
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
              <Text style={{marginRight: 20}}> {data.location} </Text>
            </Text>
            <Text style={{fontSize: 13, color: '#242435', marginTop: 5}}>
              Experince : {data.minExperience} - {data.maxExperience} years
            </Text>

            <View style={{flexDirection: 'row', marginBottom: 10}}></View>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 11, color: '#2DA08E', marginTop: 20}}>
                  Salary : {data.minSal_thausand} - {data.maxSal_thausand} k
                </Text>
              </View>
              <View style={{flex: 1, top: 10, padding: 2}}>
                <TouchableHighlight style={styles.submit3}>
                  <Text
                    onPress={() =>
                      props.navigation.navigate('JobDetail', {jobDetails: data})
                    }
                    style={styles.submitineer}>
                    View details
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        ))}
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
            Job Applied
          </Text>
        </View>
        <View>
          <Text
            onPress={() => props.navigation.navigate('Inbox')}
            style={{fontSize: 17, marginLeft: 11, marginTop: 20}}>
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
    padding: 25,
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    flex: 1,
    width: 80,
  },
  loogo: {
    width: 90,
    height: 12.92,
    alignItems: 'flex-start',

    marginTop: 10,
  },

  im2: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 5,
    left: 50,
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
    borderRadius: 5,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
  },

  submit2: {
    borderRadius: 5,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
    color: '#231F20',
  },

  submit3: {
    backgroundColor: '#2DA08E',
    borderRadius: 5,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
    width: 125,
    marginLeft: 20,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },

  submitineer2: {
    color: '#000',
    textAlign: 'center',
  },
});

export default RecentJob;
