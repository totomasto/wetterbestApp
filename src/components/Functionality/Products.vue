<template>
<div class="mt-5 py-5 border-top text-center">
    <div class="row justify-content-center">
        <div class="col-lg-9">
            <p> 
                <div>
                <router-link :to="{ params: { product: 'tigla' } }"><base-button block type="primary">Tigla</base-button></router-link><br>
                <base-button block type="secondary">Borduri</base-button><br>
                <base-button block type="secondary">Drenaj</base-button><br>
                <base-button block type="secondary" v-if="showMore">Membrane si accesorii</base-button><br>
                <base-button block type="secondary" v-if="showMore">Suruburi</base-button><br>
                <base-button block type="secondary" v-if="showMore">Ferestre</base-button><br>
                <base-button block type="secondary" v-if="showMore">Click</base-button><br>
                <base-button block type="secondary" v-if="showMore">Cutata</base-button><br>
                <base-button block type="secondary" v-if="showMore">Minirulouri</base-button><br>
                <base-button block type="secondary" v-if="showMore">Sipca</base-button><br>
                </div>

            </p>
            <a @click="showMoreItems">Arata mai multe</a>
        </div>
    </div>
</div>


</template>



<script>
export default {
    name:'Products',
    data(){
        return {
            showMore: null,
        }
    },
    methods: {
        showMoreItems(){
            console.log('test');
            this.showMore = true;
        }
    }
}
</script>


<style>
    
</style>