const routes = [
    {         
        path: '/ImageDetailPage/DetailList.vue',
        name: 'DetailList',
        component: () =>  import(/* webpackChunkName: "Member" */ '@/views/ImageDetailPage/DetailList.vue')
    },

  
]
export default routes;