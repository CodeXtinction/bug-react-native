# react-native android:windowSoftInputMode="adjustResize" bug

Tested on android only.

android:windowSoftInputMode="adjustResize" will not work with StatusBar hidden="true"

reproduce this issue.

git clone https://github.com/CodeXtinction/bug-react-native.git

npm install

react-native link

react-native run-android

change values Statusbar hidden prop (true or false) at ./App.js

Statusbar hidden={false} android:windowSoftInputMode="adjustResize" will work perfect

![alt tag](https://media.giphy.com/media/l0Iy0YYaosV6V1zyM/giphy.gif)


Statusbar hidden={true} android:windowSoftInputMode="adjustResize" will not work

![alt tag](https://media.giphy.com/media/3o7btQTfZTUGIlGSBO/giphy.gif)
