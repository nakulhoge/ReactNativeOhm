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
import {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTokenContext} from './TokenContext';
import DocumentPicker from 'react-native-document-picker';
import {TouchableOpacity} from 'react-native';
import RNFS from 'react-native-fs';

export default function App(props) {
  const {token} = useTokenContext();

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState();
  const [isOpen3, setIsOpen3] = useState(false);
  const [currentValue3, setCurrentValue3] = useState();
  const [isOpen6, setIsOpen6] = useState(false);
  const [currentValue6, setCurrentValue6] = useState();
  const [isOpen7, setIsOpen7] = useState(false);
  const [currentValue7, setCurrentValue7] = useState();
  const [currentValue8, setCurrentValue8] = useState();
  const [isOpen9, setIsOpen9] = useState(false);
  const [currentValue9, setCurrentValue9] = useState();
  const [currentValue11, setCurrentValue11] = useState();
  const [organization, setorganization] = useState('');
  const [selectedResume, setSelectedResume] = useState('');

  const items = [
    {label: 'Full Time', value: 'FullTime'},
    {label: 'Part Time', value: 'PartTime'},
    {label: 'Contract', value: 'Contract'},
    {label: 'Freelancer', value: 'Freelancer'},
  ];

  const items2 = [
    {label: 'Fresher', value: 'Fresher'},
    {label: '1 Years', value: '1 '},
    {label: '2 Years', value: '2 '},
    {label: '3 Years', value: '3 '},
    {label: '4 Years', value: '4 '},
    {label: '5 Years', value: '5 '},
    {label: '6 Years', value: '6 '},
    {label: '7 Years', value: '7 '},
    {label: '8 Years', value: '8'},
    {label: '9 Years', value: '9 '},
    {label: '10 Years', value: '10 '},
    {label: '11 Years', value: '11 '},
    {label: '12 Years', value: '12 '},
    {label: '13 Years', value: '13 '},
    {label: '14 Years', value: '14 '},
    {label: '15 Years', value: '15 '},
  ];
  const items3 = [
    {label: 'Fresher', value: 'Fresher'},
    {label: '1 Month', value: '1'},
    {label: '2 Month', value: '2'},
    {label: '3 Month', value: '3 '},
    {label: '4 Month', value: '4 '},
    {label: '5 Month', value: '5 '},
    {label: '6 Month', value: '6 '},
    {label: '7 Month', value: '7 '},
    {label: '8 Month', value: '8 '},
    {label: '9 Month', value: '9 '},
    {label: '10 Month', value: '10 '},
    {label: '11 Month', value: '11 '},
    {label: '12 Month', value: '12 '},
    {label: '13 Month', value: '13 '},
    {label: '14 Month', value: '14 '},
    {label: '15 Month', value: '15 '},
  ];
  const items6 = [
    {label: 'YES', value: '1'},
    {label: 'NO', value: '2'},
  ];
  const items7 = [
    {label: 'Hospital', value: 'Hospital'},
    {label: 'Institute', value: 'Institute'},
  ];
  const items9 = [
    {label: 'CLINICAL', value: '1'},
    {label: 'NON CLINICAL', value: '4'},
    {label: 'CLINICAL+ADMIN', value: '5'},
    {label: 'ADMIN', value: '6'},
    {label: 'ACADEMICS', value: '7'},
  ];

  const [details, setDetails] = useState({
    currenctCTC: '',
    designation: '',
    expectedCTC: '',
    funcareaid: '',
    functinalAria: '',
    isPresentEmployer: '',
    jobRole: '',
    jobSummary: '',
    jobtype: '',
    keySkill: '',
    mst_JobRoleID: '',
    mst_JobSeekarExperenceID: '',
    mst_Job_CategoryID: '',
    organisationName: '',
    organisationType: '',
    resumeURl: '',
    totalExperenceMonth: '',
    totalExperenceYear: '',
  });

  const fetchDataWithToken = async () => {
    try {
      const apiUrl = 'https://www.ohmjobs.com/job-seeker/getExperience';

      const requestData = {
        key1: 'value1',
        key2: 'value2',
      };

      const ttoken = token;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ttoken}`,
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
     
      setDetails(data.data[0] || {});
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
    fetchDataWithToken();
  }, []);
  const postdata = async () => {
    try {
      const apiUrl = 'https://www.ohmjobs.com/JobSeekars/AddUpdateExperence';

      const formData = new FormData();
      formData.append('currentCTC', details.currenctCTC);
      formData.append('designation', currentValue11);
      formData.append('expectedCTC', details.expectedCTC);
      formData.append('funcareaid', currentValue9);
      formData.append('functinalAria', details.functinalAria);
      formData.append('isPresentEmployer', currentValue6);
      formData.append('jobRole', details.jobRole);
      formData.append('jobSummary', details.jobSummary);
      formData.append('jobtype', currentValue);
      formData.append('keySkill', details.keySkill);
      formData.append('mst_JobRoleID', details.mst_JobRoleID);
      formData.append('mst_JobSeekarExperenceID', ''); // You need to replace this with the actual value
      formData.append('mst_Job_CategoryID', ''); // You need to replace this with the actual value
      formData.append('organisationName', details.organisationName);
      formData.append('organisationType', currentValue7);
      formData.append('resumeURl', details.resumeURl);
      formData.append('totalExperenceMonth', currentValue3);
      formData.append('totalExperenceYear', currentValue2);
      formData.append('resumeURl', selectedResume);

      const ttoken = token;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${ttoken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        console.error(
          'Failed to update data. Server returned:',
          response.status,
        );
        return;
      }

      const data = await response.json();
     
      if (data) {
        props.navigation.navigate('Profile');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  const handleInputChange = (field, text) => {
    setDetails(prevDetails => ({...prevDetails, [field]: text}));
  };
  // resume select
  const pickDocument = async () => {
    try {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('pickedFile', pickedFile);

      await RNFS.readFile(pickedFile.uri, 'base64').then(data => {
        setSelectedResume(data);
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(error);
        throw err;
      }
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View
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
              width: '100%',
              borderRadius: 5,
              position: 'absolute',
            }}></View>
        </View> */}

        <Text
          style={{
            fontSize: 15,
            color: '#242435',
            marginTop: 10,
            fontWeight: '700',
          }}>
          Experince
        </Text>

        <Text style={{fontSize: 13, color: '#242435', marginTop: 20}}>
          Job Type
        </Text>

        <DropDownPicker
          items={items}
          style={styles.input3}
          dropDownDirection="BOTTOM"
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={val => setCurrentValue(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Part Time"
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Designation
        </Text>

        <TextInput
          style={styles.input3}
          placeholder="Designation"
          onChangeText={text => handleInputChange('designation', text)}
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Total Experince In Year
        </Text>
        <DropDownPicker
          items={items2}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen2}
          setOpen={() => setIsOpen2(!isOpen2)}
          value={currentValue2}
          setValue={val => setCurrentValue2(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="select"
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Total Experince In Month
        </Text>
        <DropDownPicker
          items={items3}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen3}
          setOpen={() => setIsOpen3(!isOpen3)}
          value={currentValue3}
          setValue={val => setCurrentValue3(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="select"
        />
        <View style={{position: 'relative'}}>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            {' '}
            CurrentCTC
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#242435',
              position: 'absolute',
              top: 33,
              left: 10,
              zIndex: 99999,
              marginTop: 30,
            }}>
            {details.currenctCTC}
          </Text>
          <TextInput style={styles.input3} />
        </View>

        <View style={{position: 'relative'}}>
          <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
            Expected CTC
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#242435',
              position: 'absolute',
              top: 33,
              left: 10,
              zIndex: 99999,
              marginTop: 30,
            }}>
            {details.expectedCTC}
          </Text>
          <TextInput style={styles.input3} />
        </View>

        {/* 
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
         
        </Text>
        <TextInput
          style={styles.input3}
          placeholder="null"
          value={details.expectedCTC}
        /> */}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Present Employer
        </Text>
        <DropDownPicker
          items={items6}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen6}
          setOpen={() => setIsOpen6(!isOpen6)}
          value={currentValue6}
          setValue={val => setCurrentValue6(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="select"
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Current Orgination Type
        </Text>
        <DropDownPicker
          items={items7}
          style={styles.input3}
          dropDownDirection="TOP"
          open={isOpen7}
          setOpen={() => setIsOpen7(!isOpen7)}
          value={currentValue7}
          setValue={val => setCurrentValue7(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="select"
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Notice Period
        </Text>

        <TextInput
          style={styles.input3}
          placeholder="Notice Period"
          value={currentValue8}
          onChangeText={text => handleInputChange('noticeperiod', text)}
        />
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Current Orgination Name
        </Text>

        <TextInput
          style={styles.input3}
          placeholder="Organization Name"
          value={details.organisationName}
          onChangeText={text => handleInputChange('organisationName', text)}
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          functionality Area
        </Text>

        <DropDownPicker
          items={items9}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen9}
          setOpen={() => setIsOpen9(!isOpen9)}
          value={currentValue9}
          setValue={val => setCurrentValue9(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="selct"
        />

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Key Skills
        </Text>
        <TextInput
          style={styles.input3}
          value={details.keySkill}
          onChangeText={text => handleInputChange('keySkill', text)}
        />

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 17, color: '#242435', marginTop: 10}}>
              Updated Resume{' '}
            </Text>
          </View>
          <View style={{flex: 1, marginLeft: -40}}>
            <TouchableOpacity onPress={pickDocument}>
              <AntDesign
                name="pluscircle"
                size={40}
                style={{marginTop: 0, justifyContent: 'flex-start'}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{marginTop: 20}}> Maximum upload file size: 20MB</Text>

        <TouchableHighlight onPress={postdata} style={styles.submit}>
          <Text style={styles.submitineer}>Updated Profile</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: '#fff',
    flex: 1,
  },

  input: {
    height: 40,
    marginTop: 0,
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

    padding: 10,
    backgroundColor: '#F2F2F2',
  },

  buttonStyle: {
    marginTop: 30,
  },
  dropdown: {
    marginTop: 30,
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
});
