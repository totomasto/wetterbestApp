<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">

                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                            <div class="text-muted text-center mb-3">
                                                         <img src="https://www.wetterbest.ro/wp-content/themes/wtb-child/img/logo.png" alt=""><br>
                            </div>
                        <template>
                            <div class="text-muted text-center mb-3">
                                Esti unul dintre distribuitorii autorizati Wetterbest si doresti sa te conectezi la platforma noastra ? 
                            </div>
                            <div class="btn-wrapper text-center">
                               <br>
                               <router-link :to="{name : 'signup'}">
                               <button type="button" class="btn btn-success"> Sunt distribuitor</button>
                               </router-link>
                               <br><br>
                               <h4>sau</h4>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Folosind datele trimise de catre Wetterbest</small>
                            </div>
                            <form @submit.prevent="login" role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            name="email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email" >
                                            
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Parola"
                                            name="password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="password">
                                </base-input>
                                <p class="red-text center" v-if="feedback">{{feedback}}</p>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <input type="submit" class="my-4 btn btn-info" value="Conecteaza-te">
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Ai uitat parola ?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Creeaza un cont</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import firebase from '@/firebase/init'

export default {
    name: 'Login',
    data(){
        return{
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login(){
            if(this.email && this.password){

                this.feedback = null;

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((cred)=>{
                    this.$router.push({name:'leads'});
                })
                .catch((err)=>{
                    this.feedback = err.message;
                })

            } else {
                this.feedback = 'Please fill in both fields';
            }
        }
    }
};
</script>
<style>
</style>
