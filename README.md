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

### 4. Text

- It is used to display the text in our app
- we should not place our text anywhere in the app

```js
<Text numberOfLines={1}>Hello world</Text>
```

> Here numberOfLines will display in the single line and truncate the text if it is too long.
