# AUTOCOMPLETE TEST(REACT

## TASK

The task is to implement an autocomplete input field component using following technologies:
-JavaScript / TypeScript
-React
-Radix Primitives
-Stitches
-Storybook (optional)

### The API of the component should consist of the following properties:

#### label

label of the input
-placeholder
placeholder of the input (when it's empty)

#### getDataSource

function that takes a filterValue as a parameter and returns promise that resolves to data source - an array of matching values, where a single item of an array is an object with id and label properties
label is a property that is displayed (and filter value matches against)
id is a property that is set as current value

#### value

current value (id from the data source)

#### filterValue

current filter value (text in the input that's also the parameter of getDataSource function)

#### exactMatch

boolean flag, if set to true, value is valid only if it's contained within data source, invalid value will be cleared on field blur

#### onChange

function that is called every time the value changes with event that caused the change as the first and value as the second parameter

#### onFilterValueChange

function that is called every time the filterValue changes with event that caused the change as the first and filterValue as the second parameter

### Popover with autocomplete suggestions is closed by default, opens after the user starts typing and closes either on click away or on value select.

You may load the sample data from this API: https://api.stg.behavera.com/v1/data_sources/preferences?lang=EN
Use e.g. payload.industries property of the response body as a static data source.

Visually you may draw inspiration from this figma file https://www.figma.com/file/phPjqQjvwBXrHoFCmEPJrT/Dropdown?node-id=0%3A1

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
