import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSelect from 'react-native-multiple-select';
import {useTokenContext} from './TokenContext';

const EditProfile = props => {
  const {token} = useTokenContext();
  console.log(token);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [preferredLocation, setPreferredLocation] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [gender, setGender] = useState('');
  const [marit, setmarit] = useState('');

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailID: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    permanentAddress: '',
  });
  const items = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ];

  const items1 = [
    {label: 'Single', value: 'Single'},
    {label: 'Married', value: 'Married'},
    {label: 'Divorced', value: 'Divorced'},
  ];

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
  }, []);

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
        lastName: data.data.lastName || '',
        mobileNumber: data.data.mobileNumber || '',
        emailID: data.data.emailID || '',
        gender: data.data.gender || '',
        dateOfBirth: data.data.dateOfBirth || '',
        maritalStatus: data.data.marital_status || '',
        currentLocation: data.data.currentLocation || '',
        preferredLocation: data.data.preferredLocation || '',
        permanentAddress: data.data.permanentAddress || '',
      });
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
    fetchDataWithToken();
  }, []);

  const handleFirstNameChange = text => {
    setDetails(prevDetails => ({...prevDetails, firstName: text}));
  };

  const handleLastNameChange = text => {
    setDetails(prevDetails => ({...prevDetails, lastName: text}));
  };

  const handleMobileNumberChange = text => {
    setDetails(prevDetails => ({...prevDetails, mobileNumber: text}));
  };

  const handleEmailIDChange = text => {
    setDetails(prevDetails => ({...prevDetails, emailID: text}));
  };

  const handleDateOfBirthChange = text => {
    setDetails(prevDetails => ({...prevDetails, dateOfBirth: text}));
  };

  const handleCurrentLocationChange = value => {
    setCurrentLocation(value);
  };

  const handlePreferredLocationChange = items => {
    setPreferredLocation(items);
  };

  const handlePermanentAddressChange = text => {
    setDetails(prevDetails => ({...prevDetails, permanentAddress: text}));
  };

  const nextpagebutton = async () => {
    try {
      const apiUrl =
        'https://www.ohmjobs.com/JobSeekars/UpdateJobSeePersonalInformation';

      const formData = new FormData();
      formData.append('FirstName', details.firstName);
      formData.append('LastName', details.lastName);
      formData.append('mobileNumber', details.mobileNumber);
      formData.append('Gender', gender);

      formData.append('DateOfBirth', details.dateOfBirth);
      formData.append('marital_status', marit);
      formData.append('currentLocation', currentLocation);
      formData.append('preferedLocation', preferredLocation);
      formData.append('workPermitForUSA', ''); // You need to replace this with the actual value

      const token = 'your_bearer_token'; // Replace 'your_bearer_token' with your actual Bearer token

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        console.error(
          'Failed to fetch data. Server returned:',
          response.status,
        );
        return;
      }

      const data = await response.json();

      if (data) {
        props.navigation.navigate('Edit_profile_first');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 15,
            color: '#242435',
            marginTop: 10,
            fontWeight: '700',
          }}>
          Personal Information
        </Text>

        <Text style={{fontSize: 13, color: '#242435', marginTop: 20}}>
          First Name
        </Text>
        <TextInput
          style={styles.input3}
          onChangeText={handleFirstNameChange}
          placeholder="Enter Name"
          value={details.firstName}
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Last Name
        </Text>
        <TextInput
          style={styles.input3}
          onChangeText={handleLastNameChange}
          placeholder="Enter Names"
          value={details.lastName}
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Enter phone number
        </Text>
        <TextInput
          style={styles.input3}
          onChangeText={handleMobileNumberChange}
          placeholder="Phone number"
          keyboardType="numeric"
          value={details.mobileNumber}
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Email
        </Text>
        <TextInput
          style={styles.input3}
          placeholder="Email"
          value={details.emailID}
          onChangeText={handleEmailIDChange}
        />

        <View>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Gender
          </Text>
          <DropDownPicker
            items={items}
            dropDownDirection="TOP"
            style={styles.dropdown}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={gender}
            setValue={val => setGender(val)}
            maxHeight={200}
            placeholder="Select"
          />
        </View>

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleDateOfBirthChange}
          placeholder="DD/MM/YYY"
          keyboardType="numeric"
          value={details.dateOfBirth}
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Marital Status
        </Text>
        <DropDownPicker
          items={items1}
          dropDownDirection="TOP"
          open={isOpen1}
          style={styles.dropdown}
          setOpen={() => setIsOpen1(!isOpen1)}
          value={marit}
          setValue={val => setmarit(val)}
          maxHeight={200}
          placeholder="Select"
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Current Location
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
          setValue={val => handleCurrentLocationChange(val)}
          listMode="SCROLLVIEW"
          maxHeight={400}
          autoScroll
          placeholder="Current Location "
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Preferred Location
        </Text>
        <MultiSelect
          items={cities.map(city => ({
            id: city.l_CityID,
            name: city.name,
          }))}
          uniqueKey="id"
          onSelectedItemsChange={handlePreferredLocationChange}
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
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        />

        <TextInput
          style={styles.input2}
          placeholder="Permanent Address"
          onChangeText={handlePermanentAddressChange}
        />

        <TouchableHighlight onPress={nextpagebutton} style={styles.submit}>
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

  input2: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    zIndex: -9999,
    padding: 10,
  },

  input3: {
    height: 40,
    marginTop: 5,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    zIndex: -9999,
    padding: 10,
    backgroundColor: '#F2F2F2',
  },

  dropdown: {
    marginTop: 10,
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

export default EditProfile;
