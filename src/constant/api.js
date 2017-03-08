/**
 * 数据接口地址配置;代理地址配置在config/index.js
 * @type {{baseUrl: string}}
 */
var api = {
  //开发测试时用下面这个
  'baseUrl': '/api/root/abc',
  //正式打包时用下面这个
  // 'baseUrl': '/root/abc',
}

export {api};
