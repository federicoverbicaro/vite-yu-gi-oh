<template>
   <header>
    <div class="d-flex p-2">
        <img src="../../assets/img/Logo yu-gi-oh.png" alt="logo yu-gi-oh" width="10%">

        <h1>yu-gi-oh api</h1>
    </div>
   </header>
</template>

<script>
    export default {
    name: 'AppHeader',
    }

</script>

<style lang="scss" scoped>

header{
    background-color: white;


    h1{
        display: flex;
        align-items: center;
        text-transform: capitalize;
        padding-left: 10px;
    }
}

</style>

