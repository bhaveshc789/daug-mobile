import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
import { Font, LinearGradient } from 'expo';
import { Button, Input } from 'react-native-elements';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ENV_URL } from '../utils/helpers';

export default class SignupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Let's get started",
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#fd746c',
      borderBottomColor: '#fd746c',
      borderBottomWidth: 0,
      elevation: null,
    },
    headerTitleStyle: {
      fontSize: 20,
      fontFamily: 'Righteous'
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      name: '',
      email: '',
      password: '',
      isLoading: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Righteous': require('../../assets/fonts/Righteous-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  async signupButtonPressed() {
    this.setState({ isLoading: true })

    const { name, email, password } = this.state

    var details = {
      'name': name,
      'email': email,
      'password': password
    };

    var formBody = [];

    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);

      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    try {
      let response = await fetch(`${ENV_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      });

      let responseJSON = null

      if (response.status === 201) {
        responseJSON = await response.json();

        console.log(responseJSON)

        this.setState({ isLoading: false })
        Alert.alert(
          'Logged In!',
          'You have successfully logged in!',
          [
            { text: "Continue", onPress: () => console.log("User created!") }
          ],
          { cancelable: false }
        )
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        this.setState({ isLoading: false, error })

        Alert.alert('Log in failed!', `Unable to login.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isLoading: false, response: error })

      Alert.alert('Log in failed!', 'Unable to login. Please try again later')
    }
  }

  signupValid() {
    const { name, email, password } = this.state

    return name.length > 0 && email.length > 0 && password.length > 0
  }

  render() {
    const { name, email, password, isLoading } = this.state

    return (
      <LinearGradient
        colors={['#fd746c', '#ff9068']}
        style={styles.mainContent}>
        {this.state.fontLoaded &&
          <View style={styles.inputViewContainer}>
            <Input
              ref={input => this.nameInput = input}
              leftIcon={
                <MaterialCommunityIcons
                  name='rename-box'
                  color='white'
                  size={25}
                />
              }
              value={name}
              onChangeText={name => this.setState({ name })}
              placeholder="Name"
              placeholderTextColor="white"
              autoCapitalize="words"
              returnKeyType="next"
              displayError={false}
              errorMessage="Please enter a valid name"
              errorStyle={{ color: 'white' }}
              containerStyle={styles.inputContainer}
              inputStyle={{ color: 'white', fontFamily: 'Righteous' }}
              onSubmitEditing={() =>
                this.emailInput.focus()
              }
            />
            <Input
              ref={input => this.emailInput = input}
              leftIcon={
                <MaterialCommunityIcons
                  name='email-outline'
                  color='white'
                  size={25}
                />
              }
              value={email}
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
              placeholderTextColor="white"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              displayError={false}
              errorMessage="Please enter a valid email address"
              errorStyle={{ color: 'white' }}
              containerStyle={styles.inputContainer}
              inputStyle={{ color: 'white', fontFamily: 'Righteous' }}
              onSubmitEditing={() =>
                this.passwordInput.focus()
              }
            />
            <Input
              ref={input => (this.passwordInput = input)}
              leftIcon={
                <SimpleLineIcons
                  name='lock'
                  color='white'
                  size={25}
                />
              }
              value={password}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry
              displayError={false}
              errorMessage="The password fields are not identics"
              errorStyle={{ color: 'white' }}
              returnKeyType="go"
              containerStyle={styles.inputContainer}
              inputStyle={{ color: 'white', fontFamily: 'Righteous' }}
              onSubmitEditing={() => {
                this.signupButtonPressed()
              }}
            />
            <Button
              style={styles.buttonView}
              text="Sign Up"
              loading={isLoading}
              buttonStyle={[styles.loginButtonStyle, !this.signupValid() && { backgroundColor: 'gray' }]}
              disabled={!this.signupValid()}
              onPress={this.signupButtonPressed.bind(this)}
              textStyle={styles.buttonTextStyle}
            />
          </View>
        }
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputViewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    height: 45,
    marginVertical: 10,
  },
  buttonView: {
    marginTop: 40
  },
  loginButtonStyle: {
    width: 220,
    height: 50,
    backgroundColor: '#28ABEC'
  },
  buttonTextStyle: {
    fontFamily: 'Righteous',
    fontSize: 21
  },
});
