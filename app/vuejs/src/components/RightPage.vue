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
import Vue from 'vue'
import querypanel from '@/components/QueryPanel'
import querycontent from '@/components/QueryContent'
export default {
  props: ['span'],
  data () {
    var vuebus = new Vue()
    vuebus.$on('change_cdrContent', function (value) {
      console.log('get change_cdrContent message, with data:', value)
      this.$set('cdrContent', value)
    })
    return {
      collapse: false,
      querypanelform_show: true,
      vuebus: vuebus,
      cdrConent: {}
    }
  },
  computed: {
    spanRight: function () {
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
