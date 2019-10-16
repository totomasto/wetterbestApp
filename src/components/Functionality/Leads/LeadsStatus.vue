<template>

      <div class="col-lg-3 order-lg-1" v-if="leads" >
            <div class="card-profile-stats d-flex justify-content-center">
                <div>
                    <span class="heading">{{won}}</span>
                    <span class="description">Castigat</span>
                </div>
                <div>
                    <span class="heading">{{failed}}</span>
                    <span class="description">Pierdut</span>
                </div>
                <div>
                    <span class="heading">{{waiting}}</span>
                    <span class="description">In astept.</span>
                </div>
            </div>
        </div>  
    
</template>


<script>
import Leads from '../../../views/Leads'
export default {
    name: 'LeadsStatus',
    props:['leads'],
    data(){
        return {
            won : null, 
            failed : null, 
            waiting : null, 
        }
    },
    components:{
        Leads: Leads
    },
    methods:{
        countLeadsType(){
            let leads = this.leads;

            this.won = leads.filter(lead => lead.status === 'Finalizat').length;
            this.failed = leads.filter(lead => lead.status === 'Pierdut').length;
            this.waiting = leads.filter(lead => lead.status === 'In asteptare').length;
            


        }
    },
    mounted(){
        this.countLeadsType();
    }
    
}
</script>



<style>
    
</style>