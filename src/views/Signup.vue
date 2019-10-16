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
                        <template v-if="authentificated.length == 0">
                            <div class="text-muted text-center mb-3">
                                Daca esti una dintre firmele cu care lucram, avem nevoie de <br><b>CIF/RO -ul</b> firmei tale ca sa te putem identifica:  
                            </div>
                            <ul class="list-inline" style="padding-inline-start:0px;">
                            <li class="list-inline-item"><input style="width:80px;" aria-describedby="addon-right addon-left" placeholder="RO" disabled="disabled" class="form-control"></li>
                            <li class="list-inline-item"><input aria-describedby="addon-right addon-left" v-model="cif" placeholder="Codul tau de identificare fiscala" class="form-control is-valid"></li>
                            </ul>
                            <div class="btn-wrapper text-center">
                                <h6 v-if="feedback"><mark>{{feedback}}</mark></h6>
                               <br>
                               <button type="button" @click="authReseller" class="btn btn-success">Am introdus datele</button>
                               <br><br>
                              
                            </div>
                        </template>
                        <template v-else>
                            <div class="text-muted text-center mb-3">
                               Am identificat urmatoarele adrese de email asociate cu CIF-ul introdus:  
                            </div>
                            <h5 v-if="authentificated.length > 1" style="margin-top:20px;margin-bottom:20px;">Selectati adresa pe care doriti sa o folositi: </h5>
                            <ul style="list-style:none; padding-inline-start:15px;">
                            <li  v-for="(email, index) in authentificated" :key="index">
                                 <base-button type="info" size="sm" @click="selectEmailAddr(email)" >{{email}}</base-button><br><br>
                            </li>
                            </ul>
                            <div class="btn-wrapper text-center">
                            <div class="text-muted text-center mb-3">
                                Daca doresti sa te inregistrezi, vom trimite un link de inregistrare pe aceasta adresa de email. 
                            </div>                              
                               <br>
                               <h5 v-if="feedback"><mark>{{feedback}}</mark></h5>
                               <button type="button" @click="sendSignUpLinkToResseler" v-if="!sendLinkAction" class="btn btn-success">Trimite link</button>
                               <div role="alert" class="alert alert-success" v-else><strong>Succes!</strong>Link-ul de inregistrare a fost trimis.</div>
                               <div v-if="loading" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                               <br><br>
                              
                            </div>
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
    name: 'signup',
    data(){
        return{
            email: null,
            password: null,
            feedback: null,
            authentificated: [],
            cif: null, 
            sendLinkAction: null,
            loading: null, 
            isActive: true,
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
        },
        checkForResellerExistence(callback){

            var url = 'https://72c578e3.ngrok.io/wtb/reseller/check';
            var data = {cif: this.cif};

            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => callback(null, response))
            .catch(error => {
                console.log('Error - no email found:', error);
                this.feedback = 'Nu a fost gasita o adresa de email pentru RO-ul introdus, va rugam contactati agentul colaborator pentru a verifica daca codul dvs. este valid' ;
                });

            // callback(null, null);
        },
        authReseller(){
            this.checkForResellerExistence((err, email)=>{
                
              

               if(email.E_Mail.includes(';')){
                   let result = email.E_Mail.split(';');
                   result.forEach(el => this.authentificated.push(el));
                   
                } else {
                this.authentificated.push(email.E_Mail);
                }
                this.feedback = null; 
            });
              
        
        },
        async sendSignUpLinkToResseler(){
            if(this.authentificated.length > 1){
                this.feedback = 'Va rugam selectati o adresa de email !'
            } else {
            this.loading = true;

             var url = 'https://72c578e3.ngrok.io/wtb/reseller/signup/'+this.authentificated[0];
            const response = await fetch(url);
            console.log(response.status);
            this.sendLinkAction = true; 
            
            this.loading = null;
            }
        },
        selectEmailAddr(email){
            this.feedback = null;
            if(this.authentificated.length > 1) this.authentificated = this.authentificated.filter(em => em === email);
            
        }
    
    },

};
</script>
<style>
</style>
