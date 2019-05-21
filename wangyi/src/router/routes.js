import Classification from '../pages/Classification/Classification.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'



export default [
    {
      path:'/classification',
      component:Classification
    },
    {
      path:'/generalThings',
      component:GeneralThings
    },
    {
      path:'/homePage',
      component:HomePage
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/shoppingCart',
      component:ShoppingCart
    },{
      path:'/',
      redirect:'/homePage'
  }
  ]

