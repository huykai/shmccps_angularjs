<template>  
    <div class="layout-content">
      <Tabs v-if="cghosts.cdrinfo.length > 0" type="card">
        <TabPane v-for="cghost in cghosts.cdrinfo" :label="cghost.name" :name="cghost.name">
          <TablePanel :tableinfo="cghost" :key="cghost.key" />
        </TabPane>
      </Tabs>
    </div>
</template>

<script>
import TablePanel from '@/components/TablePanel'
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
    this.vuebus.$on('change_cdrContent', (value) => {
      console.log('get change_cdrContent message in QueryContent, with data:', value)
      this.setCghosts(value)
    })
    return {
      cdrContentBus: this.vuebus,
      // title: '',
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
      // this.title = this.value[0].name
    }
  },
  components: {
    'TablePanel': TablePanel
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
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-menu-left{
    background: #464c5b;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
.layout-hide-text .layout-text{
    display: none;
}
.ivu-col{
    transition: width .2s ease-in-out;
}
</style>
