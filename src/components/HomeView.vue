<template>
    <BannerView/>
    <div>
        <h1>HOME</h1>
        <v-btn color="primary" @click="showForm">Formatar planilha</v-btn>
        <FormDialog
        :visible="formVisible"
        :report_type="type"
        :file_name="file"
        @format="formatSheet"
        @cancel="cancelFormat"/>
    </div>
</template>

<script>
import BannerView from './BannerView.vue'
import FormDialog from './FormDialog.vue'

export default {
    name: 'HomeView',
    components: {
        BannerView,
        FormDialog
    },
    data() {
        return {
            formVisible: false,
            file: null,
            type: null
        }
    },
    methods: {
        showForm() {
            this.formVisible = true
        },
        formatSheet(file_name, report_type) {
            this.file = file_name
            this.type = report_type
            console.log(`${this.file.name}, ${this.type.type}`)
        },
        cancelFormat() {
            this.formVisible = false
        }
    }
}
</script>