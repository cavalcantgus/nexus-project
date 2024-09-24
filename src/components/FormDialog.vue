<template>
    <v-dialog>
        <v-card>
            <v-card-title>
                <span class="card-title">Formate seu arquivo</span>
                <v-form>
                    <v-combobox7
                    label="Escolha o tipo de relatório"
                    :items="list_report"
                    item-title="type"
                    item-value="id"
                    v-model="report_type">
                    </v-combobox7>
                    <v-input-file
                    label="Upload your file"></v-input-file>
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
        visible: Boolean
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
            report_type: null
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
        close() {
            this.$emit('cancel')
        },
        
        formar() {
            this.$emit('format')
        }
    }
}
</script>