import { Component } from 'react'

export default class BaseHost extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {//页面进入的时候会执行此方法
  }

  componentResume() { //页面返回的时候会执行此方法
  }

  componentPause() { //页面返回的时候会执行此方法
  }

  componentWillUnmount() { //页面退出的时候会执行此方法
  }

  /**
   * 处理逻辑和页面的地方
   * @param navigate
   * @private
   */
  _handle = (navigate) => {
    //LogicManager(this, navigate)
  }

  /**
   * 页面通用点击事件处理方法
   * @param navigate 接收导航对象
   * 目前的实现是传入一个对象包含type信息，和data数据，这两个是项目中一直使用的方法，
   * 格式：{navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"CurrentGladScreen"},otherData:'otherData'}
   * 另外项目中还有一种传递data.pagecode和data.pageparas的方式，后期可以一起实现或者合并成一套,格式见首页弹窗跳转
   */
  _onPress = (navigate) => {
    console.log('-----onPress-----navigate=' + JSON.stringify(navigate))
    if(!navigate){
      return
    }
    switch (navigate.type) {
      case 'back':
        this.props.navigation.goBack()
        break
    }
  }
}
