<template>
  <div class="card">
    <div class="card-content">
      <div class="btn-area">
        <el-button class="btn-default" plain>Gerar Nova Solicitação</el-button>
        <el-button class="btn-default" plain>Histórico do PC</el-button>
      </div>
      <div class="field-area">
        <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Status Contrato" label-for="input-status">
            <b-form-input
              id="input-status"
              value="Ativo"
              class="input-form"
              disabled
            />
          </b-form-group>
        </div>
        <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="RI" label-for="input-ri">
            <b-form-input
              id="input-ri"
              value="333.4.22.0"
              class="input-form"
              disabled
            />
          </b-form-group>
        </div>
        <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Condição comercial" label-for="input-cc">
            <b-form-input
              id="input-cc"
              value="###"
              class="input-form"
              disabled
            />
          </b-form-group>
        </div>
        <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Vigente" label-for="checkbox">
            <input type="checkbox" checked class="checkbox-large">
          </b-form-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DefaultCard',
  data() {
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
  }

  .card-content{
    padding: 40px 20px;
  }

  .btn-default{
    border: none;
    box-shadow: 0 0 1em rgb(163, 163, 163);
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

  .field-area{
    display: flex;
  }

  .checkbox-large{
    margin-top: 10px;
    transform: scale(1.5);
  }

</style>
