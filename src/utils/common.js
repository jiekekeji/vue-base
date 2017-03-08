var common = {


  /**
   *设置页面标题
   * @param title
   */
  setDocumentTitle: function (title) {
    "use strict";
    setTimeout(function () {
      document.title = title;
      var iframe = document.createElement('iframe');
      // iframe.src = '/fsb-web/h5/static/public/logo.png';
      iframe.src = '../../static/public/logo.png'; // 必须
      iframe.style.visibility = 'hidden';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.onload = function () {
        setTimeout(function () {
          document.body.removeChild(iframe);
        }, 0);
      };
      document.body.appendChild(iframe);
    }, 0);
  },

  /**
   * 设置body元素的背景颜色
   * @param color
   */
  setBodyBgColor: function (color) {
    document.body.style.backgroundColor = color;
  },


  /**
   * 生成一个 0 - 1000 之间的随机整数
   * @returns {Number}
   */
  getRandom: function () {
    return parseInt(1000 * Math.random());
  },


  /**
   * 判断是否为空
   * @param text
   * @returns {boolean}
   */
  isEmpty: function (text) {
    if (typeof(text) === 'undefined' || null === text || '' === text) {
      return true;
    }
    return false;
  },

  /**
   * 正则校验手机号
   * @param phoneNum
   * @returns {boolean}
   */
  isPhoneNum: function (phoneNum) {
    var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    if (reg.test(phoneNum)) {
      return true
    } else {
      return false;
    }
  },

  /**
   * 判断是否是微信
   * @returns {boolean}
   */
  isWeixin: function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },

  /**
   * 判断是在android还是Ios端
   * @returns {boolean}
   */
  isAndroidOrIos: function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      return true;
    }
    if (isiOS) {
      return false;
    }
  },


  /**
   * 保存页面滚动的位置
   * @param key
   */
  saveScrollTop: function (key) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    sessionStorage.setItem(key, scrollTop);
  },

  /**
   * 滚动到页面之前的位置
   * @param key
   */
  recoveryScrollTop: function (key) {
    var scrollTop = sessionStorage.getItem(key);
    if (0 !== scrollTop) {
      window.scrollTo(0, scrollTop);
    }
  },

  /**
   * 滚动到页面顶部
   */
  scroll2Top: function () {
    window.scrollTop(0, 0);
  },

  /**
   * 滚动到指定的位置
   */
  scroll2Position: function (position) {
    window.scrollTop(0, position);
  },

  //会话级别存对象
  saveSessionObj: function (key, obj) {
    var str = JSON.stringify(obj);
    sessionStorage.setItem(key, str);
  },

  //会话级别取对象
  getSessionObj: function (key) {
    var str = sessionStorage.getItem(key);
    return JSON.parse(str);
  },

  //本地级别存对象
  saveLocalObj: function (key, obj) {
    var str = JSON.stringify(obj);
    localStorage.setItem(key, str);
  },

  //本地级别取对象
  getLocalObj: function (key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
  }

}

export {common};
