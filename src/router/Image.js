const routes = [
    {         
        path: '/ListPage/DetailList.vue',
        name: 'DetailList',
        component: () =>  import(/* webpackChunkName: "Member" */ '@/views/ListPage/DetailList.vue')
    },

  
]
export default routes;