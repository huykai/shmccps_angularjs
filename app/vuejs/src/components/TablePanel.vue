<template>
    <div>
      <Table border stripe height="600" :columns="cghost.columns" :data="cghost.datas"></Table>
      <Page :total="cghost.cdrcount" size="small" :current="1" :page-size="pageSize" :page-size-opts="pageSizeOpts" @on-change="changePage" show-total show-elevator show-sizer></Page>
    </div>
</template>
     
<script>
export default {
  props: [ 'tableinfo' ],
  data () {
    const pageInitSize = 50
    const pageInfo = this.tableinfo.slice(0, pageInitSize)
    return {
      pageSize: pageInitSize,
      pageSizeOpts: [
        10, 20, 40, 50, 100
      ],
      cghost: pageInfo
    }
  },
  computed: {
  },
  methods: {
    changePage () {
      console.log('changePage:', arguments)
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
