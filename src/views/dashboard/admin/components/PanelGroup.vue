<template>
  <el-row class="panel-group">
    <div class="card-panel">
      <div class="card-body">
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="PA"
                v-model="input_pa"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="PC"
                v-model="input_pc"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Status Contrato"
                label-for="input_statuscontrato"
              >
                <b-form-select
                  id="input_statuscontrato"
                  v-model="input_statuscontrato"
                  class="select-form"
                  :options="optionsContrato"
                  required
                />
              </b-form-group>
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="RI"
                v-model="input_ri"
              />
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="Cód. Autorizadora"
                v-model="input_codautorizadora"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="Cód. Favorecido"
                v-model="input_codfavorecido"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Responsável pelo Contrato"
                label-for="input_responsavelcontrato"
              >
                <b-form-select
                  id="input_responsavelcontrato"
                  v-model="input_responsavelcontrato"
                  class="select-form"
                  :options="optionsUsuario"
                  required
                />
              </b-form-group>
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Data Inicial"
                label-for="datepicker-sm"
              >
                <input
                  type="date"
                  class="select-form"
                  v-model="input_datainicio"
                />
              </b-form-group>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="CNPJ/CPF Autorizadora"
                v-model="input_docautorizadora"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="CNPJ/CPF Favorecido"
                v-model="input_docfavorecido"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Status Aprovação de Pagamento"
                label-for="input_aprovacaopagamento"
              >
                <b-form-select
                  id="input_aprovacaopagamento"
                  v-model="input_aprovacaopagamento"
                  class="select-form"
                  :options="optionsAprovacao"
                  required
                />
              </b-form-group>
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Data Final"
                label-for="datepicker-sm"
              >
                <input
                  type="date"
                  class="select-form"
                  v-model="input_datafinal"
                />
              </b-form-group>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="form-row">
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="Cód. Boleto (LUC)"
                v-model="input_boleto"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="input-form p-float-label">
              <input
                type="text"
                class="p-inputtext p-component"
                placeholder="Ticket SAP"
                v-model="input_ticket"
              />
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Status Aprovação do Contrato"
                label-for="input_aprovacaocontrato"
              >
                <b-form-select
                  id="input_aprovacaocontrato"
                  v-model="input_aprovacaocontrato"
                  class="select-form"
                  :options="optionsAprovacao"
                  required
                />
              </b-form-group>
            </div>
          </el-col>
          <el-col class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group
                id="input-group"
                label="Vigente"
                label-for="input_vigente"
              >
                <b-form-select
                  id="input_vigente"
                  v-model="input_vigente"
                  class="select-form"
                  :options="optionsVigente"
                  required
                />
              </b-form-group>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="form-row-btn">
          <el-col class="form-col-btn">
            <div class="b-select-form p-float-label">
              <b-button @click="submit" class="btn-submit">Buscar</b-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-row>
</template>

<script>
import {
  BIcon,
  BIconArrowUp,
  BIconArrowDown,
  BIconFilter,
} from "bootstrap-vue";

import * as axios from "axios";
import * as moment from "moment";

export default {
  components: {
    BIconFilter,
    BIcon,
    BIconArrowUp,
    BIconArrowDown,
  },
  data() {
    return {
      form: {},
      input_pa: null,
      input_pc: null,
      input_ri: null,
      input_codautorizadora: null,
      input_codfavorecido: null,
      input_datainicio: null,
      input_docautorizadora: null,
      input_docfavorecido: null,
      input_datafinal: null,
      input_boleto: null,
      input_ticket: null,
      input_aprovacaocontrato: null,
      input_vigente: null,
      input_aprovacaopagamento: null,
      input_responsavelcontrato: null,
      input_statuscontrato: null,
      input_pa: null,

      optionsAprovacao: null,
      optionsUsuario: null,
      optionsContrato: [
        { text: "Ativo", value: 1 },
        { text: "Inativo", value: 0 },
      ],
      optionsVigente: [
        { text: "Sim", value: 1 },
        { text: "Não", value: 0 },
      ],

      show: true,
    };
  },

  async created() {
    await this.getListAprovacao();
    await this.getListUsuario();
  },

  methods: {
    handleSetLineChartData(type) {
      this.$emit("handleSetLineChartData", type);
    },

    async getListAprovacao() {
      var items;
      var optionsData = [];

      await axios
        .get("http://localhost:5478/statusaprovacao")
        .then((res) => {
          items = res.data;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });

      items.map((v) => {
        optionsData.push({ text: v.statusaprovacao, value: v.id });
      });

      this.optionsAprovacao = JSON.parse(JSON.stringify(optionsData));
      return optionsData;
    },

    async getListUsuario() {
      var items;
      var optionsData = [];

      await axios
        .get("http://localhost:5478/usuariohistorico")
        .then((res) => {
          items = res.data;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });

      items.map((v) => {
        optionsData.push({ text: v.usuario, value: v.id });
      });

      this.optionsUsuario = JSON.parse(JSON.stringify(optionsData));
      return optionsData;
    },

    async submit() {
      var items;

      let params = {
        // input_pa: this.input_pa == null ? "" : this.input_pa,
        idpcselecionado: this.input_pc == null ? "" : this.input_pc,
        // input_ri: this.input_ri == null ? "" : this.input_ri,
        // idautorizadorafavorecido:
        //   this.input_codautorizadora == null ? "" : this.input_codautorizadora,
        input_codfavorecido:
          this.input_codfavorecido == null ? "" : this.input_codfavorecido,
        datatermoinicial:
          this.input_datainicio == null ? "" : moment(this.input_datainicio),
        // input_docautorizadora:
        //   this.input_docautorizadora == null ? "" : this.input_docautorizadora,
        // input_docfavorecido:
        //   this.input_docfavorecido == null ? "" : this.input_docfavorecido,
        datatermofinal:
          this.input_datafinal == null ? "" : moment(this.input_datafinal),
        // input_boleto: this.input_boleto == null ? "" : this.input_boleto,
        // input_ticket: this.input_ticket == null ? "" : this.input_ticket,
        // input_aprovacaocontrato:
        //   this.input_aprovacaocontrato == null
        //     ? ""
        //     : this.input_aprovacaocontrato,
        ativo: this.input_vigente == null ? "" : this.input_vigente,
        // input_aprovacaopagamento:
        //   this.input_aprovacaopagamento == null
        //     ? ""
        //     : this.input_aprovacaopagamento,
        loginresponsavelcontrato:
          this.input_responsavelcontrato == null
            ? ""
            : this.input_responsavelcontrato,
        idstatuscontrato:
          this.input_statuscontrato == null ? "" : this.input_statuscontrato,
      };

      await axios
        .get("http://localhost:5478/contrato/recupera/", {
          params: {
            idpcselecionado: this.input_pc == null ? "" : this.input_pc,
            idautorizadorafavorecido:
              this.input_codautorizadora == null
                ? ""
                : this.input_codautorizadora,
            datatermoinicial:
              this.input_datainicio == null ? "" : this.input_datainicio,
            datatermofinal:
              this.input_datafinal == null ? "" : this.input_datafinal,
            ativo: this.input_vigente == null ? "" : this.input_vigente,
            loginresponsavelcontrato:
              this.input_responsavelcontrato == null
                ? ""
                : this.input_responsavelcontrato,
            idstatuscontrato:
              this.input_statuscontrato == null
                ? ""
                : this.input_statuscontrato,
            id: "",
            contratogerado: "",
            blefetuarpagto: "",
          },
        })
        .then((res) => {
          items = res.data;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });
      console.log(items);
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  padding: 0 !important;

  .card-panel-col {
    margin-bottom: 32px;
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

  .btn-submit {
    background-color: #d50000;
    border: none;
    padding: 5px 30px;
  }

  .select-form {
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

  #input-group {
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

  .btn-area {
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
