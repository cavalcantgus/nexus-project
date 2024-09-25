<template>
    <v-dialog v-if="localVisible" v-model="localVisible" width="500px">
        <v-card class="custom-card">
            <v-card-title>
                <span class="card-title">Formate seu arquivo</span>
                <v-form ref="form">
                    <v-combobox
                    label="Escolha o tipo de relatório" class="input-field"
                    :items="list_report"
                    item-title="type"
                    item-value="id"
                    v-model="localreport_type">
                    </v-combobox>
                    <v-file-input
                    label="Upload your file" class="input-field"
                    accept=".xlsx, .xls"
                    v-model="localfile_name"></v-file-input>
                    <v-card-actions>
                        <v-btn class="cancel-button" @click="close">Cancelar</v-btn>
                        <v-btn class="format-button" @click="format">Formatar</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'FormDialog',
    props:  {
        visible: Boolean,
        report_type: [String, Number, Object],
        file_name: File
    },
    data() {
        return {
            localVisible: this.visible,
            list_report: [
                {"id": 1, "type": "Contas pagas por conta corrente"},
                {"id": 2, "type": "Titulos"},
                {"id": 3, "type": "Financeiro"},
                {"id": 4, "type": "Marketing"},
                {"id": 5, "type": "Obras"},
                ],
            localreport_type: this.report_type || null,
            localfile_name: this.file_name || null
        }
    },
    watch: {
        visible(newValue) {
            if(newValue !== this.localVisible) {
                this.localVisible = newValue 
            }
        }
    },
   methods: {
    format() {
        if(this.localfile_name && this.localreport_type){
            this.$emit('format', this.localfile_name, this.localreport_type)
        }
    }
   }

}
</script>

<style scoped>

:deep(.custom-card ){
    border: 3px solid #222;
    background-color: rgb(240, 238, 238);
}

.card-title {
    text-align: center;
    color: rgb(5, 6, 65);
    width: 100%;
    display: block;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
}

.input-field {
    color: rgb(5, 6, 65);
}

:deep(.format-button) {
    background-color: rgb(5, 6, 65);
    color: aliceblue;
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: all .2s ease-in-out;
}

:deep(.format-button:hover) {
    transform: scale(1.1);
}

:deep(.cancel-button) {
    background-color: rgb(184, 18, 18);
    color: aliceblue;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
    transition: all .2s ease-in-out;
}

:deep(.cancel-button:hover) {
    transform: scale(1.1);
}
</style>