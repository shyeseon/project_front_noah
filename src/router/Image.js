const routes = [
    {         
        path: '/ImageDetailPage/DetailList.vue',
        name: 'DetailList',
        component: () =>  import(/* webpackChunkName: "Member" */ '@/views/PhotoListPage/DetailList.vue')
    },

  
]
export default routes;