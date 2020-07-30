/**
Author Name  :  WeblineIndia  |  https://www.weblineindia.com/

Support : In case you want to customize this code library to suit your development needs, then feel free to contact.

For more such software development components and code libraries, visit us at
https://www.weblineindia.com/software-development-resources.html 

Our Github URL : https://github.com/weblineindia
**/
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import {
  View, TouchableOpacity, FlatList, ImageBackground, Text, StatusBar, Alert,
} from 'react-native';
import styleSheet1 from './styles';


type IProps = {
  navigation: Object,
  setAppIntroData: Function,
  extraData: Object,
  defaultTint: String,
  selectedTint: String,
  onSkipTapped: Function,
};

type IState = {
  pageIndex: Number,
  isFromPageControl: Boolean,
};

let timeInterval;
var animaInterval = null;

export default class AppIntro extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      isFromPageControl: true,
    };
    console.log('--props--', this.props.extraData.defaultTint);
    if (this.props.extraData.defaultTint === undefined) {
      this.props.extraData.defaultTint = 'gray';
    }
    if (this.props.extraData.selectedTint === undefined) {
      this.props.extraData.selectedTint = 'lightgray';
    }
    if (this.props.extraData.buttonStyle === undefined) {
      this.props.extraData.buttonStyle = {
        fontSize: 15,
        color: '#000000',
        textAlign: 'right',
      };
    }
    if (this.props.extraData.isAutoScroll === true) {
      if(this.props.extraData.timeDuration === undefined){
        timeInterval = 3000;
      } else if (this.props.extraData.timeDuration <= 2000){
        timeInterval = 3000;
      } else {
        timeInterval = this.props.extraData.timeDuration;
      }
      this.setIntervalToScroll();
    } else {
      clearInterval(animaInterval);
    }
  }

  setIntervalToScroll() {


    // To set time interval for jump to next page

    animaInterval = setInterval(
      function () {
        if (this.props.extraData.isAutoScroll === true) {
          const { pageIndex } = this.state;
          let nextIndex = 0;

          if (pageIndex < this.props.extraData.DATA.length - 1) {
            nextIndex = pageIndex + 1;
          }

          this.setState({ pageIndex: nextIndex }, () => {
            if (nextIndex === (this.props.extraData.DATA.length - 1)){
              this.scrollToIndex(nextIndex, nextIndex === 0 ? false : true);
              clearInterval(animaInterval);
            } else {
              this.scrollToIndex(nextIndex, nextIndex === 0 ? false : true);
            }
          });
        } else {
          clearInterval(animaInterval);
        }
      }.bind(this),
      timeInterval,
    );
  }

  /**
   * Method for verifying list refrence exists or not
   * Apply animation when move to next page or index with timeout
   *
   * @param {*} index
   * @param {*} animated
   */

  scrollToIndex = (index, animated) => {
    this.ref_flatList && this.ref_flatList.scrollToIndex({ index, animated });
    this.flatList_Ref && this.flatList_Ref.scrollToIndex({ index, animated });
  };

  onScrollEnd(e) {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const pageNum = Math.round(contentOffset.x / viewSize.width);
    if (this.state.isFromPageControl) {
      this.setState({ pageIndex: pageNum });
    }
    console.log('--pageNum--', pageNum, viewSize.width);
    setTimeout(() => {
      this.flatList_Ref.scrollToIndex({ animated: true, index: pageNum });
    }, 0.5);
  }

  renderBanner = (banner) => (
    <View style={styleSheet1.bannerView}>
      <ImageBackground
        style={styleSheet1.banner}
        source={this.props.extraData.sourceType === 'LOCAL' ? banner.bannerImage : { uri: banner }}
        resizeMode="cover"
      />
    </View>
  );

  renderPageControl = (index) => (
    <View style={styleSheet1.dotContainer}>
      <View
        style={[styleSheet1.dotView,
          {
            backgroundColor: this.state.pageIndex === index ?
              this.props.extraData.selectedTint : this.props.extraData.defaultTint,
          },
        ]}
      />
    </View>
  );

  closeHelp() {
    if (this.props.onSkipTapped) {
      this.props.onSkipTapped(this.state.index);
    }
    clearInterval(animaInterval);
    this.props.navigation.navigate('SelectionScreen');
  }

  scrollNext() {
    if (this.state.pageIndex < this.props.extraData.DATA.length - 1) {
      this.setState({ isFromPageControl: false, pageIndex: this.state.pageIndex + 1 }, () => {
        this.ref_flatList.scrollToIndex({ animated: true, index: this.state.pageIndex });
      });
    }
  }

  scrollPrev() {
    if (this.state.pageIndex > 0) {
      this.setState({ isFromPageControl: false, pageIndex: this.state.pageIndex - 1 }, () => {
        this.ref_flatList.scrollToIndex({ animated: true, index: this.state.pageIndex });
      });
    }
  }

  render() {
    console.log('render pageNum - ', this.state.pageIndex, this.state.pageIndex);
    return (
      <View style={styleSheet1.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <FlatList // first
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          style={styleSheet1.flatList}
          data={this.props.extraData.DATA}
          renderItem={({ item, index }) => this.renderBanner(item, index)}
          keyExtractor={(banner) => banner.id}
          onMomentumScrollEnd={(e) => this.onScrollEnd(e)}
          onScrollBeginDrag={() => this.setState({ isFromPageControl: true })}
          ref={(refe) => {
            this.ref_flatList = refe;
          }}
        />
        <View style={styleSheet1.footer}>
          <View style={styleSheet1.pageControl}>
            <FlatList // second
              scrollEnabled={false}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              style={styleSheet1.flatList}
              data={this.props.extraData.DATA}
              renderItem={({ index }) => this.renderPageControl(index)}
              keyExtractor={(banner) => banner.id}
              ref={(ref) => {
                this.flatList_Ref = ref;
              }}
            />
          </View>

          <View style={styleSheet1.skipSlideShow}>
            <TouchableOpacity onPress={() => this.closeHelp()}>
              <View style={styleSheet1.initAgreeButton}>
                <Text style={this.props.extraData.buttonStyle}>{this.state.pageIndex === (this.props.extraData.DATA.length - 1) ? 'Continue' : 'Skip'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

AppIntro.defaultProps = {
  extraData: {
    defaultTint: 'white',
    selectedTint: 'darkgray',
  },
};
