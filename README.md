## React Native

### 1. What is react native ?

- It is a framework for building a native mobile application with the React JS Library.
- It is a great choice for the developers who are already familiar with React for web.

### 2. How react native works?

- It uses a JavaScript runtime environment called JavaScriptCore for iOS and JavaScript engine for Android.
- It uses a bridge to communicate between JavaScript and native code.
- UI Components => Javascript Logic => React Native Bridge => Native Components & Andorid/IOS APIs
- It also create a component tree just like the react.

### 3. Benefit of using React Native?

- Cross -platform and single codebase
- Faster development
- Cost-effective
- Access to native APIs
- Huge community and ecosystem
- Hot reloading

### 4. Before Learning React Native

- You should have a good understanding of React and JavaScript.
- You should have a good understanding of the native platform you are targeting (iOS or Android).

### 5. Expo vs React Native CLI

- Expo is a framework that sits on top of React Native and provides a lot of additional functionality and tools.
- React Native CLI is the official command line interface for React Native.
- Expo is easier to use and provides a lot of additional functionality, but it also adds some overhead.
- React Native CLI is more lightweight and gives you more control over the underlying React Native code.
- Expo is a good choice if you are new to React Native and want a lot of additional functionality and tools.
- React Native CLI is a good choice if you are an experienced developer and want more control over the code.

### 4. Core Component and API's

#### 1. View

- It is the most basic component/elements in React Native.
- You can consider view as a dive element in html.
- It can have a style, children, and other props.
- It can also support the synthetic touch events, which can be useful for different purpose.

```js
import React, { Component } from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View>
      <View>
        <Text>This is my text</Text>
      </View>
    </View>
  );
};
export default App;
```

#### 2. Text

- It is used to display the text in our app
- we should not place our text anywhere in the app
- we have different event attached to this text. For eg. `onPress`

```js
<Text numberOfLines={1}>Hello world</Text>
```

> Here numberOfLines will display in the single line and truncate the text if it is too long.

#### 3. Images

- We can use `Image` component to display the image in our app
- We use `source` attribute to load the image from the local file system or network
- We can use `require` to load the image from the local file system, `uri` to load the image from the network

```js
  <Image source={{
    width:100,
    height:100,
    require('./assets/background.png')}}
  />
  <Image source={{
    uri('https://imagepath.com/rajan.png')
    }}
  />

```

#### 4. Touchable

- It is used to create interactive elements that responds to the user touch events such as taps, long press or gesture.
- We have different types of touchable elements such as `TouchableOpacity`, `TouchableHighlight`, `TouchablWithoutFeedback`, `TouchableNativeFeedback`.
- These components are essential for building buttons, interactive icons, or any UI that interacts to user input.

##### a. Touchable Opacity

- It is used to create a button that changes its opacity when pressed.

Props

- `onPress`: Function called when the component is tapped.
- `activeOpacity`: Determines the opacity when pressed (default is 0.2).
- `disabled`: If true, disables touch events.
- `style`: Styles for the touchable container.
- `onLongPress`, `onPressIn`, `onPressOut`: Handle long presses or press start/end events.

##### b. TouchableHighlight

- It is used to create a button that changes its background color when pressed.
- It is similar to `TouchableOpacity` but it changes the background color of the button when pressed.

Props

- `underlayColor`: Color of the background when pressed (default is a dark shade).
- other props are similar to the TouchableOpacity

##### c. TouchableWithoutFeedback

- It is used to create a button that doesn’t change its appearance when pressed.

Props

- `onPress`, `onLongPress`, `onPressIn`, `onPressOut`, `disable` similar as above.

> Note: It doesnot support the style attribute

##### d. TouchableNativeFeedback (only Android)

- Provides native Android touch feedback, such as a ripple effect, when pressed. Not available on iOS.

Props

- `onPress`, `disable` similar as above.
- `background`: Defines the ripple effect (e.g., TouchableNativeFeedback.Ripple(color, borderless)).
- `useForeground`: If true, ripple effect is drawn in the foreground (requires Android API 23+).

#### 5. Button

- It is used to create a button that can be pressed by the user.
- It can be customized with different styles and props.

Props

- `title`: The text to be displayed on the button.
- `titleStyle`: Styles for the title.
- `onPress`: Function called when the button is pressed.
- `disabled`: If true, disables the button.
- `style`: Styles for the button.
- `accessibilityState`: Accessibility state of the button.
- `accessibilityRole`: Accessibility role of the button.
- `accessibilityLabel`: Accessibility label of the button.
- `accessibilityHint`: Accessibility hint of the button.

### 6. Alert

- It is used to display an alert message to the user.

```js

// For showing the alert
Alert.alert('Title of alertbox','Message of alert',[
  {text:'Yes', onPress()=>{}},
  {text:'No', onPress()=>{}}
])


// For taking the user input in the prompt
Alert.prompt('Title','Message',(text)=>console.log(text))

```

#### 7. StyleSheet

- It is used to define styles for components. It is similar to CSS in web development.
- we can use the inline style and the style from the stylesheet.

```js
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 12,
    color: "white",
  },
});
```

> Note: If you want to pass multiple styles you can use square bracket like `style={[styles.container,styles,container2, {backgroundColor:"red"}]}`

#### 8. Platform Specific Code

- We can use the `Platform.OS` to check the platform and use the platform specific code.

```js
const styles = new StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
```

> Note: Here the `StatusBar` is used to get the properties of the status bar.

### 5. Layout

#### 1. Dimension

- In order to get our screen size and the window size we can use this `Dimension` API form react-native
- We can use `Dimensions.get('window')` to get the window size and `Dimensions.get('screen')` to get the screen size.

-> Note: This Dimensions api will not rerender if we change the device orientation.

##### Detecting Device Orientation

- In order to get the updated dimension based on the device orientation we can use the this hooks `useDimensions` from @react-native-community/hooks
- And also to get the device orientation we can use `useDeviceOrientation` hooks from the same library.

> Note: we need to install this package in our project before using these hooks `npm install @react-native-community/hooks`

#### 2. Flex

- We can use the flexbox layout to create a responsive layout.

```js
<View
  style={{
    backgroundColor: "red",
    flex: 1, // this will take the full screen/ available all space in the screen
    flexDirection: "column", // default value=>  this will arrange the children in column
    justifyContent: "center", // this will center the children vertically
    alignItems: "center", // this will center the children horizontally
    flexWrap: "wrap", // default=>nowrap this will wrap the children to the next line
  }}
>
  <View
    style={{
      backgroundColor: "green",
      flexBasis: "50%", // 100 or 'auto'
      flexGrow: 1, // if the first has this value 2 and second view has 1 then first will take 2/3 of the space and second will take 1/3
      flexShrink: 1, // it is the opposite of flexGrow
    }}
  ></View>
</View>
```

> Note: If the main view has 3 other views and first view has the flex value as 2, second view has the flex value as 1 and third view has the flex value as 1 then the first view will take `2/4 or half` of the available space and the other two views will take

> Tips: When we use the `flexWrap as wrap` then the `alignItems` will act differently. Now to align the items in the center of the screen we must be `alignContent` to center

> In react native by default we have the current position set to `relative` so. we can move the element from their current postion to the new postion using `top, bottom,left, right`. If we set the postion to `absolute` then the element will be postioned relative to `parent`.
