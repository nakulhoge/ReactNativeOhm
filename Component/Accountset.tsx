import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTokenContext} from './TokenContext';

const AccountSet = () => {
  const {token} = useTokenContext();
  const [accountStatus, setAccountStatus] = useState('Active'); // Default value
  const [udates, setudates] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {label: 'Active', value: '0'},
    {label: 'Inactive', value: '1'},
  ];

  const updateAccountStatus = async () => {
    try {
      const apiUrl = 'https://www.ohmjobs.com/job-seeker/account-update';

      const formData = new FormData();
      formData.append('accountStatus', accountStatus === 'Active' ? '1' : '0');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        console.error(
          'Failed to update account status. Server returned:',
          response.status,
        );
        return;
      }

      const data = await response.json();
      
      if (data === 200) {
        const message = 'Status Updates Successfully';
        setudates(message);
      }

      // Handle success or navigate to another screen
      // e.g., props.navigation.navigate('Inbox');
    } catch (error) {
      console.error('Error during account status update:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 24, color: '#242435'}}>Account Status</Text>
        <SafeAreaView>
          <Text style={{fontSize: 17, color: '#242435', marginTop: 20}}>
            Email
          </Text>
          <TextInput style={styles.input} placeholder="Email" />

          <View>
            <Text style={{fontSize: 16, color: '#242435', marginTop: 20}}>
              Status
            </Text>
          </View>

          <DropDownPicker
            items={items}
            dropDownDirection="TOP"
            style={styles.dropdown}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={accountStatus}
            setValue={val => setAccountStatus(val)}
            maxHeight={200}
            placeholder="Status"
          />
        </SafeAreaView>
        <Text style={styles.buttonStyle}></Text>
        <TouchableHighlight onPress={updateAccountStatus} style={styles.submit}>
          <Text style={styles.submitineer}>Update Status</Text>
        </TouchableHighlight>
      </View>
      <Text>{udates}</Text>
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

  buttonStyle: {
    marginTop: 30,
  },
  dropdown: {
    marginTop: 10,
  },
  submit: {
    backgroundColor: '#2DA08E',
    borderRadius: 10,
    marginTop: 0,
    fontSize: 20,
    padding: 15,
  },

  submitineer: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default AccountSet;
