<template>
  <div class="app-container">
    <el-table :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80" hidden="true">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="120px"
        align="center"
        label="PC"
        style="background-color: red"
      >
        <template slot-scope="{ row }">
          <span>{{ row.dsnomepc }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="120px"
        align="center"
        label="PA"
        style="background-color: red"
      >
        <template slot-scope="{ row }">
          <span>{{ row.nucodigopa }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" align="center" label="Lagradouro">
        <template slot-scope="{ row }">
          <span>{{ row.dslogradouro }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" align="center" label="Número">
        <template slot-scope="{ row }">
          <span>{{ row.nunumero }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" align="center" label="Complemento">
        <template slot-scope="{ row }">
          <span>{{
            row.dscomplemento == null ? "Sem Complemento" : row.dscomplemento
          }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" align="center" label="Bairro">
        <template slot-scope="{ row }">
          <span>{{ row.dsbairro }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" align="center" label="Cidade">
        <template slot-scope="{ row }">
          <span>{{ row.idcidade }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" align="center" label="UF">
        <template slot-scope="{ row }">
          <span>{{ row.dsuf }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{ row }">
          <el-button
            class="btn-edit"
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="selectEdit(row)"
            v-b-modal.modal-edit-pc
          />
        </template>
      </el-table-column>
    </el-table>
    <b-modal
      id="modal-edit-pc"
      title="Editar PC"
      cancel-title="Cancelar"
      ok-title="Salvar"
      size="xl"
      :visible="openEdit"
      @ok="submitEdit"
    >
      <b-container>
        <b-row cols="12">
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Código do PA">
                <input
                  disabled
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.nucodigopa"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Código do PC">
                <input
                  disabled
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.id"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="6" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Nome do PC">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsnomepc"
                />
              </b-form-group>
            </div>
          </b-col>
        </b-row>
        <b-row cols="12">
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Logradouro">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dslogradouro"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Número">
                <input
                  type="number"
                  class="p-inputtext p-component"
                  v-model="selectedRow.nunumero"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Complemento">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dscomplemento"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Bairro">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsbairro"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="CEP">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dscep"
                />
              </b-form-group>
            </div>
          </b-col>
        </b-row>
        <b-row cols="12">
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Cidade">
                <input
                  type="number"
                  class="p-inputtext p-component"
                  v-model="selectedRow.idcidade"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="UF">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsuf"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="1" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="DDD">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsddd"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Telefone">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dstelefone"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="1" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="DDD">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsddd"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Telefone 2">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dstelefone2"
                />
              </b-form-group>
            </div>
          </b-col>
        </b-row>
        <b-row cols="12">
          <b-col cols="6" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Contato">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dscontatoestab"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="6" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Email">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsemailestab"
                />
              </b-form-group>
            </div>
          </b-col>
        </b-row>
        <b-row cols="12">
          <b-col cols="4" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Rede">
                <input
                  type="number"
                  class="p-inputtext p-component"
                  v-model="selectedRow.idrede"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="UO">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsuo"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Seguimento">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dssegmento"
                />
              </b-form-group>
            </div>
          </b-col>
          <b-col cols="3" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Marca Seguimento">
                <input
                  type="text"
                  class="p-inputtext p-component"
                  v-model="selectedRow.dsmarcasegmento"
                />
              </b-form-group>
            </div>
          </b-col>
        </b-row>
        <b-row cols="12">
          <b-col cols="2" class="form-col">
            <div class="b-select-form p-float-label">
              <b-form-group id="input-group" label="Status PC">
                <input
                  type="number"
                  class="p-inputtext p-component"
                  v-model="selectedRow.idstatuspc"
                />
              </b-form-group>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import * as axios from "axios";
import * as moment from "moment";

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
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      openEdit: false,
      selectedRow: {},
    };
  },
  methods: {
    selectEdit(row) {
      this.openEdit = true;
      this.selectedRow = row;
    },
    async submitEdit() {
      console.log(this.selectedRow);

      this.selectedRow.dtdataativacao =
        this.selectedRow.dtdataativacao == null
          ? ""
          : new Date(this.selectedRow.dtdataativacao).toISOString();

      this.selectedRow.dtdatadestativacao =
        this.selectedRow.dtdatadestativacao == null
          ? ""
          : new Date(this.selectedRow.dtdatadestativacao).toISOString();

      this.selectedRow.dtdatacancelamento =
        this.selectedRow.dtdatacancelamento == null
          ? ""
          : new Date(this.selectedRow.dtdatacancelamento).toISOString();

      console.log(this.selectedRow);

      if (this.selectedRow.id) {
        await axios
          .put(
            `http://localhost:5478/pc/${this.selectedRow.id}`,
            this.selectedRow
          )
          .then((res) => {
            console.log(res);
            this.openEdit = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
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

input {
  background-color: transparent !important;
  width: 100%;
}

.p-inputtext {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
</style>
