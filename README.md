# React Native Web with TypeScript

![image](https://i.imgur.com/sa5z3DR.gif)

## Install

```sh
$ gem install cocoapods
$ npm i -g yarn
$ git clone git@github.com:ethanneff/react-native-web-typescript.git
$ cd react-native-web-typescript
$ yarn install
$ cd ios
$ pod install
$ cd ..
```

### Android Keystore

```
$ cd android/app
$ keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

## Run

### Web
```sh
$ yarn web
```

### Android
```sh
$ yarn start
$ yarn android
```

### iOS
```sh
$ yarn start
$ yarn ios
```
