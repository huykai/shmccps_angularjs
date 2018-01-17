<template>
    <div>
      <Table border stripe height="600" :columns="cghost.columns" :data="cghost.datas"></Table>
      <Page :total="cghost.cdrcount" size="small" :page-size="pageSize" :page-size-opts="pageSizeOpts" show-total show-elevator show-sizer></Page>
    </div>
</template>
     
<script>
export default {
  props: [ 'tableinfo' ],
  data () {
    return {
      pageSize: 50,
      pageSizeOpts: [
        10, 20, 40, 50, 100
      ],
      cghost: this.tableinfo
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>

</style>
