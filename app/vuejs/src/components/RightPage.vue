<template>
    <i-col :span="spanRight" collapse="false">
        <QueryPanel :vuebus="vuebus"></QueryPanel>
        <QueryContent :vuebus="vuebus" :cdr-content="cdrContent"></QueryContent>
        <div class="layout-copy">
            2011-2018 &copy; Richard Hu
        </div>
    </i-col>
</template>

<script>
// import Vue from 'vue'
import querypanel from '@/components/QueryPanel'
import querycontent from '@/components/QueryContent'
export default {
  props: {
    // 'span',
    vueprops: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    // var vuebus = new Vue()
    // this.vueinstance.$on('change_cdrContent', function (value) {
    //  console.log('get change_cdrContent message, with data:', value)
      // this.$set('cdrContent', value)
    // })
    return {
      collapse: false,
      querypanelform_show: true,
      vuebus: this.vueprops.vueinstance,
      span: this.vueprops.span,
      cdrConent: {}
    }
  },
  computed: {
    spanRight: function () {
      console.log('spanRight: ', this.span)
      return this.span
    },
    cdrContentInfo: function () {
      return this.cdrContent
    }
  },
  methods: {
  },
  components: {
    'QueryPanel': querypanel,
    'QueryContent': querycontent
  }
}
</script>
<style scoped>
</style>
