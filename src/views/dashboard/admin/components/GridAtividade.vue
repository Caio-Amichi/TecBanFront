<template>
  <el-row class="panel-group">
    <div class="card-panel">
      <div class="card-body">
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
          <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Responsável pelo Contrato" label-for="input-status">
            <b-form-input
              id="input-status"
              value="###"
              class="p-inputtext p-component"
            />
          </b-form-group>
        </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Grupo Responsável" label-for="input-status">
            <b-form-input
              id="input-status"
              value="Expansão não Tau"
              class="p-inputtext p-component"
            />
          </b-form-group>
        </div>
          </el-col>
                    <el-col class="form-col">
            <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Responsável na Área" label-for="input-resp-area">
            <b-form-input
              id="input-resp-area"
              value="####"
              class="p-inputtext p-component"
            />
          </b-form-group>
        </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Status" label-for="input-status">
                <b-form-select
                  id="input-status"
                  v-model="form.options"
                  class="select-form"
                  :options="options"
                  required
                />
              </b-form-group>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
              <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Justificativa Cancelamento" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.options"
                  class="select-form"
                  :options="options"
                  required
                />
              </b-form-group>
            </div>
          </el-col>
          <el-col class="form-col">
             <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Nome do Representante do Estabelecimento" label-for="input-resp-area">
            <b-form-input
              id="input-resp-area"
              value="####"
              class="p-inputtext p-component"
            />
          </b-form-group>
        </div>
          </el-col>
          <el-col class="form-col">
             <div class="b-select-form p-float-label">
            <el-button class="btn-default" plain>Histórico do PC</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
          <div class="b-select-form p-float-label">
          <b-form-group id="input-group" label="Observação" label-for="observacao">
            <b-form-textarea
              id="observacao"
              value="####"
              class="p-inputtext p-component"
            />
          </b-form-group>
        </div>
          </el-col>
        </el-row>
                <el-row :gutter="20" class="form-row-btn">
          <el-col class="form-col-btn">
            <div class="b-select-form p-float-label">
              <b-button class="btn-submit">Salvar</b-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-row>
</template>

<script>
import { BIcon, BIconArrowUp, BIconArrowDown, BIconFilter } from 'bootstrap-vue'

export default {
  components: {
    BIconFilter,
    BIcon,
    BIconArrowUp,
    BIconArrowDown
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        options: null,
        checked: []
      },
      options: [{ text: 'Selecione', value: null }, 'option 1', 'option 2', 'option 3', 'option 4 '],
      show: true
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {

  border-radius: 6px;
  border: 1px solid #d1d1d1;
  padding: 0 !important;

  .card-panel-col {
    margin-bottom: 32px;
  }

 .btn-default{
    flex: 1;
    border: none;
    box-shadow: 0 0 1em rgb(163, 163, 163);
  }

  #observacao{
    height: 100px;
  }

  .input-form {
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 100%;
  }

    .b-select-form {
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 100%;
  }

  .p-fluid .p-inputtext {
    width: 100%;
  }

  .p-inputtext {
    margin: 0;
  }

  .btn-submit{
    background-color: #1A75FF;
    border: none;
    padding: 5px 60px;
  }

  .select-form{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 12px;
    color: #495057;
    background: #ffffff;
    padding: 8px 10px;
    border: 1px solid #ced4da;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
    outline: none;
    width: 100%;
    height: 30px;
    cursor: pointer;
  }

  .p-inputtext {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 12px;
    color: #495057;
    height: 30px;
    background: #ffffff;
    padding: 8px 10px;
    border: 1px solid #ced4da;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
    outline: none;
    width: 100%;
  }

  .form-row {
    justify-content: center;
    display: flex;
    padding: 5px 0px;
  }

    .form-row-btn {
    justify-content: end;
    display: flex;
    padding: 5px 0px;
  }

  .form-col {
    width: auto;
    padding: 0;
    justify-content: center;
    display: flex;
    flex: 1;
  }

    .form-col-btn {
    width: auto;
    padding: 0;
    justify-content: center;
    display: flex;
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
  }

  .btn-area{
    display: flex;
    justify-content: end;
  }

  .card-header {
    padding: 10px 1.25rem;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size: 20px;
    font-weight: bold;
    display: flex;
    cursor: pointer;
    color: #223354;
  }

   .card-header span {
      margin-left: 15px;
      cursor: pointer;
  }

  .card-body {
    padding: 10px 40px;
  }

  .card-panel {
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
