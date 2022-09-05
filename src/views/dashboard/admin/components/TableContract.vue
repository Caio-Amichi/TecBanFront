<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="80" hidden="true">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="100px"
        align="center"
        label="Class. Tipo Contrato"
      >
        <template slot-scope="{ row }">
          <span>{{ row.nrri }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Tipo Contrato">
        <template slot-scope="{ row }">
          <span>{{ row.idtipocontrato }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="Pc">
        <template slot-scope="{ row }">
          <span>{{ row.idpcselecionado }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Termo Inicial">
        <template slot-scope="{ row }">
          <span>{{ row.datatermoinicial }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Termo Final">
        <template slot-scope="{ row }">
          <span>{{ row.datatermofinal }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="120px"
        align="center"
        label="Status"
        style="background-color: red"
      >
        <template slot-scope="{ row }">
          <span>{{ row.status == 1 ? "Ativo" : "Inativo" }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="160px"
        align="center"
        label="Efetua Pagamentos"
        style="background-color: red"
      >
        <template slot-scope="{ row }">
          <span>{{ row.blefetuarpagto == "S" ? "Sim" : "Não" }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="220px"
        align="center"
        label="Responsável pelo Contrato"
      >
        <template slot-scope="{ row }">
          <span>{{ row.loginresponsavelcontrato }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100px" align="center" label="Ativo">
        <template slot-scope="{ row }">
          <span>{{ row.ativo == 1 ? "Ativo" : "Inativo" }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="160px"
        align="center"
        label="Cód. Autorizadora"
      >
        <template slot-scope="{ row }">
          <span>{{ row.idautorizadorafavorecido }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{ row }">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            class="btn-edit"
            type="primary"
            size="small"
            icon="el-icon-search"
            @click="confirmEdit(row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";
import * as axios from "axios";

export default {
  name: "InlineEditTable",
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
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      var itemsContrato;

      await axios
        .get("http://localhost:5478/contrato")
        .then((res) => {
          itemsContrato = res.data;
        })
        .catch((err) => {
          // Handle error
          console.log(err);
        });

      this.list = itemsContrato.map((v) => {
        this.$set(v, "edit", false); // https://vuejs.org/v2/guide/reactivity.html
        return v;
      });
      this.listLoading = false;
    },
    cancelEdit(row) {
      row.title = row.originalTitle;
      row.edit = false;
      this.$message({
        message: "The title has been restored to the original value",
        type: "warning",
      });
    },
    confirmEdit(row) {
      console.log("entrou no confirm");
      console.log(row.id);
      row.edit = false;
      row.originalTitle = row.title;
    },
  },
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
.btn-edit {
  background-color: #d0e2fd;
  border: none;
  color: blue;
}
</style>
