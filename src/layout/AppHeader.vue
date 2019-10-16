<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <!-- <img src="img/brand/white.png" alt="logo"> -->
                <h4 style="color:white;">Wetterbest</h4>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                                   <h4 style="color:green;">Wetterbest</h4>

                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <!-- <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Aplicatii conectate </span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                 <router-link :to="{name: 'leads'}">
                                <h6 class="heading text-primary mb-md-1">Gestionare lead-uri</h6>
                                <p class="description d-none d-md-inline-block mb-0">Sistem intern WTB pentru gestionarea lead-urilor ,<br> <a href="#">Afla mai multe...</a></p>
                                 </router-link>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <router-link :to="{name: 'Comanda'}">
                                <h5 class="heading text-warning mb-md-1">Formular comanda </h5>
                                <p class="description d-none d-md-inline-block mb-0">Aplicatie pentru comenzi online, cu import automat in sistemul de calcul, <br><a href="#">Afla mai multe...</a> </p>
                                </router-link>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-shop"></i>
                            </div>
                            <div class="media-body ml-3">
                                <a href="http://cortina.ngrok.io/">
                                <h5 class="heading text-primary mb-md-1">Formular Cortina </h5>
                                <p class="description d-none d-md-inline-block mb-0">Aplicatie pentru comenzi online, cu import automat in sistemul de calcul, <br><a href="#">Afla mai multe...</a> </p>
                                </a>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                               <i class="ni ni-books"></i>
                            </div>
                            <div class="media-body ml-3">
                                <a href="https://cortinapriceapp.firebaseapp.com/login">
                                <h5 class="heading text-info mb-md-1">Aplicatie preturi Cortina </h5>
                                <p class="description d-none d-md-inline-block mb-0">Aplicatie pentru comenzi online, cu import automat in sistemul de calcul, <br><a href="#">Afla mai multe...</a> </p>
                                </a>
                            </div>
                        </a>
                    </div>
                </base-dropdown> -->
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Actiuni</span>
                    </a>
                     <!-- <router-link :to="{ name: 'Comanda' }" class="dropdown-item">Comanda noua</router-link>
                      <router-link :to="{ name: 'orders' }" class="dropdown-item">Comenzile mele</router-link> -->
                    <router-link :to="{ name: 'leads' }" class="dropdown-item">Lead-uri</router-link>
                    <router-link v-if="!user" :to="{ name: 'login' }" class="dropdown-item">Logheaza-te</router-link>
                    <a v-if="user" @click="logout" class="dropdown-item">Delogheaza-te</a>

                    <!-- <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link> -->
                </base-dropdown>
            </ul>
            <!-- <ul class="navbar-nav align-items-lg-center ml-lg-auto">
               
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link :to="{name : 'Comanda'}"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                 <i class="fa fa-plus-circle mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Comanda noua</span>
                    </router-link>
                </li>
                  <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link :to="{name : 'orders'}"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                 <i class="fa fa-plus-circle mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Comenzile mele</span>
                    </router-link>
                </li>
            </ul> -->
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import firebase from '@/firebase/init';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
    data(){
        return{
            user:null,
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({ name: 'login' });
            })
        }
    }, 
    created(){
        // let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user)=>{

            if(user){
                this.user = user;
            } else { 
                this.user = null;
            }

        })
    }
};
</script>
<style>
</style>
