<template>

     <div class="col-lg-3 order-lg-2 text-lg-right align-self-lg-center"><br>
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <div class="row justify-content-center">
                                    <base-button type="info" size="sm" class="">Scor : 4.32</base-button>
                                    
                                    
                                    <!-- <base-button type="default" size="sm" class="float-right"></base-button> -->
                                    </div>
                                    <br>
                                     <div class="row justify-content-center">
                                    <base-button type="danger" size="sm" @click="this.$emit('filterNoResponseLeads')" class="">Lead-uri fara raspuns : 11</base-button>
                                     </div>
                                
                                </div>
                            </div>
       

                    
        
    
</template>


<script>
export default {
    name:'LeadsInfo',
    data(){
        return {
        }
    },
    
}
</script>


<style>
    
</style>