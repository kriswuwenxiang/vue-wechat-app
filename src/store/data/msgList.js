import contact from './contacts' //存放所有联系人的数据
const msgList = [ //消息列表
  {
    "mid": 1, //消息的id 唯一标识
    "type": "friend", //消息类型
    "group_name": "", //群名称
    "group_qrCode": "", //群code 唯一标识
    "stick": false, //true：置顶  false：不置顶
    "newMsgCount": 3, //新消息个数
    "quiet": false, // true：消息免打扰  false：提示此好友/群的新消息
    "lastMsgDate": 1548403850000, //最新消息时间
    "lastMsgContent": '来呀 快活啊', // 最新消息内容
    "msg": [
      { //对话框的聊天记录 新消息 push 进
        "sender": 'ad',
        "type": 'text',
        "content": "长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单",
        "date": 1546589641000,
        "name": "阿荡",
        "headerUrl": require("@/assets/images/header/header01.png")
      }, {
        "sender": 'ad',
        "type": 'text',
        "content": '点击空白处，操作菜单消失',
        "date": 1546590830000,
        "name": "阿荡",
        "headerUrl": require("@/assets/images/header/header01.png")
      }, {
        "sender": 'self',
        "type": 'text',
        "content": '你好',
        "date": 1546590840000,
        "name": "我",
        "headerUrl": require("@/assets/images/header/header01.png")
      }, {
        "sender": 'ad',
        "type": 'text',
        "content": '来呀 快活啊',
        "date": 1548403850000,
        "name": "阿荡",
        "headerUrl": require("@/assets/images/header/header01.png")
      }],
    "user": [contact.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
  },
  {
    "mid": 2,
    "type": "group",
    "group_name": "收购万达讨论群",
    "group_qrCode": "",
    "stick": false,
    "newMsgCount": 2,
    "quiet": false,
    "lastMsgDate": 1547797570000,
    "lastMsgContent": '我试一试',
    "msg": [{
      "sender": 'yh',
      "type": 'text',
      "content": "长按消息，唤醒消息操作菜单",
      "date": 1547793061000,
      "name": "夜华",
      "headerUrl": require("@/assets/images/header/yehua.jpg")
    }, {
      "sender": 'ad',
      "type": 'text',
      "content": '点击空白处，操作菜单消失',
      "date": 1547793149000,
      "name": "阿荡",
      "headerUrl": require("@/assets/images/header/header01.png")
    },
      {
        "sender": 'yh',
        "type": 'text',
        "content": '我试一试',
        "date": 1547797570000,
        "name": "夜华",
        "headerUrl": require("@/assets/images/header/yehua.jpg")
      }
    ],
    "user": [contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua')]
  },
  {
    "mid": 3,
    "type": "group",
    "group_name": "收购淘宝群",
    "group_qrCode": "",
    "stick": false,
    "newMsgCount": 1,
    "quiet": true,
    "lastMsgDate": 1547798978000,
    "lastMsgContent": '冒个泡',
    "msg": [{
      "sender": 'zgl',
      "type": 'text',
      "content": '冒个泡',
      "date": 1547798978000,
      "name": "诸葛亮",
      "headerUrl": require("@/assets/images/header/zhugeliang.jpg")
    }],
    "user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_guangyu')]
  },
  {
    "mid": 4,
    "type": "friend",
    "group_name": "",
    "group_qrCode": "",
    "stick": false,
    "newMsgCount": 0,
    "quiet": false,
    "lastMsgDate": 1548144313000,
    "lastMsgContent": '容我三思',
    "msg": [{
      "sender": 'sq',
      "type": 'text',
      "content": "长按消息，唤醒消息操作菜单",
      "date": 1547798978000,
      "name": "孙权",
      "headerUrl": require("@/assets/images/header/sunquan.jpg")
    }, {
      "sender": 'sq',
      "type": 'text',
      "content": '点击空白处，操作菜单消失',
      "date": 1547798999000,
      "name": "孙权",
      "headerUrl": require("@/assets/images/header/sunquan.jpg")
    }, {
      "sender": 'sq',
      "type": 'text',
      "content": '容我三思',
      "date": 1548144313000,
      "name": "孙权",
      "headerUrl": require("@/assets/images/header/sunquan.jpg")
    }],
    "user": [contact.getUserInfo('wxid_sunquan')]
  },
  {
    "mid": 5,
    "type": "friend",
    "group_name": "",
    "group_qrCode": "",
    "stick": true,
    "newMsgCount": 1,
    "quiet": false,
    "lastMsgDate": 1549958491713,
    "lastMsgContent": '夫君,身体要紧~',
    "msg": [{
      "sender": 'ssx',
      "type": 'text',
      "content": '夫君,身体要紧~ ',
      "date": 1549958491713,
      "name": "孙尚香",
      "headerUrl": require("@/assets/images/header/sunshangxiang.jpg")
    }],
    "user": [contact.getUserInfo('wxid_sunshangxiang')]
  },
  {
    "mid": 6,
    "type": "friend",
    "group_name": "",
    "group_qrCode": "",
    "stick": false,
    "newMsgCount": 1,
    "quiet": true,
    "lastMsgDate": 1549960328060,
    "lastMsgContent": '三姓家奴！',
    "msg": [{
      "sender": 'gy',
      "type": 'text',
      "content": '三姓家奴！',
      "date": 1549960328060,
      "name": "关羽",
      "headerUrl": require("@/assets/images/header/guangyu.jpg")
    }],
    "user": [contact.getUserInfo('wxid_guangyu')]
  },
  //{
  //  "mid": 7,
  //  "type": "group",
  //  "group_name": "帅哥群",
  //  "group_qrCode": "",
  //  "stick": false,
  //  "newMsgCount": 0,
  //  "quiet": false,
  //  "lastMsgDate": null,
  //  "lastMsgContent": null,
  //  "msg": [],
  //  "user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua'), contact.getUserInfo('wxid_guangyu')]
  //},
]
export default msgList
