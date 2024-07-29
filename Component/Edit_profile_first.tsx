import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTokenContext} from './TokenContext';

const Qualification = props => {
  const {token} = useTokenContext();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const [protocol, setProtocol] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [graduation, setGraduation] = useState('');
  const [department, setDepartment] = useState('');
  const [postGraduation, setPostGraduation] = useState('');
  const [functionalityArea, setFunctionalityArea] = useState('');
  const [passingYear, setPassingYear] = useState('');
  const [fellowship, setFellowship] = useState('');
  const [LicenceNumber, setlicencenumber] = useState('');
  // const [college, setCollege] = useState('');
  // const [university, setUniversity] = useState('');
  const [certification, setCertification] = useState('');
  const [GraduationList, setGraduationList] = useState([]);
  const [items2, setItems2] = useState([]);
  const [PostGraduationList, setPostGraduationList] = useState([]);
  const [Ccertification, setCcertification] = useState([]);
  const [fellow, setfellow] = useState([]);
  const [workPermitForUSA, setWorkPermitForUSA] = useState('yes');
  const [dep, setdep] = useState([]);

  // get department

  const fetchDepartments = async categoryId => {
    try {
      const formData = new FormData();
      formData.append('categoryID', categoryId);

      const response = await fetch(
        'https://www.ohmjobs.com/common/get-department-by-id',
        {
          method: 'POST',
          body: formData,
        },
      );

      const data = await response.json();

      // Check the department data in the console

      if (!data || data.error) {
        console.error('Error or empty response from the API');
        return;
      }

      if (data.departmentList) {
        const updatedItems1 = data.departmentList.map(fel => ({
          label: fel.name,
          value: fel.mst_DepartmentID.toString(),
        }));
        setdep(updatedItems1);
      } else {
        console.error('No department list found in the API response');
      }
    } catch (error) {
      console.error('Error fetching department list:', error);
    }
  };

  useEffect(() => {
    if (jobCategory) {
      fetchDepartments(jobCategory);
    }
  }, [jobCategory]);

  //get fellowship
  useEffect(() => {
    const getFellowship = async () => {
      try {
        const response = await fetch(
          'https://www.ohmjobs.com/common/get-fellowship',
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

        if (data.fellowships) {
          // Update this line
          const updatedItems1 = data.fellowships.map(fel => ({
            label: fel.name,
            value: fel.mst_fellowshipsID.toString(),
          }));

          setfellow(updatedItems1);
        }
      } catch (error) {
        console.error('Error fetching certification data:', error);
      }
    };

    getFellowship();
  }, []);
  //get  certification

  useEffect(() => {
    const getCertification = async () => {
      try {
        const response = await fetch(
          'https://www.ohmjobs.com/common/get-certification',
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

        if (data.certifications) {
          // Update this line
          const updatedItems1 = data.certifications.map(certification => ({
            label: certification.name,
            value: certification.mst_certificationsID.toString(),
          }));

          setCcertification(updatedItems1);
        }
      } catch (error) {
        console.error('Error fetching certification data:', error);
      }
    };

    getCertification();
  }, []);

  const [errors, setErrors] = useState({
    protocol: '',
    jobCategory: '',
    graduation: '',
    postGraduation: '',
    department: '',
    functionalityArea: '',
    passingYear: '',
    fellowship: '',
    college: '',
    university: '',
    certification: '',
  });
  const [items3, setItems3] = useState([]);

  const handleChange = (field, value) => {
    switch (field) {
      case 'protocol':
        setProtocol(value);
        break;
      case 'jobCategory':
        setJobCategory(value);
        break;
      case 'graduation':
        setGraduation(value);
        break;
      case 'postGraduation':
        setPostGraduation(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      case 'functionalityArea':
        setFunctionalityArea(value);
        break;
      case 'passingYear':
        setPassingYear(value);
        break;
      case 'fellowship':
        setFellowship(value);
        break;
      case 'college':
        setCollege(value);
        break;
      case 'university':
        setUniversity(value);
        break;
      case 'certification':
        setCertification(value);
        break;
      case 'LicenceNumber':
        setlicencenumber(value);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({...prevErrors, [field]: ''}));
  };
  // const validateFields = () => {
  //   let isValid = true;
  //   const newErrors = {};

  //   if (!protocol) {
  //     newErrors.protocol = 'Protocol is required';
  //     isValid = false;
  //   }

  //   if (!jobCategory) {
  //     newErrors.jobCategory = 'Job Category is required';
  //     isValid = false;
  //   }

  //   if (!graduation) {
  //     newErrors.graduation = 'Graduation is required';
  //     isValid = false;
  //   }

  //   if (!department) {
  //     newErrors.department = 'Department is required';
  //     isValid = false;
  //   }

  //   if (!postGraduation) {
  //     newErrors.postGraduation = 'Post Graduation is required';
  //     isValid = false;
  //   }

  //   if (!functionalityArea) {
  //     newErrors.functionalityArea = 'Functionality Area is required';
  //     isValid = false;
  //   }
  //   if (!LicenceNumber) {
  //     newErrors.LicenceNumber = 'License Number is required';
  //     isValid = false;
  //   }

  //   if (!fellowship) {
  //     newErrors.fellowship = 'Fellowship is required';
  //     isValid = false;
  //   }

  //   if (!certification) {
  //     newErrors.certification = 'Certification is required';
  //     isValid = false;
  //   }

  //   setErrors(newErrors);
  //   return isValid;
  // };

  const items = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];

  const [items1, setItems1] = useState([]);

  const items7 = [
    {label: 'CLINICAL', value: 'CLINICAL'},
    {label: 'NON CLINICAL', value: 'NONCLINICAL'},
    {label: 'CLINICAL+ADMIN', value: 'CLINICAL+ADMIN'},
    {label: 'ADMIN', value: 'ADMIN'},
    {label: 'ACADEMICS', value: 'ACADEMICS'},
  ];
  const nextpage = () => {
    const apiUrl = 'https://www.ohmjobs.com/JobSeekars/AddUpdateQualification';

    // Constructing the qualificationdata object
    const qualificationData = {
      LicenceNumber: [LicenceNumber],
      protocol: [protocol],
      Mst_Job_CategoryID: [jobCategory],
      Mst_Job_GraduationID: [graduation],
      Mst_Job_PostGraduationID: [postGraduation],
      Mst_DepartmentID: [department],
      Mst_FunctionalityAriaID: [functionalityArea],
      collage: [details.college],
      university: [details.university],
      year: [passingYear],
      Mst_fellowshipsID: [fellowship],
      Mst_certificationsID: [certification],
    };

    // Creating a FormData object
    const formData = new FormData();
    formData.append('qualificationdata', JSON.stringify(qualificationData));

    // Sending the POST request
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        props.navigation.navigate('Edit_profile_second');
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error here
      });
  };
  const [details, setDetails] = useState({
    college: '',
    university: '',
  });

  useEffect(() => {
    fetchDataWithToken();
  }, []);
  const fetchDataWithToken = async () => {
    try {
      const apiUrl = 'https://www.ohmjobs.com/job-seeker/getQaulification';

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

      const responseData = await response.json();

      if (responseData.data && responseData.data.length > 0) {
        const firstItem = responseData.data[0];

        setDetails({
          college: firstItem.collage || '',
          university: firstItem.university || '',
        });
      } else {
        console.log('No data returned from API or empty data array.');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

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

  const fetchGraduationList = async categoryId => {
    const formData = new FormData();
    formData.append('categoryID', categoryId);
    try {
      const response = await fetch(
        'https://www.ohmjobs.com/common/get-graduation-list/',
        {
          method: 'POST',

          body: formData,
        },
      );

      const text = await response.text();

      if (!text) {
        console.error('Empty response from the API');
        return;
      }

      const data = JSON.parse(text);

      if (data.graduationList) {
        setGraduationList(data.graduationList);
      }
    } catch (error) {
      console.error('Error fetching graduation list:', error);
    }
  };
  useEffect(() => {
    if (jobCategory) {
      fetchGraduationList(jobCategory);
    }
  }, [jobCategory]);
  useEffect(() => {
    const flattenGraduationList = GraduationList.flat();
    setItems2(
      flattenGraduationList.map(graduationItem => ({
        label: graduationItem.name,
        value: graduationItem.mst_Job_GraduationID,
      })),
    );
  }, [GraduationList]);

  const fetchPostGraduationList = async (categoryId, graduationId) => {
    const formData = new FormData();
    formData.append('categoryID', categoryId);
    formData.append('graduationId', graduationId);

    try {
      const response = await fetch(
        'https://www.ohmjobs.com/common/get-post-graduation-list',
        {
          method: 'POST',
          body: formData,
        },
      );

      const text = await response.text();

      if (!text) {
        console.error('Empty response from the API');
        return;
      }

      const data = JSON.parse(text);

      if (data.postGraduationList) {
        setPostGraduationList(data.postGraduationList);
      }
    } catch (error) {
      console.error('Error fetching post-graduation list:', error);
    }
  };

  useEffect(() => {
    if (graduation) {
      const categoryId = jobCategory;
      const graduationId = graduation;

      fetchPostGraduationList(categoryId, graduationId);
    }
  }, [graduation]);

  useEffect(() => {
    const flattenPostGraduationList = PostGraduationList.flat();
    setItems3(
      flattenPostGraduationList.map(postGraduationItem => ({
        label: postGraduationItem.name,
        value: postGraduationItem.mst_Job_PostGraduationID,
      })),
    );
  }, [PostGraduationList]);
  const handleuniversitychange = text => {
    setDetails(prevDetails => ({...prevDetails, university: text}));
  };

  const handlecollegechange = text => {
    setDetails(prevDetails => ({...prevDetails, college: text}));
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
          Qualification
        </Text>

        <DropDownPicker
          items={items}
          style={{marginTop: 30}}
          dropDownDirection="TOP"
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={protocol}
          setValue={val => handleChange('protocol', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="NABH/NABL/JCI Protocol"
        />
        {errors.protocol ? (
          <Text style={styles.errorText}>{errors.protocol}</Text>
        ) : null}

        <DropDownPicker
          items={items1}
          style={{marginTop: 30}}
          dropDownDirection="TOP"
          open={isOpen1}
          setOpen={() => setIsOpen1(!isOpen1)}
          value={jobCategory}
          setValue={val => handleChange('jobCategory', val)}
          maxHeight={200}
          autoScroll
          placeholder="Job Category"
        />
        {errors.jobCategory ? (
          <Text style={styles.errorText}>{errors.jobCategory}</Text>
        ) : null}

        <DropDownPicker
          items={items2}
          style={{marginTop: 30}}
          dropDownDirection="TOP"
          open={isOpen2}
          setOpen={() => setIsOpen2(!isOpen2)}
          value={graduation}
          setValue={val => handleChange('graduation', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Graduation"
        />
        {errors.graduation ? (
          <Text style={styles.errorText}>{errors.graduation}</Text>
        ) : null}

        <DropDownPicker
          items={items3}
          style={{marginTop: 30}}
          dropDownDirection="TOP"
          open={isOpen3}
          setOpen={() => setIsOpen3(!isOpen3)}
          value={postGraduation}
          setValue={val => handleChange('postGraduation', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Post Graduation"
        />
        {errors.postGraduation ? (
          <Text style={styles.errorText}>{errors.postGraduation}</Text>
        ) : null}

        <Text style={{fontSize: 13, marginTop: 30, marginBottom: 5}}>
          Required <Text style={{color: '#ff0000'}}>*</Text>
        </Text>

        <DropDownPicker
          items={dep}
          style={{marginTop: 0}}
          dropDownDirection="TOP"
          open={isOpen5}
          setOpen={() => setIsOpen5(!isOpen5)}
          value={department}
          setValue={val => handleChange('department', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Department"
        />
        {errors.department ? (
          <Text style={styles.errorText}>{errors.department}</Text>
        ) : null}

        <TextInput
          style={styles.input3}
          onChangeText={handlecollegechange} // Updated
          placeholder="College"
          value={details.college}
        />
        {errors.college ? (
          <Text style={styles.errorText}>{errors.college}</Text>
        ) : null}

        <TextInput
          style={styles.input3}
          onChangeText={handleuniversitychange} // Updated
          placeholder="University"
          value={details.university}
        />
        {errors.university ? (
          <Text style={styles.errorText}>{errors.university}</Text>
        ) : null}

        <DropDownPicker
          items={items7}
          style={{marginTop: 30}}
          dropDownDirection="TOP"
          open={isOpen7}
          setOpen={() => setIsOpen7(!isOpen7)}
          value={functionalityArea}
          setValue={val => handleChange('functionalityArea', val)}
          maxHeight={200}
          autoScroll
          placeholder="Functionality Area"
        />
        {errors.functionalityArea ? (
          <Text style={styles.errorText}>{errors.functionalityArea}</Text>
        ) : null}

        <TextInput
          style={styles.input3}
          onChangeText={val => handleChange('passingYear', val)}
          placeholder="passingYear"
        />

        {errors.passingYear ? (
          <Text style={styles.errorText}>{errors.passingYear}</Text>
        ) : null}

        <Text style={{fontSize: 13, marginTop: 30}}>Fellowship</Text>

        <DropDownPicker
          items={fellow}
          style={{marginTop: 10}}
          dropDownDirection="TOP"
          open={isOpen9}
          setOpen={() => setIsOpen9(!isOpen9)}
          value={fellowship}
          setValue={val => handleChange('fellowship', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Select"
        />
        {errors.fellowship ? (
          <Text style={styles.errorText}>{errors.fellowship}</Text>
        ) : null}

        <DropDownPicker
          items={Ccertification}
          style={{marginTop: 30}}
          dropDownDirection="TOP"
          open={isOpen10}
          setOpen={() => setIsOpen10(!isOpen10)}
          value={certification}
          setValue={val => handleChange('certification', val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Certification"
        />
        {errors.certification ? (
          <Text style={styles.errorText}>{errors.certification}</Text>
        ) : null}

        <TextInput
          style={styles.input3}
          placeholder="License Number"
          onChangeText={val => handleChange('LicenceNumber', val)}
        />
        {errors.LicenceNumber ? (
          <Text style={styles.errorText}>{errors.LicenceNumber}</Text>
        ) : null}
        <TouchableHighlight onPress={nextpage} style={styles.submit}>
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

  errorText: {
    color: '#ff0000',
    fontSize: 12,
  },

  input3: {
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

  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 10,
    marginTop: 20,
    fontSize: 17,
    padding: 15,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
});

export default Qualification;
