import Vue from "vue";
import firebase from '@/firebase/init';
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Register from "./views/Register.vue";
import Comanda from "./views/Comanda.vue";
import Orders from "./views/Orders.vue";
import Leads from "./views/Leads.vue";
import Lead from "./views/Lead.vue";

Vue.use(Router);

const router = new Router({
  mode : 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "leads",
      components: {
        header: AppHeader,
        default: Leads,
        footer: AppFooter
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path:"/leads",
      name:"leads",
      components: {
        header: AppHeader,
        default: Leads,
        footer: AppFooter
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/lead/:id",
      name: 'lead',
      components:{
        header: AppHeader,
        default: Lead,
        footer: AppFooter
      },
      meta: {
        requiresAuth: true
      }
    },
    
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: {
        header: AppHeader,
        default: Signup,
        footer: AppFooter
      }
    },
    {
      path: "/register/:email",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/comanda",
      name: "Comanda",
      components: {
        header: AppHeader,
        default: Comanda,
        footer: AppFooter
      },
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/orders',
      name: "orders",
      components: {
        header: AppHeader,
        default: Orders,
        footer: AppFooter
      },
    },
    // {
    //   path: "/landing",
    //   name: "landing",
    //   components: {
    //     header: AppHeader,
    //     default: Landing,
    //     footer: AppFooter
    //   }
    // },
    
   

  
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});



router.beforeEach((to, from, next) => {
  // check to see if route requires auth 
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, proceed to route 
      next();
    } else { 
      // no user signed in 
      next({ name : 'login' });
    }
  } else { 
    next();
  }
})


export default router;