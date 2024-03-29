# React Native Introduction Slider Component

A React Native based component for creating slider in your application. 

## Getting started

- [Demo](#demo)
- [Installation](#installation)
- [Supported versions](#supported-versions)
- [Usage](#usage)
- [Props](#props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute?)
- [Need Help?](#need-help?)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#keywords)

## Demo

[![](IntroductionSlider.png)](https://github.com/weblineindia/React-Native-Introduction-Slider/blob/master/IntroductionSlider.png)

## Installation

`$ npm install rn-weblineindia-intro-slider --save`

## Supported versions

We have tested this component in ReactNative 0.60 - 0.66.4. You can still use it in other versions.

## Usage

Create a new component file and regiser AppIntro component with props data

```javascript
import AppIntro from 'rn-weblineindia-intro-slider';

const propData = {
    sourceType: 'URL',
    navigateTo: 'SelectionScreen',
    defaultTint: 'gray',
    selectedTint: 'black',
    buttonStyle: {
      fontSize: 15,
      color: 'white',
      textAlign: 'right',
    },
    DATA: ["https://picsum.photos/200/501", "https://picsum.photos/300/502"],
  };

export default const IntroductionSlider = ({ navigation }) => {
    return <AppIntro 
      extraData={propData}
      navigation={navigation}
      onSkipTapped={() => { navigation.goBack() }}
    />
  }
 
```

Register IntroductionSlider Component to the navigation stack

```javascript
import IntroductionSlider from '../IntroductionSlider';

<Stack.Screen 
    name="IntroductionSlider" 
    component={IntroductionSlider}
/>
```

Here is a sample screen through which you can navigate to the IntroductionSlider Component

```javascript
<TouchableOpacity onPress={()=> navigation.navigate('IntroductionSlider')}>
    // Your code here
</TouchableOpacity>
```

### Callback

```javascript
this.props.onSkipTapped(this.state.index);

onSkipTapped={() => 
  // callback actions here...
}
```

## Props

| **Props**            | **Type** | **Required** | **Description**                                                               |
|----------------------|----------|--------------|-------------------------------------------------------------------------------|
| sourceType           | `string` | yes          | Using which source you want to load images, either assets or from url.        |
| navigateTo           | `string` | yes          | Route name you want to navigate when user tapped on Skip or Continue          |
| defaultTint          | `string` | no           | Default tint color for page-control                                           |
| selectedTint         | `string` | no           | Selected tint color for page-control                                          |
| buttonStyle          | `object` | no           | Style for Skip and Continue text                                              |
| DATA                 | `object` | yes          | Array of images, it contain assets or url                                     |
| isAutoScroll         | `boolean`| no           | default true                                                                  |
| timeDuration         | `number` | no           | default 5 sec, For better result use max 3 sec                                |

## Methods

| **Method**           | **Description**                                                             |
|----------------------|-----------------------------------------------------------------------------|
| onSkipTapped         | Callback method that is called when user pressed on Skip or Cancel button.  |

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this ReactNative Introduction Slider Component in their software project. In case you want to customize this Introduction Slider Component to suit your development needs, then feel free to contact our [ReactNative developers](https://www.weblineindia.com/hire-react-native-developers.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

------

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/React-Native-Introduction-Slider/blob/master/LICENSE

------

### Keywords

 rn-weblineindia-intro-slider, react-native-intro-slider, intro-slider, introduction-slider, react-native
