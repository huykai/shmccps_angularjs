<template>
    <i-col :span="spanRight" collapse="false">
        <QueryPanel ></QueryPanel>
        <QueryContent></QueryContent>
        <div class="layout-copy">
            2011-2018 &copy; Richard Hu
        </div>
    </i-col>
</template>

<script>
import querypanel from '@/components/QueryPanel'
import querycontent from '@/components/QueryContent'
export default {
  props: ['span'],
  data () {
    return {
      collapse: false,
      querypanelform_show: true
    }
  },
  computed: {
    spanRight: function () {
      return this.span
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
