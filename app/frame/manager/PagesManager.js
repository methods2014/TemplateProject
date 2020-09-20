/**
 * 页面配置管理器，所有卡片在此注册
 */
import MinePage from '../page/MinePage'

export default class PagesManager{

  static getPage(page){
    if(!page || !page.name){
      return null;
    }
    switch (page.name) {
      //floor
      case 'MinePage': //信用卡列表
        return MinePage(page)
    }
  }
}
