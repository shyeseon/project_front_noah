const routes = [
    {
        path: '/Admin/AdminUpload',
        component: () => import (/* webpackChunkName: "Admin" */ '@/views/Admin/AdminUpload')
    },

    {
        path: '/Admin/AdminMain',
        component: () => import (/* webpackChunkName: "Admin" */ '@/views/Admin/AdminMain')
    },
];

export default routes;