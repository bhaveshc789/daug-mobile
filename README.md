# Daug mobile app

This repo is the mobile app for Daug. It was built as part of the [MobileSpace](http://mobilespace.xyz/) [Season 2](https://github.com/mobilespace/Season2#season-2---looking-ahead) course by [Monte Thakkar](https://github.com/monte9/).

## What's Daug?

**Daug is a social network for pets.**

- Your pets can **sign up or login** using their paws.
- They can **upload selfies** or **post their thoughts** for other pets to see.
- They can also look at **other pets posts** and either **paw** (like) or **scratch** (dislike) it.

### [Demo - Try it on Expo](https://exp.host/@monte9/daug-mobile)

## Getting started

```
git clone git@github.com:mobilespace/daug-mobile.git

exp start

exp ios
```

## Designs

Intro, Login & Sign Up screens are based on **Robinhood App**.

Profile screen is based on **Instagram**.

Social Feed screen is based on **Facebook**.

### Other design ideas

- [Login screen designs on Pinterest](https://www.pinterest.com/timoa/mobile-ui-logins/?lp=true)
- [Mobile UI on Dribble](https://dribbble.com/search?q=mobile+UI)
- [Instagram UI kit - Sketch file](https://www.sketchappsources.com/free-source/2023-instagram-based-ui-kit-sketch-freebie-resource.html)

## Assignment #1

### Objectives

- Learn how to build & organize screens in RN
- Learn advanced RN styling and use LinearGradient, Image, Icons & Custom Fonts
- Learn how to use mock data for prototyping UI screens
- Learn how to use NPM libaries such as React Native Elements, Expo & React Native Vector Icons

### TODO

- [x] Design & build an Intro Screen
  - [ ] :star: **Bonus:** Add [Snap Carousel](https://github.com/archriss/react-native-snap-carousel) with [Lottie animations](https://docs.expo.io/versions/latest/sdk/lottie.html) to Intro Screen
- [x] Design & build a Signup Screen
  - [ ] :star: **Bonus:** Add buttons to sign up with Facebook & Twitter
- [x] Design & build a Login Screen
  - [ ] :star: **Bonus:** Add buttons to login with Facebook & Twitter
- [x] Design & build a Profile Screen
  - [x] :star: **Bonus:** Add the Logout button
- [x] Design & build a Social Feed Screen with [Mock Data](https://raw.githubusercontent.com/mobilespace/daug-mobile/c4d4a331564ee490e1162f3733f3023afe3defc3/app/utils/constants.js)
- [x] Attach screenshots/gif of screens to `README.MD`

### Screenshots

<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/intro_screen.png" width="250" />
</div>
<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/login_screen_1.png" width="250" />
  <img src="screenshots/login_screen_2.png" width="250" />
  <img src="screenshots/login_screen_3.png" width="250" />
</div>
<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/signup_screen_1.png" width="250" />
  <img src="screenshots/signup_screen_2.png" width="250" />
  <img src="screenshots/signup_screen_3.png" width="250" />
</div>
<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/profile_screen.png" width="250" />
</div>
<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/social_feed_screen_1.png" width="250" />
  <img src="screenshots/social_feed_screen_2.png" width="250" />
  <img src="screenshots/social_feed_screen_3.png" width="250" />
</div>

## Assignment #2

### Objectives

- Learn how to build navigation for Daug app using [React Navigation](https://reactnavigation.org/)
- Learn mobile design patterns for navigation & screen layouts
- Learn how to quickly build RN screens and hook them up using navigation

### TODO

- [x] Understand the 3 main navigation patterns for mobile apps:
  - [x] [StackNavigator](https://reactnavigation.org/docs/hello-react-navigation.html#creating-a-stacknavigator)
  - [x] [TabNavigator](https://reactnavigation.org/docs/tab-based-navigation.html)
  - [x] [DrawerNavigator](https://reactnavigation.org/docs/drawer-based-navigation.html)
- [x] Setup a **IntroStack** (using StackNavigator) for the Intro Screen (root), Login Screen (push) & Sign Up Screen (push)
- [x] Setup a **HomeTabs** (using TabNavigator) for the Social Feed Screen (default) and Profile Screen
- [x] Setup a **RootNavigator** (using StackNavigator) with the **IntroStack** & **HomeTabs** with `mode: "modal"`
- [x] Design & build an Edit Profile Screen
- [x] Setup a **ProfileStack** (using StackNavigator) for the Profile Screen (root), Post Details Screen (push) & Edit Profile Screen (modal) with mode: "modal" and custom RNE header component
- [x] Design & build a Post Details Screen
- [x] Design & build a Create Post Screen
- [x] Setup a **SocialStack** (using StackNavigator) for the Social Feed Screen (root), Post Details Screen (push) & Create Post Screen (modal) with mode: "modal" and custom RNE header component
- [x] :star: **Bonus:** Display Posts on ProfileScreen
- [ ] :star: **Bonus:** Setup a **HomeNavigator**(using DrawerNavigator) with the **HomeTabs** (as root) and update **RootNavigator** to use **HomeNavigator** instead of **HomeTabs**
- [x] Add working gif of app to `README.MD`

### Demo
![assignment_2](https://i.imgur.com/XheHhg5.gif)

## Assignment #3

### Objectives

- Learn how to make backend API calls and User Authentication
- Learn how to setup an Authnetication UI flow using AsyncStorage
- Serve as an React Native app that you can showcase on your porfolio

#### URL: [https://daug-app.herokuapp.com/](https://daug-app.herokuapp.com)

### API

```
**Namespace:** `/auth`

// User Authentication endpoints
router.post('auth/signup'); // CREATE
router.post('auth/login'); // VALIDATE / READ


**Namespace:** `/api`

// All data endpoints
router.get('api/users/all'); // READ
router.get('api/posts/all'); // READ

// Social Feed endpoints
router.get('api/feed'); // READ

// User data endpoints
router.get('api/users/:userId'); // READ
router.put('api/users/:userId'); // UPDATE

// Posts endpoints
router.get('api/posts/:postId'); // READ
router.post('api/users/:userId/posts'); // CREATE
router.put('api/users/:userId/posts/:postId'); // UPDATE
router.delete('api/users/:userId/posts/:postId'); // DELETE

// Follower endpoints
router.get('api/users/:userId/followers'); // READ
router.get('api/users/:userId/following'); // READ
router.post('api/users/:userId/follow/:followingId'); // CREATE
router.post('api/users/:userId/unfollow/:followingId'); // DELETE

// Like endpoints
router.get('api/posts/:postId/likes'); // READ
router.post('api/posts/:postId/like/:userId'); // CREATE
router.post('api/posts/:postId/unlike/:userId'); // DELETE

// Comment endpoints
router.get('api/posts/:postId/comments'); // READ
router.post('api/posts/:postId/comment/:userId'); // CREATE
router.post('api/posts/:postId/uncomment/:userId'); // DELETE
```

### TODO

- [x] Intro Screen - Make simple **`GET`** request to **`/api`** to check server status
- [x] Signup Screen - Make **`POST`** request to **`/auth/signup`** to create a new user
	- [ ] :star: **Bonus:** Add UI validation to Signup Screen - name (not null), email (format) & password (min. 8 characters)
- [x] Login Screen - Make **`POST`** request to **`/auth/login`** to validate and login an existing user
	- [ ] :star: **Bonus:** Add UI validation to Login Screen - email (format) & password (min. 8 characters)
- [x] Social Feed Screen - Make **`GET`** request to **`/api/feed/`** to get all posts for social feed
	- [x] :star: **Bonus:** Use `ActivityIndicator` to show placeholder loading when fetching feed data
	- [x] :star: **Bonus:** Use `DeviceEventEmitter` to trigger fetching posts when the `new_post_created` event is emitted
	- [x] :star: **Bonus:** Use `timeSince()` utility function to show relative times for post creation
- [x] Create Post Screen - Make **`POST`** request to **`/api/users/:userId/posts`** to create a new post by the user
  - [x] Use ImagePicker (expo) to allow the user to add a picture to the post - [Snack demo here](https://snack.expo.io/SyyDo-rr-)
	- [x] :star: **Bonus:** Use `DeviceEventEmitter` to emit `new_post_created` event once post is created
- [x] Profile Screen - Make **`GET`** request to **`/api/users/:userId`** to get all the profile data
	- [x] :star: **Bonus:** Use `ActivityIndicator` to show placeholder loading when fetching profile data
	- [x] :star: **Bonus:** Use `DeviceEventEmitter` to trigger fetching profile data when the `user_profile_updated` event is emitted
- [x] Edit Profile Screen - Make **`PUT`** request to **`/api/users/:userId`** to update a user's profile information
	- [x] :star: **Bonus:** Use `DeviceEventEmitter` to emit `user_profile_updated` event once user data is updated
- [x] Setup Authentication flow for app using `AsyncStorage`. Once the user has logged in then take them to home page each time they open the app again

## Wrap up

### Objectives

- Add UI polish, tie up loose end and add remaining functionality
- Update Readme with app details and publish Expo app for demo
- Serve as an React Native app that you can showcase on your porfolio

### TODO
- [x] Add Like, Comment and Follow API functionality
- [x] Clean up and format `README.MD` to showcase app - [follow this template](https://github.com/mobilespace/MobileGuides/blob/master/showcase_app_readme.md#readme-template-for-showcasing-a-mobile-app)
- [ ] :star: **Bonus:** Add phone number UI to Edit Profile screen
- [ ] :star: **Bonus:** Add Camera functionality to Create Post screen
- [ ] :star: **Bonus:** Use Redux to share state between tab bar & screens
- [x] Add working gif of app to `README.MD`

### Demo

<img src="/screenshots/daug-app-wrap-up.gif" width="300" />

## Submission

Once you have completed each assignment above, please create a new issue on this repo with the title as your name and add the link to your repo in the description. Additionally please publish your Expo app and add the link as a comment on your submission issue. One of the TA's will review your code and add your name to the list of completed submissions below if all looks good.

## Problems?

In case you run into any problems or issues, please post it on #questions channel on the MobileSpace Slack.

## Finally

For any other questions about this repo or MobileSpace in general please reach out to [**@monte9**](https://github.com/monte9) on Github.
