<template>
  <div class="dashboard-editor-container">
    <div class="card">
      <div class="card-header">
        <div v-b-toggle.collapse-3 class="card-header-title">
          <div>Consulta de Contratos</div>
          <span><i class="el-icon-s-operation" /></span>
        </div>
      </div>
      <b-collapse id="collapse-3" visible>
        <panel-group />
      </b-collapse>
    </div>
    <div class="card">
      <div class="card-header">
        <div v-b-toggle.collapse-4 class="card-header-title">
          <div>Lista de Contratos (RIs)</div>
          <span class="when-opened"><i class="el-icon-caret-top" /></span>
          <span class="when-closed"><i class="el-icon-caret-bottom" /></span>
        </div>
      </div>
      <b-collapse id="collapse-4" visible>
        <table-contract />
      </b-collapse>
    </div>
    <div class="card">
      <div class="card-header">
        <div v-b-toggle.collapse-5 class="card-header-title">
          <div>PCs do Contrato (RI) Selecionado</div>
          <span class="when-opened-pcs"><i class="el-icon-caret-top" /></span>
          <span class="when-closed-pcs"
            ><i class="el-icon-caret-bottom"
          /></span>
        </div>
      </div>
      <b-collapse id="collapse-5" visible>
        <table-p-cs />
      </b-collapse>
    </div>
    <default-card />
    <options-card />
    <tab />
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";
import TableContract from "./components/TableContract";
import TablePCs from "./components/TablePCs";
import Tab from "./components/Tab";
import DefaultCard from "./components/DefaultCard";
import OptionsCard from "./components/OptionsCard";

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
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },

    isCollapsed() {},
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
