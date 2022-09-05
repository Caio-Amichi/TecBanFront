<template>
  <div>
    <b-modal
      id="modal-center"
      hide-header-close="true"
      size="xl"
      centered
      title="Observações"
      ok-title="Salvar"
      cancel-title="Cancelar"
      @ok="criarObs"
    >
      <el-table :data="list" border highlight-current-row style="width: 100%">
        <el-table-column align="center" label="ID" hidden="true">
          <template slot-scope="{ row }">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="Data Observação"
          style="background-color: red"
        >
          <template slot-scope="{ row }">
            <span>{{ row.dtobservacao.slice(0, 10) }}</span>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="Descrição Observação"
          style="background-color: red"
        >
          <template slot-scope="{ row }">
            <span class="span-dsobservacao">{{ row.dsobservacao }}</span>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="Login Observação"
          style="background-color: red"
        >
          <template slot-scope="{ row }">
            <span>{{ row.login }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-col class="form-col" style="margin-top: 10px">
        <div class="input-form p-float-label">
          <b-form-textarea
            placeholder="Adicionar Nova Observação"
            v-model="input_observacao"
          ></b-form-textarea>
        </div>
      </el-col>
    </b-modal>
  </div>
</template>

<script>
import TableContract from "../../views/dashboard/admin/components/TableContract";
import * as axios from "axios";
import * as moment from "moment";

export default {
  components: {
    TableContract,
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
    idcontrato: {
      type: Number,
      default: function () {
        return null;
      },
    },
  },
  data() {
    return {
      boxOne: "",
      boxTwo: "",
      input_observacao: "",
    };
  },
  watch: {
    list: function (val) {
      console.log("idcontrato", val);
    },
  },
  methods: {
    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then((value) => {
          this.boxOne = value;
        })
        .catch((err) => {
          // An error occurred
        });
    },
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value;
        })
        .catch((err) => {
          // An error occurred
        });
    },

    async criarObs() {
      await axios
        .post("http://localhost:5478/contratoobs", {
          login: "Default",
          id: Math.floor(Math.random() * 1001),
          dsobservacao: this.input_observacao,
          dtobservacao: moment(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
          idcontrato: this.$props.idcontrato,
        })
        .then((res) => {
          console.log(res.data);
          this.$props.list = [res.data];
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
.span-dsobservacao {
  text-overflow: ellipsis;
  word-break: normal;
}

.scroll-table {
  overflow-y: scroll;
  height: 40vh;
}

#observacao {
  height: 100px;
}

.text-area {
  margin-top: 20px;
  padding: 0 20px;
}

.input-area {
  display: flex;
  padding: 0 20px;
  margin-bottom: 10px;
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
  font-size: 12px;
  color: #959595;
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

.select-form {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

.b-select-form {
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 250px;
  margin-right: 10px;
}

.p-fluid .p-inputtext {
  width: 100%;
}

.p-inputtext {
  margin: 0;
}
</style>
