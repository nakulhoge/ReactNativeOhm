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
import Fontisto from 'react-native-vector-icons/Fontisto';

const JobDetail = props => {
  const {jobDetails} = props.route.params

  const renderHtmlContent = htmlContent => {
    if (!htmlContent) {
      return '';
    }

    const formattedContent = htmlContent.replace(/<br\s*[/]?>/gi, '\n');

    const plainTextContent = formattedContent.replace(/<[^>]+>/g, '');

    return plainTextContent;
  };
  const jobid = jobDetails.mst_JobPostingID;
  // apply for job

  async function applyForJob(token, jobid) {
    try {
      const apiUrl = 'https://www.ohmjobs.com/common/apply-for-job-save';

      const requestData = {
        Mst_JobPostingID: jobid,
      };

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data) {
        props.navigation.navigate('JobApplied', {jobDetails});
      }
      // You can return the data or handle it as needed
      return data;
    } catch (error) {
      console.error('Error:', error);
      // Handle errors appropriately
      throw error; // Rethrow the error if needed
    }
  }

  // Example usage:

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 20}}></View>

        <View style={styles.boxmain}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.vlogo}
                source={{uri: jobDetails.logo}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: '#242435',
                  width: '50%',
                  marginLeft: 15,
                }}>
                {jobDetails.jobTitle}
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

              <View style={{flexDirection: 'row', marginBottom: 5}}>
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      backgroundColor: 'rgba(45, 160, 142, 0.12)',
                      marginTop: 13,
                      marginLeft: 18,
                      marginRight: 12,
                      textAlign: 'justify',
                      borderRadius: 5,
                      padding: 10,
                    }}>
                    {jobDetails.jobType}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      textAlign: 'justify',
                      marginTop: 13,
                      marginRight: 12,
                      fontSize: 11,
                      backgroundColor: 'rgba(45, 160, 142, 0.12)',
                      padding: 10,
                      borderRadius: 5,
                    }}>
                    {' '}
                    Urgent{' '}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      textAlign: 'justify',
                      marginTop: 13,
                      fontSize: 11,
                      backgroundColor: 'rgba(45, 160, 142, 0.12)',
                      padding: 10,
                      borderRadius: 5,
                    }}>
                    {' '}
                    Internship{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 13, color: '#242435', marginTop: 15}}>
                {' '}
                <Fontisto
                  name="map-marker-alt"
                  size={12}
                  style={{color: '#2DA08E'}}
                />{' '}
                <Text style={{marginRight: 0}}> {jobDetails.location} </Text>{' '}
              </Text>
            </View>
            <View style={{top: 10, padding: 2}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#2DA08E',
                  marginTop: 5,
                  marginLeft: 11,
                }}>
                Salary :{jobDetails.minSal_thausand} -{' '}
                {jobDetails.maxSal_thausand} k / month{' '}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{flex: 1, top: 10, padding: 2, width: 394, height: 100}}>
              <TouchableHighlight style={styles.submit}>
                <Text style={styles.submitineer}>Description</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 1, top: 10, padding: 2}}>
              <TouchableHighlight style={styles.submit3}>
                <Text style={styles.submitineer2}>Company</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 1, top: 10, padding: 2}}>
              <TouchableHighlight style={styles.submit3}>
                <Text style={styles.submitineer2}>Reviews</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.boxmain2}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{fontSize: 15, color: '#242435', textAlign: 'left'}}>
                  Job Description
                </Text>
                <View>
                  <Text style={{fontSize: 15, color: '#242435', marginTop: 5}}>
                    {renderHtmlContent(jobDetails.jobDescription)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boxmain2}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{fontSize: 15, color: '#242435', textAlign: 'left'}}>
                  Responsibilities
                </Text>
                <Text style={{fontSize: 13, color: '#242435', marginTop: 5}}>
                  <Text style={{fontSize: 8, marginRight: 10}}></Text>{' '}
                  {renderHtmlContent(jobDetails.responsibility)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxmain2}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{fontSize: 15, color: '#242435', textAlign: 'left'}}>
                  Requirements
                </Text>
                <Text style={{fontSize: 13, color: '#242435', marginTop: 5}}>
                  <Text style={{fontSize: 8, marginRight: 10}}></Text>{' '}
                  {renderHtmlContent(jobDetails.requirements)}
                </Text>
              </View>
            </View>
          </View>
          <TouchableHighlight onPress={applyForJob} style={styles.submit}>
            <Text style={styles.submitineer}>Apply Now</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  vlogo: {
    height: 80,
    width: 90,
  },
  container: {
    padding: 10,
   
    flex: 1,
  },
  logo: {
    width: 90,
    height: 12.92,
    alignItems: 'flex-start',
    left: 20,
  },

  boxmain: {
    borderColor: '#ccc',

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

  submit3: {
    borderRadius: 10,
    marginTop: 0,
    fontSize: 17,
    padding: 10,
    color: '#231F20',
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },

  submitineer2: {
    color: '#231F20',
    textAlign: 'center',
  },

  boxmain2: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(45, 160, 142, 0.12)',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default JobDetail;
