<template>
  <div class="card">
    <div class="card-content">
      <div class="btn-area">
        <el-button class="btn-default" plain>Histórico do Contrato</el-button>
        <el-button v-b-modal.modal-center class="btn-default" plain><modal-obs />Observações</el-button>
        <el-button class="btn-default" plain>Gerar Novo Fluxo</el-button>
        <el-button class="btn-default" plain>Providência de Aprovação</el-button>
      </div>
      <div class="btn-area">
        <el-button class="btn-default" plain>Pendência de Cliente</el-button>
        <el-button class="btn-default" plain>Follow UP</el-button>
        <el-button class="btn-default" plain>Concluir Atividade</el-button>
        <el-button class="btn-default" plain>Gerar Distrato</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalObs from '../../../../components/Modal/modal-observacao.vue'

export default {
  name: 'DefaultCard',
  components: {
    ModalObs
  },
  data() {
    return {
      openModal: false
    }
  },
  methods: {
    showModal() {
      this.openModal = true
      console.log(this.openModal)
    }
  }
}
</script>

<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>

  .card{
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    margin-bottom: 20px;
    border: 1px solid #DCDFE6;
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
  }

  .btn-area{
    margin-bottom: 20px;
    display: flex;
  }

  .card-content{
    padding: 40px 20px;
  }

  .btn-default{
    border: none;
    box-shadow: 0 0 1em rgb(163, 163, 163);
    flex: 1;
  }

    #input-group{
    width: auto;
    padding: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #959595;
    margin-right: 10px;
    font-size: 12px;
  }

</style>
