<template>
  <div>
    <Collapse>
      <Panel class="cmdresult" v-for="hostLogInfo in hostLogInfos" name="hostLogInfo.jobName">
        {{hostLogInfo.jobName}}
        <p slot="content">
          <span v-for="jobcmdres in hostLogInfo.jobResult">{{jobcmdres}}<br></span>
        </p>
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
        // console.log('hostLogJobCmds[0]: ', hostLogJobCmds[0])
        // console.log('hostLogJobCmds[1]: ', hostLogJobCmds[1])
        if (hostLogJobCmds[1]) {
          hostLogResult.jobResult = hostLogJobCmds[1].split('\n')
        } else {
          hostLogResult.jobResult = []
        }
        // console.log('hostLogResult: jobName = ', hostLogResult.jobName)
        // console.log('hostLogResult: jobResult = ', hostLogResult.jobResult)
        hostLogResults.push(hostLogResult)
      }
      return hostLogResults
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
.cmdresult{
  text-align: left;  
}
</style>
