<template>
    <BannerView/>
    <div class="main-container">
        <h1>Formatar uma planilha nunca foi tão fácil</h1>
        <div class="paragraph">
            <p>Para formatar a sua planilha, é bem simples. Clique no botão <span>Formatar planilha</span>
            escolha o tipo de relatório você deseja formatar, em seguida, escolha seu arquivo (Lembre-se, precisa ser um arquivo .xlsx).
            e clique em Formatar. Agora é só aguardar que seu arquivo será formatado e logo estará pronto para você</p>
        </div>
        <img src="\img\setas-direitas.png" alt="" class="seta">
        <v-btn @click="showForm" class="btn-format">Formatar planilha</v-btn>
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

<style scoped>

.main-container {
    background-color: rgb(71, 70, 146);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    color: rgb(231, 234, 236);
}

.paragraph {
    background-color: #f8be00;
    width: 40%;
    align-self: flex-start;
    margin-top: 100px;
    margin-left: 50px;
    padding: 30px;
    border-bottom: 4px solid rgba(5, 6, 65, 0.555);
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    transition: all .2s ease-in-out;
    margin-bottom: 20px;
}

.paragraph:hover {
    transform: scale(1.1);
}

p {
    font-size: 16px;
    color: #222;
    font-weight: bold;
}

.btn-format {
    background-color: rgb(5, 6, 65);
    color: aliceblue;
    font-weight: bold;
    height: 50px;
    margin-top: -50px;
    align-self: flex-end;
    margin-right: 50px;
    margin-bottom: 20px;
}

.seta {
    width: 100px;
    align-self: center;
    margin-top: -100px;
    margin-left: 200px;
}
</style>