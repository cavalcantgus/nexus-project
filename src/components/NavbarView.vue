<template>
    <div id="nav">
        <div id="logo-container">
            <img src="" alt="">
        </div>
        <span id="logo-name">Nexus</span>
    </div>
</template>

<script>
export default {
    name: 'NavbarView',
    props: ['logo', 'alt']
}
</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4mm ridge rgb(10, 5, 82);
        padding: 15px 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #logo-name {
        font-size: 20px;
        color: #fff;
        font-weight: bold;
    }
</style>