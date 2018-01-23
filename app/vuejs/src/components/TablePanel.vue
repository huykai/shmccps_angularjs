<template>
    <div>
      <Table border stripe height="600" :columns="cghost.columns" :data="pageData"></Table>
      <Page :total="cghost.cdrcount" size="small" :current="1" :page-size="pageSize" :page-size-opts="pageSizeOpts" @on-change="changePage" show-total show-elevator show-sizer></Page>
    </div>
</template>
     
<script>
export default {
  props: [ 'tableinfo' ],
  data () {
    const pageInitSize = 50
    const pageInfo = this.tableinfo.datas.slice(0, pageInitSize + 1)
    return {
      pageSize: pageInitSize,
      pageSizeOpts: [
        10, 20, 40, 50, 100
      ],
      cghost: this.tableinfo,
      pageData: pageInfo
    }
  },
  computed: {
  },
  methods: {
    changePage (pageNo) {
      console.log('changePage:', pageNo)
      // const lastRecord = ((pageNo - 1) * this.pageSize + this.pageSize) >= this.cghost.cdrcount ? this.cghost.cdrcount - 1 : ((pageNo - 1) * this.pageSize + this.pageSize - 1)
      const pageInfo = this.tableinfo.datas.slice((pageNo - 1) * this.pageSize, pageNo * this.pageSize)
      this.pageData = pageInfo
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
