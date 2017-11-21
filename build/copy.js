/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 在 npm run build 之后执行，copy bundlejs,img等到android/ios项目 
 * 
 *---------------------------------------------------------
 */

require('shelljs/global')
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
// const exec = require('child_process').exec;

//path
let path_root = process.cwd();
let source = path.join(path_root, 'dist/native');
let path_ios = path.join(path_root, 'platforms/ios/bundlejs');
let path_android = path.join(path_root, 'platforms/android/app/src/main/assets');
let path_android_img = path.join(path_root, 'platforms/android/app/src/main/res/drawable');

const has = path => fs.existsSync(path);  // 查看文件是否存在

//先判断源文件(source)是否存在
if (!has(source)) {
    console.log(chalk.yellow(`源文件路径错误,：${source}`))
    console.log(chalk.yellow(`请先执行： npm run build 以生成 bundleJs`))
    exit(1)
}
//复制文件到 android 项目
const copy_android = () => {
    if (!has(path_android)) {
        console.log(chalk.yellow(`文件路径错误：${path_android}`))
        exit(1)
    }
    //如果 drawable 目录不存在，则直接创建
    if (!has(path_android_img)) {
        mkdir('-p', path_android_img)
    }
    rm('-rf', `${path_android}/*`)
    rm('-rf', `${path_android_img}/*`)
    cp('-rf', `${source}/*`, `${path_android}`);
    rm('-rf', `${path_android}/img`)  //删除上一步多copy 到assets里的img
    cp('-rf', `${source}/img/*`, `${path_android_img}`);  //重新copy img到本地 drawable目录
    console.log(chalk.blue('android 复制完成!'))
}

//复制文件到 ios 项目
const copy_ios = () => {
    if (!has(path_ios)) {
        console.log(chalk.yellow(`文件路径错误：${path_ios}`))
        exit(1)
    }

    rm('-rf', `${path_ios}/*`)
    cp('-rf', `${source}/*`, `${path_ios}`);
    console.log(chalk.blue('ios 复制完成!'))
}

let name = process.argv[2];  //获取运行时输入的参数

if (name == 'android') {

    copy_android()
} else if (name == 'ios') {

    copy_ios()
} else if (name == 'all') {

    copy_android()
    copy_ios()
}