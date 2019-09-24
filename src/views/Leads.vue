<template>
<div class="profile-page">
        <section class="section-profile-cover section-shaped my-0" style="height:370px;">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                           
                              <div class="col-lg-3 order-lg-2">
                                    <a @click="resetAll">
                                  <div class="card-profile-image">
                                      
                                            <img
                        src="data:image/jpeg;base64,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"
                        class="rounded-circle"
                      />
                                      
                                  </div>
                                  </a>
                              </div>
                              
                           
                        
                             <!-- Leads info brings the data about counting leads at the top of the page -->    
                            <LeadsInfo @filterNoResponseLeads="filterNoResponseLeads"></LeadsInfo>
                            <LeadsStatus ></LeadsStatus>   
                        </div>
                    
                            <div class="text-center mt-4">
                       
                        
                                <ul class="list-inline">
                                    <li class="list-inline-item"><base-button type="danger" size="sm"></base-button> - fara raspuns</li>
                                    <li class="list-inline-item"><base-button type="success" size="sm"></base-button> - finalizat</li>
                                    <li class="list-inline-item"><base-button type="info" size="sm"></base-button> - in asteptare</li>
                                </ul>   
                                                        
                            <h3 style="margin-top:60px;">Lista lead-uri
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>BAUSTOFFE DISTRIBUTION SRL, Chiajna, Ilfov</div>

                           
                            
                            
                            <h4 style="margin-top:60px;">Filtreaza lead-uri</h4>
                            <label for="">*Selecteaza luna</label><br>
                            <select class="form-control" @change="filterLeadsByMonth(month)" v-model="month" name="" id="">
                                <option value="01" selected="">Ianuarie</option>
                                <option value="02">Februarie</option>
                                <option value="03">Martie</option>
                                <option value="04">Aprilie</option>
                                <option value="05">Mai</option>
                                <option value="06">Iunie</option>
                                <option value="07">Iulie</option>
                                <option value="08">August</option>
                                <option value="09">Septembrie</option>
                                <option value="10">Octombrie</option>
                                <option value="11">Noiembrie</option>
                                <option value="12">Decembrie</option>

                            </select>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-4"></div>
                                <div class="col-lg-4">
                                    <div v-if="!recentLeads" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                    <ul style="list-style:none; padding-inline-start:0px;">
                                    
                                    <li v-for="lead in recentLeads" :key="lead.id">
                                         <router-link :to="{name: 'lead', params: {id:lead.id}}">
                                             <base-button v-bind:type="btnStatus(lead.status)" size="sm" style="margin-top:12px;">{{lead.name}} : {{lead.date.substring(0, 10)}}</base-button>
                                         </router-link>
                                    </li>
                                     
                                    </ul>
                                    <a @click="addToRecentLeads" >Arata mai multe...</a>
                                </div>
                                <div class="col-lg-4"></div>

                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
import LeadsInfo from '@/components/Functionality/Leads/LeadsInfo'
import LeadsStatus from '@/components/Functionality/Leads/LeadsStatus'
export default {
    name: 'Leads',
    data(){
        return { 
            url: 'https://72c578e3.ngrok.io/leads/select',
            leads : null,
            recentLeads : null,
            month: null,
        }
    },
    components:{
      LeadsInfo : LeadsInfo,
      LeadsStatus : LeadsStatus,
    },
    methods: {
        importLeads(callback){

            fetch(this.url)
            .then(res => res.json())
            .then(response => callback(null, response));


        },
        addToRecentLeads(){

            let currentlyRecentLeads = this.recentLeads.length;
            this.recentLeads = this.leads.slice(0, currentlyRecentLeads + 10);

        },
        btnStatus(status){
            if(status === 'In lucru'){
                return 'danger'
            } else if(status === 'Finalizat'){
                return 'success'
            } else if(status === 'Pierdut'){
                return 'success'
            } else {
                return 'info'
            }
        },
        filterNoResponseLeads(){
            let noResponseLeads = this.leads.filter(function (lead) { return lead.status = 'In lucru'; });
            this.recentLeads = noResponseLeads;
        },
        filterLeadsByMonth(month){
            let leadsFilteredByMonth = this.leads.filter(function (lead) { 
              return lead.date.slice(5,7) == month });
            this.recentLeads = leadsFilteredByMonth;
        },
        resetAll(){
             // importing all leads for now 
        this.importLeads((err, response)=>{
            response = response.filter(function (lead) { return lead.client == 'BAUSTOFFE DISTRIBUTION SRL';}).reverse();
            // console.log(response);
            this.leads = response;
            this.recentLeads = response.slice(0,10);
            console.log('resetingAll');
        });
        }

    }, 
    mounted(){
        // importing all leads for now 
        this.importLeads((err, response)=>{
            response = response.filter(function (lead) { return lead.client == 'BAUSTOFFE DISTRIBUTION SRL';}).reverse();
            // console.log(response);
            this.leads = response;
            this.recentLeads = response.slice(0,10);
        });


    }
}
</script>

<style>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: green;
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>