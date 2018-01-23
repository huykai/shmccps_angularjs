<template>
  <div>
    <Collapse>
      <Panel v-for="hostLogInfo in hostLogInfos" name="hostLogInfo.jobName">
         {{hostLogInfo.jobResult}}
         <p slot="content">{{hostLogInfo.jobResult}}</p>
      </Panel>
    </Collapse>
  </div>
</template>
     
<script>
export default {
  props: [ 'datainfo' ],
  data () {
    return {
    }
  },
  computed: {
    hostLogInfos () {
      let hostLogInfo = this.datainfo
      let hostLogResults = []
      let hostLogJobInfos = hostLogInfo.stdout
      let hostLogJobArrays = hostLogJobInfos.split('command:').slice(1)
      for (let hostLogJobArray of hostLogJobArrays) {
        let hostLogJobCmds = hostLogJobArray.split('result:')
        let hostLogResult = {}
        hostLogResult.jobName = hostLogJobCmds[0]
        hostLogResult.jobResult = hostLogJobCmds[1]
        hostLogResults.push(hostLogResult)
      }
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>

</style>
