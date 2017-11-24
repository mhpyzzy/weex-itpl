// import components

import index from '../views/index'
import img from '../views/img.vue'



const routes = [
    {name: 'main',path: '/',redirect:'/img'},

    {name: 'index',path: '/index',component: index},
    {name: 'img',path: '/img',component: img},
]

export default routes