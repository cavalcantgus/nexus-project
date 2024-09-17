<template>
    <BannerView/>
    <div>
        <h1>HOME</h1>
    </div>
    <FileInput/>
</template>

<script>
import BannerView from './BannerView.vue'
import FileInput from './FileInput.vue'

export default {
    name: 'HomeView',
    components: {
        BannerView,
        FileInput
    }
}
</script>