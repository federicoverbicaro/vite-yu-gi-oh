<template>
    <div id="cards" class="d-flex flex-column rounded-4 ">
        <div>
            <img :src="propsSrc" alt="" height="100%" width="100%">
        </div>
        <div class="d-flex flex-column align-items-center p-4 rounded-3">
            <h5>{{ propsTitolo }}</h5>
            <span class="p-2 text-center " >{{ propsArchetype }}</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "AppCards",
    props: {
        propsSrc: String,
        propsTitolo: String,
        propsArchetype: String,
    }
}
</script>

<style lang="scss" scoped>


#cards{
    background-color:rgb(212,143,55) ;
    flex-basis: calc(100% / 5 - 20px);

    h5{
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    text-align: center;
}
}



</style>