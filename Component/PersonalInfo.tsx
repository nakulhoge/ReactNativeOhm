// get data from the signup page and show the values  lastname ,firstname and email

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Fontisto from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from 'rn-country-picker';
import {useTokenContext} from './TokenContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MultiSelect from 'react-native-multiple-select';

const PersonalInfo = props => {
  const {ffirstName, eemail, mob} = props.route.params;
  const {token} = useTokenContext();
  const [firstName, setFirstName] = useState(ffirstName || '');
  const [lastname, setlastname] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(mob || '');
  const [email, setEmail] = useState(eemail || '');
  const [currentLocation, setCurrentLocation] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [cities, setCities] = useState([]);
 const [workPermitForUSA,setworkPermitForUSA]=useState("yes")

  const [errors, setErrors] = useState({
    firstName: '',
    lastname,
    gender: '',
    dob: '',
    maritalStatus: '',
    phoneNumber: '',
    email: '',
    currentLocation: '',
    preferredLocation: '',
  });
  const MAX_PHONE_NUMBER_LENGTH = 12;

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);

    const formattedDate = `${currentDate.getFullYear()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}`;

    setDob(formattedDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const validateFields = () => {
    let y = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let valid = true;
    const newErrors = {...errors};

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }
    if (!lastname) {
      newErrors.lastname = 'First Name is required';
      valid = false;
    } else {
      newErrors.lastname = '';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
      valid = false;
    } else {
      newErrors.gender = '';
    }

    if (!dob) {
      newErrors.dob = 'Date of Birth is required';
      valid = false;
    } else {
      newErrors.dob = '';
    }

    if (!maritalStatus) {
      newErrors.maritalStatus = 'Marital Status is required';
      valid = false;
    } else {
      newErrors.maritalStatus = '';
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      valid = false;
    } else {
      newErrors.phoneNumber = '';
    }

    if (!email) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    } else if (!y.test(email)) {
      valid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    if (!currentLocation) {
      newErrors.currentLocation = 'Current Location is required';
      valid = false;
    } else {
      newErrors.currentLocation = '';
    }

    if (!preferredLocation) {
      newErrors.preferredLocation = 'Preferred Location is required';
      valid = false;
    } else {
      newErrors.preferredLocation = '';
    }

    setErrors(newErrors);

    return valid;
  };
  const handleNextPress = async () => {
    const isValid = validateFields();

    if (!isValid) {
      console.warn('Form validation failed. Please check the entered data.');
      return;
    }

    const updateUrl =
      'https://www.ohmjobs.com/JobSeekars/UpdateJobSeePersonalInformation';

    const formData = new FormData();
    formData.append('FirstName', firstName);
    formData.append('LastName', lastname);
    formData.append('mobileNumber', phoneNumber);
    formData.append('Gender', gender);
    formData.append('DateOfBirth', dob);
    formData.append('marital_status', maritalStatus);
    formData.append('currentLocation', currentLocation);
    formData.append('preferedLocation', preferredLocation);
    formData.append('workPermitForUSA', workPermitForUSA);

    try {

      const response = await fetch(updateUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` // Include bearer token in headers
        },
        body: formData,
      });

      if (!response.ok) {
        console.warn(
          'Failed to update personal information. Server returned:',
          response.status,
        );
        return;
      }

      const data = await response.json();
      
      if (data) {
        props.navigation.navigate('Qualification');
      }
    } catch (error) {
      console.error('Error during personal information update:', error);
    }
  };

  
  // get city

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          'https://www.ohmjobs.com/common/get-city',
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

        if (data.cityList) {
          setCities(data.cityList);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
    handleNextPress();
  }, []);

  const handleLocationClick = () => {
    console.log('Location clicked');
  };
  const items = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'Other'},
  ];

  const items1 = [
    {label: 'Single', value: 'single/Unmarried'},
    {label: 'Married', value: 'married'},
    {label: 'Divorced', value: 'Divorced'},
    {label: 'Widowed', value: 'Widowed'},
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
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
              30%{' '}
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
              width: '30%',
              borderRadius: 5,
              position: 'absolute',
            }}></View>
        </View>

        <SafeAreaView>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Enter Name
          </Text>

          <TextInput
            value={ffirstName}
            style={styles.input}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          {errors.firstName && (
            <Text style={{color: '#ff0000'}}>please enter name</Text>
          )}
          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Last Name
          </Text>

          <TextInput
            value={lastname}
            style={styles.input}
            onChangeText={setlastname}
            placeholder="Last Name"
          />
          {errors.lastname && (
            <Text style={{color: '#ff0000'}}>please enter name</Text>
          )}
          <DropDownPicker
            items={items}
            dropDownDirection="TOP"
            open={isOpen}
            style={styles.dropdown}
            setOpen={() => setIsOpen(!isOpen)}
            value={gender}
            setValue={val => setGender(val)}
            maxHeight={200}
            placeholder="Gender"
          />
          {errors.gender && (
            <Text style={{color: '#ff0000'}}>please select gender</Text>
          )}

          <Text
            style={{fontSize: 13, color: '#242435', flex: 1, marginTop: 30}}>
            Date Of Birth <Text style={{color: '#ff0000'}}>*</Text>
          </Text>
          <View style={styles.sectionstyle}>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                format={'YYYY-MM-DD'}
                display="default"
                onChange={onDateChange}
              />
            )}

            <TextInput
              style={styles.input3}
              placeholder="DD/MM/YYYY"
              value={dob}
            />

            <Fontisto
              onPress={showDatepicker}
              name="calendar-month"
              size={24}
              style={styles.im2}
            />
          </View>

          {errors.dob && (
            <Text
              style={{
                color: '#ff0000',

                left: 0,
                top: 0,
                marginBottom: 0,
              }}>
              please select DOB
            </Text>
          )}

          <DropDownPicker
            items={items1}
            style={{marginTop: 30}}
            dropDownDirection="TOP"
            open={isOpen1}
            setOpen={() => setIsOpen1(!isOpen1)}
            value={maritalStatus}
            setValue={val => setMaritalStatus(val)}
            maxHeight={200}
            autoScroll
            placeholder="Marital Status"
          />
          {errors.maritalStatus && (
            <Text style={{color: '#ff0000'}}>please select marital status</Text>
          )}

          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Enter Phone Number <Text style={{color: '#ff0000'}}>*</Text>
          </Text>
          <View style={styles.sectionstyle}>
            <TextInput
              style={styles.input2}
              value={mob}
              onChangeText={setPhoneNumber}
              placeholder="+91 34667789"
              maxLength={MAX_PHONE_NUMBER_LENGTH}
            />
            <FontAwesome name="phone" size={24} style={styles.im3} />
          </View>

          {errors.phoneNumber && (
            <Text style={{color: '#ff0000'}}>please Enter number</Text>
          )}

          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Email <Text style={{color: '#ff0000'}}>*</Text>
          </Text>

          <View style={styles.sectionstyle}>
            <TextInput
              value={eemail}
              style={styles.input2}
              onChangeText={setEmail}
              placeholder="abc@gmail.com"
            />

            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              style={styles.im3}
            />
          </View>

          {errors.email && (
            <Text style={{color: '#ff0000'}}>please Enter email</Text>
          )}

          {/* add location icon */}
          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Current Location <Text style={{color: '#ff0000'}}>*</Text>
          </Text>
          <DropDownPicker
            items={cities.map(city => ({
              label: city.name,
              value: city.l_CityID,
            }))}
            style={{marginTop: 10}}
            dropDownDirection="TOP"
            open={isOpen11}
            setOpen={() => setIsOpen11(!isOpen11)}
            value={currentLocation}
            setValue={val => setCurrentLocation(val)}
            listMode="SCROLLVIEW"
            maxHeight={400}
            autoScroll
            placeholder="Current Location "
          />

          <TouchableOpacity onPress={handleLocationClick}></TouchableOpacity>
          {errors.currentLocation && (
            <Text style={{color: '#ff0000'}}>please Enter currentLocation</Text>
          )}

          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            preferred Location <Text style={{color: '#ff0000'}}>*</Text>
          </Text>
          <MultiSelect
            items={cities.map(city => ({
              id: city.l_CityID,
              name: city.name,
            }))}
            uniqueKey="id"
            onSelectedItemsChange={items => setPreferredLocation(items)}
            selectedItems={preferredLocation}
            selectText="Select Preferred Locations"
            searchInputPlaceholderText="Search Locations..."
            onChangeInput={text => console.log(text)}
            tagRemoveIconColor="#000000"
            tagBorderColor="#000000"
            tagTextColor="#000000"
            selectedItemTextColor="#000000"
            selectedItemIconColor="#000000"
            itemTextColor="#000000"
            displayKey="name"
            searchInputStyle={{color: '#000000'}}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
          />

          {errors.preferredLocation && (
            <Text style={{color: '#ff0000'}}>
              please Enter preferredLocation
            </Text>
          )}
        </SafeAreaView>

        <Text style={styles.buttonStyle}></Text>

        <TouchableHighlight onPress={handleNextPress} style={styles.submit}>
          <Text style={styles.submitineer}>Next</Text>
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
    marginTop: 10,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    zIndex: -9999,
    padding: 10,
  },
  input3: {
    height: 40,
    marginTop: 10,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  buttonStyle: {
    marginTop: 30,
  },
  dropdown: {
    marginTop: 30,
    borderWidth: 1,
    color: '#374957',
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
    fontSize: 17,
  },
  input2: {
    height: 40,
    marginTop: 10,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    flex: 1,
    position: 'relative',
    width: '100%',
    padding: 10,
  },
  dropsec: {
    borderWidth: 1,
    color: '#374957',
  },
  sectionstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  im2: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 17,
    right: 10,
  },

  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  pickerStyle: {
    height: 54,
    width: '100%',
    marginVertical: 10,
    borderColor: '#303030',
    alignItems: 'flex-start',
    marginHorizontal: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    color: '#000',
  },
  selectedCountryTextStyle: {
    paddingLeft: 215,
    color: '#000',
    textAlign: 'right',
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    flex: 1,
  },

  im3: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 17,
    right: 10,
  },
});

export default PersonalInfo;
