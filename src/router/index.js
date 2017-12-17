import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import page404 from "@/common/404"

//前台
import Index from "@/pages/Index"

//admin
import Admin from "@/admin/pages/Index"
import Study from "@/admin/pages/Study"
import StudyIndex from "@/admin/components/Study/Index"
import Javascript from "@/admin/components/Study/Javascript"
import Html from "@/admin/components/Study/Html"
import Css from "@/admin/components/Study/Css"
import AddNode from "@/admin/components/Study/AddNode"
import AddCategory from "@/admin/components/Study/AddCategory"
import CategoryList from "@/admin/components/Study/CategoryList"




import Shop from "@/admin/pages/Shop"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'index',
      component: Index
    },
    {
      path: '/admin',
      // name: 'admin',
      component: Admin,
      children:[
        {
          path: '/',
          redirect: 'study'
        },
        //学习园地
        {
          path: 'study',
          // name: 'study',
          component:Study,
          children:[
            {
              path : '/',
              redirect : 'index'
            },
            {
              path : 'index',
              name : 'index',
              component: StudyIndex
            },
            {
              path : 'javascript',
              name : 'javascript',
              component: Javascript
            },
            {
              path : 'html',
              name : 'html',
              component: Html
            },
            {
              path : 'css',
              name : 'css',
              component: Css
            },
            {
              path : 'add-node',
              name : 'add-node',
              component: AddNode
            },
            {
              path : 'category-add',
              name : 'category-add',
              component: AddCategory
            },
            {
              path : 'category-list',
              name : 'category-list',
              component: CategoryList
            },
            
            

          ]
        },
        {
          path: 'shop',
          name: 'shop',
          component:Shop
        },
      ]
    },
    {
      path: '*',
      name: 'page404',
      component: page404
    }
  ]
})
