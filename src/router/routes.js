// import components

import index from '../views/index'
import home from '../views/home.vue'
import news from '../views/news.vue'
import newsDetail from '../views/newsDetail.vue'
import businessArea from '../views/businessArea.vue'



const routes = [
    {name: 'main',path: '/',redirect:'/businessArea'},

    {name: 'index',path: '/index',component: index},
    {name: 'news',path: '/news',component: news},
    {name: 'home',path: '/home',component: home},
    {name: 'newsDetail',path: '/newsDetail',component: newsDetail},
    {name: 'businessArea',path: '/businessArea',component: businessArea},
]

export default routes