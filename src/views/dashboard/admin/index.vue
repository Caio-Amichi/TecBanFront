<template>
  <div class="dashboard-editor-container">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title" v-b-toggle.collapse-3>
          <div>Consulta de Contratos</div>
          <span><i class="el-icon-s-operation" /></span>
        </div>
      </div>
      <b-collapse id="collapse-3" visible>
        <panel-group :onSubmit="handleSubmit" />
      </b-collapse>
    </div>
    <div class="card">
      <div class="card-header">
        <div
          class="card-header-title"
          @click="collapseOneStatus = !collapseOneStatus && !collapseOneLock"
        >
          <div>Lista de Contratos (RIs)</div>
          <span class="when-opened"><i class="el-icon-caret-top" /></span>
          <span class="when-closed"><i class="el-icon-caret-bottom" /></span>
        </div>
      </div>
      <b-collapse
        id="collapse-4"
        :visible="!collapseOneLock && collapseOneStatus"
      >
        <table-contract :onSearchPC="handleSearchPC" :list="formListContract" />
      </b-collapse>
    </div>
    <div class="card">
      <div class="card-header">
        <div
          class="card-header-title"
          @click="collapseTwoStatus = !collapseTwoStatus && !collapseTwoLock"
        >
          <div>PCs do Contrato (RI) Selecionado</div>
          <span class="when-opened-pcs"><i class="el-icon-caret-top" /></span>
          <span class="when-closed-pcs"
            ><i class="el-icon-caret-bottom"
          /></span>
        </div>
      </div>
      <b-collapse
        id="collapse-5"
        :visible="!collapseTwoLock && collapseTwoStatus"
      >
        <table-p-cs :list="formListPc" />
      </b-collapse>
    </div>
    <default-card />
    <options-card :list="formListObs" :idcontrato="idcontrato" />
    <!-- esse cara -->
    <tab
      :listSolicitacao="formlistSolicitacao"
      :listAssunto="formlistAssunto"
    />
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";
import TableContract from "./components/TableContract";
import TablePCs from "./components/TablePCs";
import Tab from "./components/Tab";
import DefaultCard from "./components/DefaultCard";
import OptionsCard from "./components/OptionsCard";
import * as axios from "axios";

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

export default {
  name: "DashboardAdmin",
  components: {
    PanelGroup,
    TableContract,
    TablePCs,
    Tab,
    DefaultCard,
    OptionsCard,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      formListContract: null,
      formListPc: null,
      formListObs: null,
      formlistSolicitacao: null,
      formlistAssunto: null,
      //#region Collapse

      //variaveis
      idcontrato: null,
      //One
      collapseOneStatus: true,
      collapseOneLock: true,

      //Two
      collapseTwoStatus: true,
      collapseTwoLock: true,

      //#endregion
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
    isCollapsed() {},
    async handleSubmit(params) {
      await axios
        .get("http://localhost:5478/contrato/recupera/", {
          params,
        })
        .then((res) => {
          this.formListContract = res.data.content;

          console.log(this.formListContract);
          if (this.formListContract.length == 0) {
            this.collapseOneLock = true;
            this.formListPc = [];
            this.collapseTwoLock = true;
            this.formListObs = [];
            this.formlistSolicitacao = [];
            this.formlistAssunto = [];
          } else {
            this.collapseOneLock = false;
          }
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });
    },

    async handleSearchPC(row) {
      this.idcontrato = row.id;

      var params = {
        id: "",
        nucodigopa: "",
        dslogradouro: "",
        nunumero: "",
        dscomplemento: "",
        dsbairro: "",
        dsuf: "",
        dscep: "",
        dsddd: "",
        dstelefone: "",
        dssegmento: "",
        dsmarcasegmento: "",
        dtdataativacao: "",
        dtdatadestativacao: "",
        idstatuspc: "",
        idcidade: "",
        idrede: "",
        dsnomepc: "",
        idcentrocusto: "",
        iduo: "",
        dsuo: "",
        idul: "",
        dsul: "",
        dstelefone2: "",
        idsubrede: "",
        idredeouts: "",
        idsubredeouts: "",
        dsregional: "",
        idporteestab: "",
        idredeestabcom: "",
        dscontatoestab: "",
        dsemailestab: "",
        codtpmaqautoatndto: "",
        dtdatacancelamento: "",
        idcontrato: row.id,
      };
      await axios
        .get("http://localhost:5478/pc/recupera", { params })
        .then((res) => {
          this.formListPc = res.data.content;
          this.collapseTwoLock = false;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });

      params = {
        idcontrato: row.id,
        id: "",
        dtobservacao: "",
        login: "",
        dsobservacao: "",
      };

      await axios
        .get("http://localhost:5478/contratoobs/recupera", {
          params,
        })
        .then((res) => {
          this.formListObs = res.data.content;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });

      params = {
        id: "",
        idstatussolicitacao: "",
        idpc: "",
        dtdatacriacao: "",
        nuvaloraprovado: "",
        dscontato: "",
        dsemail: "",
        dsrepresentantepraca: "",
        flcidadenova: "",
        flplayer: "",
        dsinformacoesadicionais: "",
        dshistoricoaluguel: "",
        idjustcancelamento: "",
        dsjustificativaaprovacao: "",
        idtipocontrato: "",
        idgruporesponsavel: "",
        loginalteracao: "",
        idpa: "",
        idrede: "",
        idprograma: "",
        idminuta: "",
        idtipoprocesso: "",
        dsprocessoworkflow: "",
        loginresponsavelarea: "",
        idcontratoorigem: row.id,
        idautorizadorafavorecido: "",
        idcategoriafornecedor: "",
        idstacontratoanteriordistrato: "",
        dtconclusao: "",
        blassociarcondcom: "",
        dtenviocondcomercial: "",
        idporteestab: "",
        idredeestabcom: "",
        dtaprovacao: "",
        nuvalorfaturamento: "",
      };
      await axios
        .get("http://localhost:5478/solicitacao/recupera", {
          params,
        })
        .then((res) => {
          this.formlistSolicitacao = res.data.content;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });

      var params = {
        id: "",
        atividade: "",
        datacriacao: "",
        datafechamento: "",
        idsolicitacao: "",
        idstatusatividade: "",
        idfluxo: row.id,
        idgruporesponsavel: "",
        idestagio: "",
        idstatuslegalizacao: "",
        dataRevisao: "",
        dataprevisao: "",
        providenciajurid: "",
        aprovadoranjurid: "",
        datareabertura: "",
        loginresponsavelarea: "",
        loginscriacao: "",
        diassla: "",
        loginalteracao: "",
        pasta: "",
        prazodeterminado: "",
        meses: "",
        datatermoinicial: "",
        datatermofinal: "",
        avisodtativacao: "",
        avisoaposativacao: "",
        mesesaposativacao: "",
        avisoprevio: "",
        inalizacao: "",
        infoadicionais: "",
        fonetitular: "",
        profissaotitular: "",
        estadociviltitular: "",
        metragem: "",
        diasavisoprevio: "",
        localdata: "",
        represestab: "",
        reajusteativacao: "",
        basereajuste: "",
        iniciopagamento: "",
        idjustcancelamento: "",
        contratoantigo: "",
        contrato: "",
        distrato: "",
        arquivomorto: "",
        termoinicial: "",
        datafinalizacao: "",
        observacao: "",
        prorrogacaoautomatica: "",
        mesesprorrogacao: "",
        termofinal: "",
        acao: "",
        iniciopagamentoativacao: "",
        justificativavalor: "",
        indice: "",
        tipotratativa: "",
        infopagamento: "",
        datarecminuta: "",
        competenciadesativacao: "",
        renegociacao: "",
        mesesrenegociacao: "",
        penalidade: "",
        datarecebminutadistrato: "",
        semanalisejuridico: "",
        pcselecionado: "",
        avisoativacaopcsel: "",
        pcreajusteativacao: "",
        iniciopgtoativacao: "",
        pgtodifdtdesatdefinit: "",
        idminutadistrato: "",
        penalidadeespecificacao: "",
        penalidademulta: "",
        penalidadejuros: "",
        periodocarencia: "",
      };

      await axios
        .get("http://localhost:5478/atividade/recupera", {
          params,
        })
        .then((res) => {
          this.formlistAssunto = res.data.content;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}

.collapsed > .when-opened-pcs,
:not(.collapsed) > .when-closed-pcs {
  display: none;
}

b-collapse[visible="true"] .el-icon-arrow-up {
  display: none;
}
.card-header-title[visible="false"] .fa-chevron-down {
  display: none;
}

.dashboard-editor-container {
  padding: 30px 60px;
  background-color: rgb(240, 242, 245);
  min-height: calc(100vh - 50px);
  position: relative;

  .card {
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    margin-bottom: 20px;
    border: 1px solid #dcdfe6;
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
  }

  .btn-area {
    margin-bottom: 10px;
  }

  .card-content {
    padding: 20px;
  }

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.card-header {
  display: flex;
  align-items: center;
  padding: 10px 1.25rem;
  margin-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  color: #223354;
  background-color: #ffffff;
}

.card-header span {
  margin-left: 15px;
  cursor: pointer;
}

.card-header-title {
  display: flex;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
