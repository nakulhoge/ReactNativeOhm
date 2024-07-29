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
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Findjob = props => {
  // pasted code usestates
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [JobData, setJobData] = useState([]);
  const [dep, setdep] = useState([]);
  const [items1, setItems1] = useState([]);
  const [cities, setCities] = useState([]);

  // paste in  that components get job category copy this also from 55 to 173

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

  // get department by id

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
  }, []);
  useEffect(() => {
    if (jobCategory) {
      fetchJobs();
    }
  }, [jobCategory]);
  // find job

  // find job

  const fetchJobs = async () => {
    try {
      const apiUrl = 'https://www.ohmjobs.com/job-listing/search';

      const formData = new FormData();
      formData.append('pageNo', '1');
      formData.append('pageSize', '10');
      formData.append('category', jobCategory);
      formData.append('department', ' ');
      formData.append('designation_search', '');
      formData.append('skillSetSearch', '');
      formData.append('postFeshness', '300');
      formData.append('graduationID', '');
      formData.append('tagID', '');

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.rows) {
        // Mapping over the data.rows to extract relevant fields for each job posting
        const extractedJobs = data.rows.map(jobPosting => ({
          mst_JobPostingID: jobPosting.mst_JobPostingID,
          createdDate: jobPosting.createdDate,
          mst_JObPosterID: jobPosting.mst_JObPosterID,
          contactNumber: jobPosting.contactNumber,
          hospital: jobPosting.hospital,
          email: jobPosting.email,
          jobTitle: jobPosting.jobTitle,
          url: jobPosting.url,
          keySkill: jobPosting.keySkill,
          jobDescription: jobPosting.jobDescription,
          jobType: jobPosting.jobType,
          minSal_lakh: jobPosting.minSal_lakh,
          minSal_thausand: jobPosting.minSal_thausand,
          maxSal_lakh: jobPosting.maxSal_lakh,
          maxSal_thausand: jobPosting.maxSal_thausand,
          showSal: jobPosting.showSal,
          shiftTimeing: jobPosting.shiftTimeing,
          otherDescription: jobPosting.otherDescription,
          location: jobPosting.location,
          deptID: jobPosting.deptID,
          dept: jobPosting.dept,
          categoryID: jobPosting.categoryID,
          category: jobPosting.category,
          jobRole: jobPosting.jobRole,
          logo: jobPosting.logo,
          responsibility: jobPosting.responsibility,
          requirements: jobPosting.requirements,
          minExperience: jobPosting.minExperience,
          maxExperience: jobPosting.maxExperience,
          website: jobPosting.website,
          mst_Job_GraduationID: jobPosting.mst_Job_GraduationID,
          tagID: jobPosting.tagID,
        }));

        // Setting the extracted job data in the ta state
        setJobData(extractedJobs);
      } else {
        console.error('No job data found in the response');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
    }
  };

  const handleFindJobs = () => {
    if (jobCategory) {
      fetchJobs();
    } else {
      console.error('Please select a job category before finding jobs.');
    }
  };
  const sjcsdc = [
    {label: 'DOCTORS', value: '1'},
    {label: 'NURSES', value: '2'},
    {label: 'TECHNICIANS/PHARMACY/DIETICIAN', value: '3'},
    {label: 'ADMIN/MANAGERS', value: '5'},
    
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <DropDownPicker
          items={cities.map(city => ({
            label: city.name,
            value: city.l_CityID,
          }))}
          style={{marginTop: 0}}
          dropDownDirection="TOP"
          open={isOpen11}
          setOpen={() => setIsOpen11(!isOpen11)}
          value={currentLocation}
          setValue={val => setCurrentLocation(val)}
          listMode="SCROLLVIEW"
          maxHeight={400}
          autoScroll
          placeholder=" Location "
        />
        <DropDownPicker
          items={dep}
          style={{marginTop: 20, marginBottom: 0, backgroundColor: '#F2F2F2'}}
          dropDownDirection="TOP"
          open={isOpen5}
          setOpen={() => setIsOpen5(!isOpen5)}
          value={department}
          setValue={val => setDepartment(val)}
          maxHeight={200}
          autoScroll
          listMode="SCROLLVIEW"
          placeholder="Department"
        />

        <DropDownPicker
          items={sjcsdc}
          style={{marginTop: 20, marginBottom: 10, backgroundColor: '#F2F2F2'}}
          dropDownDirection="TOP"
          open={isOpen1}
          setOpen={() => setIsOpen1(!isOpen1)}
          value={jobCategory}
          setValue={val => setJobCategory(val)}
          maxHeight={200}
          autoScroll
          placeholder="Job Category"
        />

        <TouchableHighlight onPress={handleFindJobs} style={styles.submit}>
          <Text style={styles.submitineer}>Find Job</Text>
        </TouchableHighlight>

        <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 30}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 24, color: '#242435', marginTop: 0}}>
              Result
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
        {JobData.map((data, index) => (
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

  buttonStyle: {
    marginTop: 30,
  },
  dropdown: {
    marginTop: 30,
  },
  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 10,
    marginTop: 20,
    fontSize: 17,
    padding: 15,
  },

  boxmain: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
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

  submit3: {
    backgroundColor: '#2DA08E',
    borderRadius: 5,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
    width: 125,
    marginLeft: 20,
  },
  logo: {
    flex: 1,
    width: 80,
  },
});

export default Findjob;
