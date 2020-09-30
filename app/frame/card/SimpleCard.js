import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native'
import { px2sp, px2dp } from '../utils/ScreenUtils'

// 获得屏幕宽高
const screenWidth = Dimensions.get('window').width

export default class SimpleCard extends React.Component {

  constructor(props) {
    super(props)
    this._initData()
  }

  _initData(){
    const { data, onPress} = this.props
    this._data = data
    this._onPress = onPress
  }

  render() {
    return (
        <View style={styles.wrapper}>
            <Text allowFontScaling={false} style={{ fontSize: px2sp(20), color: '#333', fontWeight: '800' }} numberOfLines={1}>{this._data.title ? this._data.title : '最简单的卡片~'}</Text>
        </View >
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth,
    height: (screenWidth - px2dp(32)) * 162 / 343,
    paddingHorizontal: px2dp(32),
    paddingTop: px2dp(20),
    paddingBottom: px2dp(16),
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#fff0f0'
  },
  title: {
    fontSize: px2sp(16),
    color: '#F34',
  },
})

