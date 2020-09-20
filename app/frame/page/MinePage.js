
/**
 * 首页配置文件
 */
export default function MinePage(page) {

  let data = {
    'header':{
      'title':'我的',
      'hideRight':true
    },
    "cards":[
      {
        "name": "EntryCard",
        "data": {
          "leftText": '联系开发者',
          'showRightImage':true
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '关于',
          'showRightImage':true
        }
      }
    ]
  }
  return {
    code: '10000',
    page :"MinePage",
    data: data
  }
}
