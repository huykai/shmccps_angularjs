<template>  
    <div class="layout-content">
      <Tabs value=""><!--
        <TabPane v-for="cghost in cghosts.cdrinfo" :label="cghost.name" :name="cghost.name">
          
          <Table border stripe height="600" :columns="cghost.columns" :data="cghost.datas"></Table>
          <Page :total="cghost.cdrcount" size="small" :page-size="pageSize" :page-size-opts="pageSizeOpts" show-total show-elevator show-sizer></Page>
          
          <TablePanel :tableinfo="cghost" :key="cghost.key" />
        </TabPane>-->
      </Tabs>
    </div>
</template>

<script>
// import TablePanel from '@/components/TablePanel'
export default {
  props: {
    vuebus: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    // this.vuebus.$on('change_cdrContent', (value) => {
    //  console.log('get change_cdrContent message in QueryContent, with data:', value)
    //  // this.setCghosts(value)
    // })
    return {
      cdrContentBus: this.vuebus,
      cghosts: {
        cdrinfo: [
        ]
      }
    }
  },
  computed: {
    // iconSize () {
    //  return this.spanLeft === 5 ? 14 : 24
    // }
    // cgHostsInfo: function () {
    //  console.log('this.cdrContentInfo: ', this.cdrContentInfo)
    //  return this.cdrContentInfo ? this.cdrContentInfo : this.cghosts
    // }
  },
  methods: {
    // toggleClick () {
    //  if (this.spanLeft === 5) {
    //    this.spanLeft = 2
    //    this.spanRight = 22
    //  } else {
    //    this.spanLeft = 5
    //    this.spanRight = 19
    //  }
    // },
    setCghosts (value) {
      this.$set(this.cghosts, 'cdrinfo', value)
    }
  },
  components: {
    // 'TablePanel': TablePanel
  }
  // watch: {
  //   cdrContentInfo: function (val) {
  //     console.log('watch cdrContentInfo')
  //     this.cghosts = val
  //   }
  // }
}
</script>

<style scoped>

</style>
