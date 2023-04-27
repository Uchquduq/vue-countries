import { createRouter, createWebHistory } from 'vue-router'
import CountryList from '../views/CountryList.vue'

import CountryLayout from '../views/country/CountryLayout.vue'
import CountryDetails from '../views/country/CountryDetails.vue'

import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'


const routes = [{
  path: '/',
  name: 'CountryList',
  component: CountryList
},
{
  path: '/countries/:id',
  name: 'CountryLayout',
  props: true,
  component: CountryLayout,
  children: [{
    path: '',
    name: 'CountryDetails',
    component: CountryDetails,
  },
  ]
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
  alias: '/abouts'
},
{
  path: '/about-us',
  redirect: { name: 'about' }
},
{
  path: '/:catchall(.*)',
  name: 'NotFound',
  component: NotFound
},
{
  path: '/404/:resource',
  name: '404Resource',
  component: NotFound,
  props: true
},
{
  path: '/network-error',
  name: 'NetworkError',
  component: NetworkError
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router