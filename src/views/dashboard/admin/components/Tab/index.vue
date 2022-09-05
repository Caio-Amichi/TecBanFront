<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <div class="title-table">{{ item.title }}</div>
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
        </keep-alive>
        <div v-if="activeName=='US'" class="grid-atividade">
            <div class="title-table">
              Atividade - Colher Assinatura Externa
            </div>
            <grid-atividade/>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabPane from './components/TabPane'
import GridAtividade from '../GridAtividade'

export default {
  name: 'Tab',
  components: { TabPane, GridAtividade },
  data() {
    return {
      tabMapOptions: [
        { label: 'Solicitações', key: 'CN', title: 'Solicitações do Contrato' },
        { label: 'Atividades', key: 'US', title: 'Lista de Atividades' },
        { label: 'Contrato', key: 'JP', title: 'Contrato' },
        { label: 'Recebimentos', key: 'EU', title: 'Recebimentos' },
        { label: 'Anexos', key: '5', title: 'Anexos' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  watch: {
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
  .title-table{
    padding: 10px;
    color: #223354;
    font-weight: bold;
  }
  .grid-atividade{
    margin-top: 30px;
  }
</style>
