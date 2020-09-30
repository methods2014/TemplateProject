/*
* 轮播图卡片
*/
import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
//import { Carousel } from '@ant-design/react-native'
import { px2dp } from '../../utils/ScreenUtils'

const screenWidth = Dimensions.get('window').width

export default class CarouselCard extends React.Component {

  constructor(props) {
    super(props)
    this._initData()
  }

  _initData(){
    const { data, onPress} = this.props
    this._data = data
    this._onPress = onPress
  }

  _showItem = () => {
    return this._data.map((item, index) => {
      const imageSource = item.imgUrl
      return (
        <TouchableOpacity
          activeOpacity={1}
          key={index}
          onPress={() => this._onPress(item.navigate)}
        >
          <Image style={styles.swiperImage} source={{ uri: imageSource }}/>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Carousel
          dots={true}
          infinite={true}
          autoplay={true}
          autoplayInterval={3500}
          dotStyle={{
            backgroundColor: 'rgba(255,255,255,0.35)',
            width: px2dp(4),
            height: px2dp(2),
            borderRadius: 2.5,
            marginRight: px2dp(4),
            bottom: -10,
          }}
          dotActiveStyle={{
            backgroundColor: '#FFF',
            width: px2dp(8),
            height: px2dp(2),
            borderRadius: 100,
            marginRight: px2dp(4),
            bottom: -10,
          }}
        >
          {this._showItem()}
        </Carousel>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: px2dp(10),
    marginBottom: px2dp(10),
  },
  swiperImage: {
    width: screenWidth,
    height: screenWidth * 70 / 375
  }
})
