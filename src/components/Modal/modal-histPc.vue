<template>
  <div>
    <b-modal
      id="modal-center"
      hide-header-close="true"
      cancel-title="Fechar"
      ok-title="Salvar"
      size="lg"
      centered
      title="Observações"
    >
      <div class="input-area">
        <div class="b-select-form p-float-label">
          <b-form-group
            id="input-group"
            label="PC Principal"
            label-for="input-pc"
          >
            <b-form-input
              id="input-pc"
              value="21089"
              class="p-inputtext p-component"
              disabled
            />
          </b-form-group>
        </div>
      </div>
      <table-contract class="scroll-table" />
      <div class="text-area">
        <b-form-group
          id="input-group"
          label="Observação"
          label-for="observacao"
        >
          <b-form-textarea id="observacao" class="p-inputtext p-component" />
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
import TableContract from "../../views/dashboard/admin/components/TableContract";

export default {
  components: {
    TableContract,
  },
  data() {
    return {
      boxOne: "",
      boxTwo: "",
    };
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
  },
};
</script>

<style lang="scss" scoped>
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
