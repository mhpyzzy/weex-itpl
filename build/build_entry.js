/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 创建native 多页面入口文件
 * 
 *---------------------------------------------------------
 */


require('shelljs/global')
const path = require('path');
const fs = require('fs-extra');

//删除
// rm('-rf', path.resolve(__dirname, '../temp'))
// const hasPluginInstalled = fs.existsSync('./web/plugin.js');
var isWin = /^win/.test(process.platform);

// 创建vue入口文件
function getEntryFileContent(entryPath, vueFilePath) {
  let _entryPath = path.relative(path.join(entryPath, '../'), vueFilePath);
  // let _mixinsPath = path.relative(path.join(entryPath, '../'), path.join(__dirname,'../src/mixins/index.js'));
  
  // if (hasPluginInstalled) {
  //   const plugindir = pathTo.resolve('./web/plugin.js');
  //   contents = 'require(\'' + plugindir + '\') \n';
  // }
  if (isWin) {
    _entryPath = _entryPath.replace(/\\/g,'\\\\');
    // _mixinsPath = _mixinsPath.replace(/\\/g,'\\\\');
  }
  return `
  /**
   * @author walid
   * @date 2016/03/20
   * @description 程序入口启动配置
   */
  const App = require("${_entryPath}")
  // 全局注册组件
  new Vue({
    el: '#root',
    render: h => h(App)
  })
  `
}

let entry = {}; //多入口文件，用于native config
let tempDirectory = path.join(__dirname,'../temp'); //临时存储生成的入口文件

//遍历src目录生成多入口文件
const walk = dir => {
    dir = dir || '.'  //用处待研究
    let directory = path.join(__dirname,'../src',dir); //视图界面的存储目录
    
    // 循环处理目录下的文件 fs.readdirSync返回[a.vue,b.vue]
    fs.readdirSync(directory).forEach((file)=>{
        let fullpath = path.join(directory,file); //返回当前文件的完整路径
        let stat = fs.statSync(fullpath); //返回当前文件的信息
        let extname = path.extname(fullpath); //返回文件的后缀
  
        if(stat.isFile() && extname === '.vue'){ //如果是vue文件
  
            //生成入口文件路径
            let entryFile = path.join(tempDirectory,dir,`${path.basename(file,extname)}.js`);
  
            // 输出入口文件到temp
            fs.outputFileSync(entryFile,getEntryFileContent(entryFile,fullpath))
            
            //配置webpack entry
            let name = path.join(dir,path.basename(file,extname));
            entry[name] = `${entryFile}?entry=true`
            
        }else if(stat.isDirectory()){ // 如果是文件夹目录，则继续递归调用
  
            let subdir = path.join(dir,file)
            walk(subdir)
        }
  
    })
    return entry
  }

  module.exports = walk;
