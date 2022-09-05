<template>
  <el-table
    v-if="type == 'CN'"
    :data="listSolicitacao"
    border
    fit
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column align="center" label="ID" width="65">
      <template align="center" slot-scope="{ row }">
        <span>{{ row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" min-width="120px" label="PC">
      <template slot-scope="{ row }">
        <span>{{ row.idpc }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" min-width="120px" label="PA">
      <template slot-scope="{ row }">
        <span>{{ row.idpa }}</span>
      </template>
    </el-table-column>

    <el-table-column width="160px" align="center" label="Grupo Responsavel">
      <template slot-scope="{ row }">
        <span>{{ row.idgruporesponsavel }}</span>
      </template>
    </el-table-column>

    <el-table-column width="160px" align="center" label="Data Criação">
      <template slot-scope="{ row }">
        <span>{{ row.dtdatacriacao.slice(0, 10) }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="Login Responsavel" width="220px">
      <template slot-scope="{ row }">
        <span>{{ row.loginresponsavelarea }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="Status Solicitacão" width="160px">
      <template slot-scope="{ row }">
        <span>{{
          row.idstatussolicitacao == 1 ? "Concluido" : "Iniciado"
        }}</span>
      </template>
    </el-table-column>
  </el-table>

  <el-table
    v-else-if="type == 'US'"
    :data="listAssunto"
    border
    fit
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column align="center" label="ID" width="65">
      <template align="center" slot-scope="{ row }">
        <span>{{ row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" min-width="200px" label="Nome Atividade">
      <template slot-scope="{ row }">
        <span>{{ row.atividade }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" min-width="160px" label="Grupo Responsável">
      <template slot-scope="{ row }">
        <span>{{ row.idgruporesponsavel }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Responsável na área">
      <template slot-scope="{ row }">
        <span>{{ row.loginresponsavelarea }}</span>
      </template>
    </el-table-column>

    <el-table-column width="160px" align="center" label="PA">
      <template slot-scope="{ row }">
        <span>{{ "N/A" }}</span>
      </template>
    </el-table-column>

    <el-table-column width="160px" align="center" label="PC">
      <template slot-scope="{ row }">
        <span>{{ row.pcselecionado }}</span>
      </template>
    </el-table-column>

    <el-table-column width="160px" align="center" label="Data Criação">
      <template slot-scope="{ row }">
        <span>{{ row.datacriacao.slice(0, 10) }}</span>
      </template>
    </el-table-column>

    <el-table-column
      width="200px"
      align="center"
      label="Data Abertura/Reabertura"
    >
      <template slot-scope="{ row }">
        <span>{{
          row.datareabertura == null
            ? "Sem Data"
            : row.datareabertura.slice(0, 10)
        }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="Status Solicitacão" width="160px">
      <template slot-scope="{ row }">
        <span>{{ row.idstatusatividade == 1 ? "Concluido" : "Iniciado" }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="Tipo de Processo" width="160px">
      <template slot-scope="{ row }">
        <span>{{ row.tipotratativa == 1 ? "Expansão" : "Outro" }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import * as axios from "axios";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  props: {
    type: {
      type: String,
      default: "CN",
    },
    listSolicitacao: {
      type: Array,
      default: function () {
        return [];
      },
    },
    listAssunto: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 5,
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
