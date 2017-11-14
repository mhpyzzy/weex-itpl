let he = require("he");
let icon = {
  beforeCreate() {
    //此url可以是指向本地字体图标文件路径 也可以直接用阿里巴巴字体图标库的的字体图标地址 ,比如'https://at.alicdn.com/t/font_3ppcziztn5wpcik9.ttf'

    // let platform = weex.config.env.platform.toLowerCase();
    // let bundleUrl = weex.config.bundleUrl.replace(/\/#\//,'/');
    // let iconPath = ''
    //     iconPath = `${bundleUrl.split('/').slice(0, -1).join('/')}/font/iconfont.ttf`;

    // if (platform == 'web') {
        

    // } else if (platform == 'android') {

    //     // android 不需要后缀
    //     iconPath = `local:///iconfont`
    // } else {

    //     iconPath = `./font/iconfont.ttf`
    // }

    var url = 'http://at.alicdn.com/t/font_428030_0x7nw91pc39885mi.ttf';
    var domModule = weex.requireModule("dom");
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': `url('${url}')`
    });
  },
  methods:{
      iconfont: function(unicode) {
        return he.decode(unicode);
    }
  }
}

export default icon