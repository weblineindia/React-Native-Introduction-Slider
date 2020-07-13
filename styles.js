import { StyleSheet, Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  flatList: {
    flex: 1,
    // backgroundColor: 'gray',
  },
  footer: {
    position: 'absolute',
    height: '7%',
    width: ScreenWidth,
    left: 0,
    bottom: 0,
    // flexDirection: 'row',
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'purple',
  },
  pageControl: {
    flex: 3,
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    // marginBottom: ScreenWidth * 0.15,
    // alignSelf: 'flex-start',
  },
  skipSlideShow: {
    width: '100%',
    height: 30,
  },
  initAgreeButton: {
    width: ScreenWidth * 0.3,
    // height: ScreenWidth * 0.13,
    // backgroundColor: 'green',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    // alignItems: 'center',
    fontSize: 13,
    borderRadius: ScreenHeight * 0.5,
    marginRight: ScreenWidth * 0.03,
  },
  initAgreeBtnText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'right',
    // backgroundColor: 'blue',
    // fontFamily: RobotoMedium,
  },

  // --- SlideShow Item - CSS ---
  bannerView: {
    flex: 1,
  },
  banner: {
    height: ScreenHeight,
    width: ScreenWidth,
  },
  // --- PageControl Item - CSS ---
  dotListView: {
    flex: 1,
    justifyContent: 'center',
  },
  dotView: {
    width: 7,
    height: 7,
    borderRadius: 5,
    // backgroundColor: 'green',
    marginHorizontal: 4,
  },
});
export default styleSheet;
