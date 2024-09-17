<template>
    <div>
        <v-file-input
        label="File input"
        v-model="file"
        placeholder="Upload your file"
        prepend-icon="mdi-paperclip">
        </v-file-input>
    </div>
</template>

<script>
export default {
   name: 'FileInput',
   data() {
    return {
        file: null
    }
   } 
}
</script>