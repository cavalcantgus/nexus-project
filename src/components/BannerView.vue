<template>
    <div id="main-banner">
        <h1>Welcome to Nexus</h1>
        <h2>ECENG Engenharia's unique platform for <br>formatting Excel files</h2>
    </div>
</template>

<script>
export default {
    name: 'BannerView'
}
</script>

<style scoped>
    #main-banner {
        background: rgb(2,0,36);
        background: linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(82,82,125,1) 66%, rgba(10,8,54,1) 100%);
        margin: 0;
        padding: 0;
        background-position: center; /* Ajuste conforme necessário */
        background-size: cover; /* Ou tente 'contain' se 'cover' não funcionar bem */
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        overflow: hidden;
    }

    #main-banner h1{
        color: #FFF;
        text-align: center;
        margin-bottom: auto;
        font-size: 60px;
        padding: 100px 40px;
        position: relative;
        z-index: 1;
    }

    #main-banner h2 {
         color: #FFF;
        justify-content: flex-start;
        padding: 20px 40px;
        position: absolute;
        z-index: 1;
    }
</style>