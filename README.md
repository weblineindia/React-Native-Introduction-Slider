# React-Native-Introduction-Slider

A React Native based component for creating slider in your application. 

## Getting started

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

## Installation

`$ npm install rn-weblineindia-intro-slider --save`

## Supported versions

We have tested this component in ReactNative 0.60 - 0.62.5. You can still use it in other versions.

## Usage

To use it, register Intro-Slider Component to the navigation stack

```javascript
import IntroductionSlider from 'rn-weblineindia-intro-slider';

<Stack.Screen 
    name="IntroductionSlider" 
    component={IntroductionSlider}
/>
```

Here is a sample screen in which you can implement the Intro-Slider Component

```javascript
navigateIntroduction() {
    this.props.navigation.navigate('IntroductionSlider', {
    // Pass all props here... 
      extraData={{
        sourceType: 'URL',
        navigateTo: 'SelectionScreen',
        defaultTint: 'gray',
        selectedTint: 'black',
        buttonStyle: {
          fontSize: 15,
          color: 'white',
          textAlign: 'right',
        },
        DATA: URLDATA,
      }}
    });
  }

<TouchableOpacity onPress={()=> this.navigateIntroduction()}>
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
