
import weextest from './web/api.js'


var _modules = [
    weextest
];

_modules.forEach((mod)=>{
    
    weex.install(weextest)
})