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
                        
                        <template v-if="valid">
                            <div class="text-center text-muted mb-4">
                                <h5>Creati o parola pentru contul asociat adresei de email de mai jos:</h5>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder v-model="email"
                                            readonly=""
                                            addon-left-icon="ni ni-email-83">
                                
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Parola"
                                            v-model="password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                 <base-input alternative
                                            type="password"
                                            placeholder="Confirma parola"
                                            v-model="confirm"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <h4 v-if="feedback">{{feedback}}</h4>
                                
                                <base-checkbox>
                                    <span>Sunt de acord cu 
                                        <a href="#">Termenii si conditiile</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" @click="registerUser" class="my-4">Creeaza cont</base-button>
                                </div>
                            </form>
                        </template>
                        <h3 v-else> Adresa de mail nu este valida sau nu sunteti inregistrat in sistemul de lead-uri, va rugam contactati agentul colaborator ! <hr> Cod eroare : 201 .</h3>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'register', 
    data(){
        return { 
            email: this.$route.params.email,
            password: null,
            confirm: null,
            feedback : null,
            valid: false, 
            url: `https://72c578e3.ngrok.io/leads/select/`,
        }
    },
    methods:{
        registerUser(){
            if(this.confirm === this.password){

                this.email = this.email.replace(/ /g,'');
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .then(()=>{
                    this.$router.push({name:'leads'});
                })

            } else { this.feedback = 'Parolele nu coincid. Va rugam sa verificati parola. '}
        },
        checkIfUserExists(callback){

             fetch(this.url + this.email)
            .then(res => res.json())
            .then(response => {
              callback(null, response)});

        }
    },
    created(){
        this.checkIfUserExists((err, result)=>{

                (result.length > 0) ? this.valid = true : this.valid = false;
        });
    }
    

};
</script>
<style>
</style>
