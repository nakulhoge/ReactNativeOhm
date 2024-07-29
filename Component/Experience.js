import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';
import {TouchableOpacity} from 'react-native';
import RNFS from 'react-native-fs';
import {useTokenContext} from './TokenContext';

const Experience = props => {
  const {token} = useTokenContext();
  const [isOpen, setIsOpen] = useState(false);
  const [presentEmployee, setPresentEmployee] = useState('');
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [currentOrganizationType, setCurrentOrganizationType] = useState('');
  const [currentOrganizationName, setCurrentOrganizationName] = useState('');
  const [functionalityArea, setFunctionalityArea] = useState('');
  const [jobType, setJobType] = useState('');
  const [designation, setDesignation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [totalExperience, setTotalExperience] = useState('');
  const [totalExperienceMonths, setTotalExperienceMonths] = useState('');
  const [currentCTC, setCurrentCTC] = useState('');
  const [expectedCTC, setExpectedCTC] = useState('');
  const [noticePeriod, setNoticePeriod] = useState('');
  const [keySkills, setKeySkills] = useState('');
  const [profileSummary, setProfileSummary] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [deleteval, setdeleteval] = useState('1');
  const [selectedResume, setSelectedResume] = useState('');
  const [errors, setErrors] = useState({
    presentEmployee: '',
    currentOrganizationType: '',
    currentOrganizationName: '',
    functionalityArea: '',
    jobType: '',
    designation: '',
    jobRole: '',
    totalExperience: '',
    totalExperienceMonths: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    keySkills: '',
    profileSummary: '',
    licenseNumber: '',
  });
  // const [job, setjob] = useState([]);

  // useEffect(() => {
  //   const getjobrole = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://www.ohmjobs.com/common/get-JobRole',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({}),
  //         },
  //       );

  //       const text = await response.text();
  //       if (!text) {
  //         console.error('Empty response from the API');
  //         return;
  //       }

  //       const data = JSON.parse(text);

  //       if (data.certifications) {
  //         // Update this line
  //         const updatedItems1 = data.certifications.map(fel => ({
  //           label: fel.name,
  //           value: fel.mst_JobRoleID.toString(),
  //         }));

  //         setjob(updatedItems1);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching certification data:', error);
  //     }
  //   };

  //   getjobrole();
  // }, []);

  const handleChange = (field, value) => {
    switch (field) {
      case 'presentEmployee':
        setPresentEmployee(value);
        break;
      case 'currentOrganizationType':
        setCurrentOrganizationType(value);
        break;
      case 'currentOrganizationName':
        setCurrentOrganizationName(value);
        break;
      case 'functionalityArea':
        setFunctionalityArea(value);
        break;
      case 'jobType':
        setJobType(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      case 'jobRole':
        setJobRole(value);
        break;
      case 'totalExperience':
        setTotalExperience(value);
        break;
      case 'totalExperienceMonths':
        setTotalExperienceMonths(value);
        break;
      case 'currentCTC':
        setCurrentCTC(value);
        break;
      case 'expectedCTC':
        setExpectedCTC(value);
        break;
      case 'noticePeriod':
        setNoticePeriod(value);
        break;
      case 'keySkills':
        setKeySkills(value);
        break;
      case 'profileSummary':
        setProfileSummary(value);
        break;
      case 'licenseNumber':
        setLicenseNumber(value);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({...prevErrors, [field]: ''}));
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = {};

    if (!presentEmployee) {
      newErrors.presentEmployee = 'Present Employee is required';
      isValid = false;
    }

    if (!currentOrganizationType) {
      newErrors.currentOrganizationType = 'Organization Type is required';
      isValid = false;
    }

    if (!currentOrganizationName) {
      newErrors.currentOrganizationName = 'Organization Name is required';
      isValid = false;
    }

    if (!functionalityArea) {
      newErrors.functionalityArea = 'Functionality Area is required';
      isValid = false;
    }

    if (!jobType) {
      newErrors.jobType = 'Job Type is required';
      isValid = false;
    }

    if (!designation) {
      newErrors.designation = 'Designation is required';
      isValid = false;
    }

    if (!jobRole) {
      newErrors.jobRole = 'Job Role is required';
      isValid = false;
    }

    if (!totalExperience) {
      newErrors.totalExperience = 'Total Experience is required';
      isValid = false;
    }

    if (!totalExperienceMonths) {
      newErrors.totalExperienceMonths =
        'Total Experience in Months is required';
      isValid = false;
    }

    if (!currentCTC) {
      newErrors.currentCTC = 'Current CTC is required';
      isValid = false;
    }

    if (!expectedCTC) {
      newErrors.expectedCTC = 'Expected CTC is required';
      isValid = false;
    }

    if (!noticePeriod) {
      newErrors.noticePeriod = 'Notice Period is required';
      isValid = false;
    }

    if (!keySkills) {
      newErrors.keySkills = 'Key Skills is required';
      isValid = false;
    }

    if (!profileSummary) {
      newErrors.profileSummary = 'Profile Summary is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextpage = () => {
    const isValid = validateFields();

    if (isValid) {
      const apiUrl = 'https://www.ohmjobs.com/JobSeekars/AddUpdateExperence';

      const formData = new FormData();
      formData.append('deleteval', deleteval);
      formData.append('jobtype', jobType);
      formData.append('designation', designation);
      formData.append('Mst_JobRoleID', jobRole);
      formData.append('totalExperenceYear', totalExperience);
      formData.append('experience_month', totalExperienceMonths);
      formData.append('currenctCTC', currentCTC);
      formData.append('expectedCTC', expectedCTC);
      formData.append('isPresentEmployer', presentEmployee);
      formData.append('EmployerType', currentOrganizationType);
      formData.append('organisationName', currentOrganizationName);
      formData.append('Mst_FunctionalityAriaID', functionalityArea);
      formData.append('keySkill', keySkills);
      formData.append('jobSummary', profileSummary);
      formData.append('resumeURl', selectedResume);

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // Include bearer token in headers
        },
        body: formData,
      })
        .then(response => response.json())

        .catch(error => {
          console.error('Error:', error);
        });

      props.navigation.navigate('RecentJob');
    } else {
      console.log('Form is not valid. Please check errors.');
    }
  };

  const items = [
    {label: 'YES', value: '1'},
    {label: 'NO', value: '2'},
  ];

  const item122 = [
    {"label": "RMO", "value": "1"},
    {"label": "STAFF NURSE", "value": "2"},
    {"label": "ICU NURSE", "value": "3"},
    {"label": "WARD NURSES", "value": "4"},
    {"label": "MARKETING MANAGER", "value": "5"},
    {"label": "ADMIN", "value": "6"},
    {"label": "Snr Resident", "value": "7"},
    {"label": "ICU REGISTRAR", "value": "8"},
    {"label": "INTENSIVIST", "value": "9"},
    {"label": "CONSULTANT DOCTOR", "value": "10"},
    {"label": "Resident Doctor", "value": "11"},
    {"label": "Floor Manager", "value": "12"},
    {"label": "FLOOR CO-ORDINATOR", "value": "13"},
    {"label": "Admin Assistant", "value": "14"},
    {"label": "Jr.Consultant", "value": "15"},
    {"label": "MATRON", "value": "16"},
    {"label": "MEDICAL SUPERINTENDENT", "value": "17"},
    {"label": "PHARMACIST", "value": "18"},
    {"label": "ONCO SURGEON", "value": "19"},
    {"label": "ONCOLOGY", "value": "20"},
    {"label": "SURGICAL ONCOLOGIST", "value": "21"},
    {"label": "TECHNICIAN", "value": "22"},
    {"label": "RADIOGRAPHER", "value": "23"},
    {"label": "X- RAY TECHNICIAN", "value": "24"},
    {"label": "MRI-TECHNICIAN", "value": "25"},
    {"label": "SONOGRAPHER", "value": "26"},
    {"label": "DIALYSIS TECHNICIAN", "value": "27"},
    {"label": "MICROBIOLOGIST", "value": "28"},
    {"label": "LAB TECHNICIAN", "value": "29"},
    {"label": "ELECTRICIAN", "value": "30"},
    {"label": "SPEECH THERAPIST", "value": "31"},
    {"label": "AUDIOLOGIST", "value": "32"},
    {"label": "DENTIST", "value": "33"},
    {"label": "Accountant", "value": "34"},
    {"label": "NUTRITION", "value": "35"},
    {"label": "Cardiologist", "value": "36"},
    {"label": "TPA", "value": "37"},
    {"label": "PSYCHIATRIST", "value": "38"},
    {"label": "Radiology Technician", "value": "39"},
    {"label": "OT Technician", "value": "40"},
    {"label": "Physiotherapists", "value": "41"},
    {"label": "HR MANAGER", "value": "42"},
    {"label": "Hr Executive", "value": "43"},
    {"label": "SERVICE ENGINEER", "value": "44"},
    {"label": "BIO MEDICAL ENGINEER", "value": "45"},
    {"label": "CATHLAB TECHNICIAN", "value": "46"},
    {"label": "Registrar OBG", "value": "47"},
    {"label": "Registrar Pediatric ", "value": "48"},
    {"label": "CASUALTY NURSE", "value": "49"},
    {"label": "RESEARCH ASSOCIATE ", "value": "50"},
    {"label": "Marketing Executive", "value": "51"},
    {"label": "CMO", "value": "52"},
    {"label": "ICU RMO", "value": "53"},
    {"label": "GYNEAC RMO", "value": "54"},
    {"label": "Clinical Psychologist", "value": "55"},
    {"label": "Front Office Executive", "value": "56"},
    {"label": "LAB TECHNICIAN", "value": "57"},
    {"label": "CEO", "value": "58"},
    {"label": "Nursing Superintendent", "value": "59"},
    {"label": "RADIOLOGIST", "value": "60"},
    {"label": "FINANCE MANAGER", "value": "61"},
    {"label": "IT CO ORDINATOR", "value": "62"},
    {"label": "STORE INCHARGE", "value": "63"},
    {"label": "CLINCIAL ANALYST", "value": "64"},
    {"label": "INFECTION CONTROL NURSE", "value": "65"},
    {"label": "OT NURSE/DIALYSIS NURSE/CATHLAB NURSE", "value": "66"},
    {"label": "Optometrist", "value": "67"},
    {"label": "MEDICAL ADMINISTRATOR", "value": "68"},
    {"label": "QUALITY MANAGER", "value": "69"},
    {"label": "Medical biling executive", "value": "70"},
    {"label": "Medical biling Manager", "value": "71"},
    {"label": "Patient Care Coordinator ", "value": "72"},
    {"label": "Medical Record Technician ", "value": "73"}
  ];
  

  const items1 = [
    {label: 'CLINICAL', value: '1'},
    {label: 'NON CLINICAL', value: '4'},
    {label: 'CLINICAL+ADMIN', value: '5'},
    {label: 'ADMIN', value: '6'},
    {label: 'ACADEMICS', value: '7'},
  ];

  const items2 = [
    {label: 'Full Time', value: 'FullTime'},
    {label: 'Part Time', value: 'PartTime'},
    {label: 'Contract', value: 'Contract'},
    {label: 'Freelancer', value: 'Freelancer'},
  ];
  const items10 = [
    {label: 'Hospital', value: 'Hospital'},
    {label: 'Institute', value: 'Institute'},
  ];

  const items12 = [
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

  const items13 = [
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

  // resume select
  const pickDocument = async () => {
    try {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });

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
              100%{' '}
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
              width: '100%',
              borderRadius: 5,
              position: 'absolute',
            }}></View>
        </View>

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={items}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={presentEmployee}
          setValue={val => setPresentEmployee(val)}
          maxHeight={200}
          autoScroll
          placeholder="Present Employee"
        />
        {errors.presentEmployee ? (
          <Text style={styles.errorText}>{errors.presentEmployee}</Text>
        ) : null}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={items10}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen10}
          setOpen={() => setIsOpen10(!isOpen10)}
          value={currentOrganizationType}
          setValue={val => handleChange('currentOrganizationType', val)}
          maxHeight={200}
          autoScroll
          placeholder="Current Organisation Type"
        />
        {errors.currentOrganizationType ? (
          <Text style={styles.errorText}>{errors.currentOrganizationType}</Text>
        ) : null}

        <TextInput
          style={styles.input2}
          placeholder="Current Organisation Name"
          value={currentOrganizationName}
          onChangeText={val => handleChange('currentOrganizationName', val)}
        />
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={items1}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen1}
          setOpen={() => setIsOpen1(!isOpen1)}
          value={functionalityArea}
          setValue={val => handleChange('functionalityArea', val)}
          maxHeight={200}
          autoScroll
          placeholder="Functionality Area"
        />
        {errors.functionalityArea ? (
          <Text style={styles.errorText}>{errors.functionalityArea}</Text>
        ) : null}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={items2}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen2}
          setOpen={() => setIsOpen2(!isOpen2)}
          value={jobType}
          setValue={val => handleChange('jobType', val)}
          maxHeight={200}
          autoScroll
          placeholder="Job Type"
        />
        {errors.jobType ? (
          <Text style={styles.errorText}>{errors.jobType}</Text>
        ) : null}
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <TextInput
          style={styles.input3}
          placeholder="Designation"
          value={designation}
          onChangeText={val => handleChange('designation', val)}
        />
        {errors.designation ? (
          <Text style={styles.errorText}>{errors.designation}</Text>
        ) : null}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={item122}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen4}
          setOpen={() => setIsOpen4(!isOpen4)}
          value={jobRole}
          setValue={val => handleChange('jobRole', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Job Role"
        />
        {errors.jobRole ? (
          <Text style={styles.errorText}>{errors.jobRole}</Text>
        ) : null}
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          Total Experience in years <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={items12}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen5}
          setOpen={() => setIsOpen5(!isOpen5)}
          value={totalExperience}
          setValue={val => handleChange('totalExperience', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Total Experience"
        />
        {errors.totalExperience ? (
          <Text style={styles.errorText}>{errors.totalExperience}</Text>
        ) : null}
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Total Experience in Month <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <DropDownPicker
          items={items13}
          style={{marginTop: 5}}
          dropDownDirection="TOP"
          open={isOpen12}
          setOpen={() => setIsOpen12(!isOpen12)}
          value={totalExperienceMonths}
          setValue={val => handleChange('totalExperienceMonths', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Total Experience"
        />
        {errors.totalExperienceMonths ? (
          <Text style={styles.errorText}>{errors.totalExperienceMonths}</Text>
        ) : null}
        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <TextInput
          style={styles.input3}
          placeholder="Current CTC"
          value={currentCTC}
          onChangeText={val => handleChange('currentCTC', val)}
        />
        {errors.currentCTC ? (
          <Text style={styles.errorText}>{errors.currentCTC}</Text>
        ) : null}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <TextInput
          style={styles.input3}
          placeholder="Expected CTC"
          value={expectedCTC}
          onChangeText={val => handleChange('expectedCTC', val)}
        />
        {errors.expectedCTC ? (
          <Text style={styles.errorText}>{errors.expectedCTC}</Text>
        ) : null}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>

        <TextInput
          style={styles.input3}
          placeholder="Notice Period"
          value={noticePeriod}
          onChangeText={val => handleChange('noticePeriod', val)}
        />
        {errors.noticePeriod ? (
          <Text style={styles.errorText}>{errors.noticePeriod}</Text>
        ) : null}

        <Text style={{fontSize: 13, color: '#242435', marginTop: 30}}>
          {' '}
          Key Skills <Text style={{color: '#ff0000'}}>*</Text>
        </Text>
        <TextInput
          style={styles.input3}
          placeholder="Key Skills"
          value={keySkills}
          onChangeText={val => handleChange('keySkills', val)}
        />
        {errors.keySkills ? (
          <Text style={styles.errorText}>{errors.keySkills}</Text>
        ) : null}

        <TextInput
          style={styles.input2}
          value={profileSummary}
          onChangeText={val => handleChange('profileSummary', val)}
          placeholder="Profile Summary"
        />

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 17, color: '#242435', marginTop: 10}}>
              Updated Resume
            </Text>
          </View>
          <View style={{flex: 1, marginLeft: -40}}>
            <Text>
              <TouchableOpacity onPress={pickDocument}>
                <AntDesign
                  name="pluscircle"
                  size={40}
                  style={{marginTop: 0, justifyContent: 'flex-start'}}
                />
              </TouchableOpacity>
            </Text>
          </View>
        </View>

        <Text style={{fontSize: 16, color: '#242435', marginTop: 18}}>
          Maximum upload file size: 20MB
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#242435',
            marginTop: 20,
            textAlign: 'center',
          }}>
          Download Resume <AntDesign name="download" size={24} />
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#242435',
            marginTop: 25,
            textAlign: 'center',
          }}>
          Ensuring that unauthorized parties cannot access your sensitive
          information.
        </Text>

        <TouchableHighlight onPress={nextpage} style={styles.submit}>
          <Text style={styles.submitineer}>Verify & Submit</Text>
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
    marginTop: 0,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    zIndex: -9999,
    padding: 10,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
  },

  input2: {
    height: 40,
    marginTop: 30,
    fontSize: 17,
    borderRadius: 10,
    borderColor: 'rgba(36, 36, 53, 0.12);',
    borderWidth: 1,
    zIndex: -9999,
    padding: 10,
    backgroundColor: '#F2F2F2',
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

export default Experience;
