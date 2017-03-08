var verification = {
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
   * 是否是邮件地址
   * @param phoneNum
   * @returns {boolean}
   */
  isEmail: function (email) {
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (reg.test(email)) {
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
}

export {verification};
