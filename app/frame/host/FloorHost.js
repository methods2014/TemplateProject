import BaseHost from './BaseHost'
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native'
import RootView from '../view/RootView'
import HeaderCard from '../card/base/HeaderCard'
import React from 'react'
import CardsManager from '../manager/CardsManager'
import PagesManager from '../manager/PagesManager'

export default class FloorHost extends BaseHost{

  constructor(props) {
    super(props)
    this.page = PagesManager.getPage(this.props.page)
    this.cards = this.page.data.cards

  }

  componentDidMount() {//页面进入的时候会执行此方法
  }

  componentWillUnmount() { //页面退出的时候会执行此方法
  }

  // 显示item
  _renderCards = () => {
    if(!this.cards){
      return null
    }
    const result = []
    let host = this
    this.cards.map((card, index) => {
      let cardView = CardsManager.getCard(card, this._onPress, index, host)
      if (cardView) {
        result.push(cardView)
      }
    })
    return result
  }

  render() {
    return (
/*      <View style={styles.container}>
        {this._renderCards()}
      </View>*/
      <RootView style={styles.container}>
        {this.page.data.header ? <HeaderCard data={this.page.data.header} onPress={this._onPress} /> : null}
        <ScrollView  keyboardShouldPersistTaps="handled" style={[{backgroundColor: '#ffffff', flex: 1 },(this.style)]}>
          {this._renderCards()}
        </ScrollView>
      </RootView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
