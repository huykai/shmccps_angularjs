<template>
    <div class="layout-querypanel" >
        <div >
            <i-button type="text" @click="toggleClick">
                <icon type="navicon" size="16"></icon>
                {{message}}
            </i-button>
        </div>     
        <Form v-if="querypanelform_show" :model="formItem" :label-width="80">
            <FormItem label="号码信息" v-if="!showAnalysisPanel">
                <Row>
                    <i-col span="2"> IMSI: </i-col>
                    <i-col span="6">
                        <Input v-model="formItem.imsi" placeholder="Enter IMSI..."></Input>
                    </i-col>
                    <i-col span="2"> MSISDN: </i-col>
                    <i-col span="6">
                        <Input v-model="formItem.msisdn" placeholder="Enter MSISDN..."></Input>
                    </i-col>
                    <i-col span="2"> 话单类型: </i-col>
                    <i-col span="6">
                        <Select v-model="formItem.select_cdrtype">
                            <Option value="scdr">S话单</Option>
                            <Option value="sgwcdr">SGW话单</Option>
                            <Option value="pgwcdr">PGW话单</Option>
                        </Select>
                    </i-col>
                </Row>
            </FormItem>
            
            <FormItem label="选择时间段" v-if="!showAnalysisPanel"> 
                <Row>
                    <Col span="5">
                        <DatePicker type="date" placeholder="Select date" v-model="formItem.startdate"></DatePicker>
                    </Col>
                    <Col span="1" style="text-align: center">-</Col>
                    <Col span="5">
                        <TimePicker type="time" placeholder="Select time" v-model="formItem.starttime"></TimePicker>
                    </Col>
                    <Col span="2"> --- </Col>
                    <Col span="5">
                        <DatePicker type="date" placeholder="Select date" v-model="formItem.stopdate"></DatePicker>
                    </Col>
                    <Col span="1" style="text-align: center">-</Col>
                    <Col span="5">
                        <TimePicker type="time" placeholder="Select time" v-model="formItem.stoptime"></TimePicker>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="网元信息">
                <Row>
                    <Col span="2"> MME: </Col>
                    <Col span="6">
                        <Select multiple v-model="formItem.select_mme">
                            <Option value="shmme03bnk">SHMME03BNK</Option>
                            <Option value="shmme04bnk">SHMME04BNK</Option>
                            <Option value="shmme05bnk">SHMME05BNK</Option>
                            <Option value="shmme06bnk">SHMME06BNK</Option>
                            <Option value="shmme07bnk">SHMME07BNK</Option>
                            <Option value="shmme08bnk">SHMME08BNK</Option>
                            <Option value="shmme09bnk">SHMME09BNK</Option>
                            <Option value="shmme10bnk">SHMME10BNK</Option>
                        </Select>
                    </Col>
                    <Col span="2"> SAEGW: </Col>
                    <Col span="6">
                        <Select multiple v-model="formItem.select_saegw">
                            <Option value="shsaegw03bnk">SHSAEGW03BNK</Option>
                            <Option value="shsaegw04bnk">SHSAEGW04BNK</Option>
                            <Option value="shsaegw05bnk">SHSAEGW05BNK</Option>
                            <Option value="shsaegw06bnk">SHSAEGW06BNK</Option>
                            <Option value="shsaegw07bnk">SHSAEGW07BNK</Option>
                            <Option value="shsaegw08bnk">SHSAEGW08BNK</Option>
                            <Option value="shsaegw09bnk">SHSAEGW09BNK</Option>
                            <Option value="shsaegw10bnk">SHSAEGW10BNK</Option>
                            <Option value="shsaegw11bnk">SHSAEGW11BNK</Option>
                            <Option value="shsaegw12bnk">SHSAEGW12BNK</Option>
                        </Select>
                    </Col>
                    <Col span="2"> CG: </Col>
                    <Col span="6">
                        <Select multiple v-model="formItem.select_cg">
                            <Option v-for="cghostname in cghostnames" :value="cghostname.name">{{cghostname.label}}</Option>
                        </Select>
                    </Col>
                </Row>
            </FormItem>
            
            <FormItem label="选择CDR统计选项" v-if="showStatisticsPanel">
                <Row>
                    <Col span="2"> 分析-分组选项: </Col>
                    <Col span="10">
                        <Select multiple v-model="formItem.select_group_items">
                            <Option v-for="cdrgroupitem in cdrgroupitems[formItem.select_cdrtype]" :value="cdrgroupitem.name">{{cdrgroupitem.label}}</Option>
                        </Select>
                    </Col>
                    <Col span="2"> 分析-观察选项: </Col>
                    <Col span="10">
                        <Select multiple v-model="formItem.select_monitor_items">
                            <Option v-for="cdrmonitoritem in cdrmonitoritems[formItem.select_cdrtype]" :value="cdrmonitoritem.name">{{cdrmonitoritem.label}}</Option>
                        </Select>
                    </Col>
                </Row>
            </FormItem> 
            
            <!--
            <FormItem label="Slider">
                <Slider v-model="formItem.slider" range></Slider>
            </FormItem>
            <FormItem label="Text">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            -->
            <FormItem>
                <Button type="primary" :loading="loading" @click="submitClick">
                    <span v-if="!loading">Submit!</span>
                    <span v-else>Loading...</span>
                </Button>
                <Button type="ghost" style="margin-left: 8px">Cancel</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import axios from 'axios'
import Storages from 'js-storage'
// import $ from 'jquery'
// import cookie from 'jquery.cookie'
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
    let date = new Date()
    this.vuebus.$on('cdrAnalysis', () => this.setForAnalysis())
    this.vuebus.$on('cdrQuery', () => this.setForQuery())
    this.vuebus.$on('cdrStatistics', () => this.setForStatistics())
    return {
      formItem: {
        imsi: '',
        msisdn: '',
        select_cdrtype: 'scdr',
        startdate: date,
        starttime: date,
        stopdate: date,
        stoptime: date,
        select_mme: ['shmme03bnk'],
        select_saegw: ['shsaegw03bnk'],
        select_cg: ['shcg25bnk-1'],
        select_group_items: ['accessPointNameNI'],
        select_monitor_items: ['chargingCharacteristics']
      },
      cghostnames: [
        {name: 'shcg16bnk-1', label: 'SHCG16BNK-1'},
        {name: 'shcg17bnk-1', label: 'SHCG17BNK-1'},
        {name: 'shcg18bnk-1', label: 'SHCG18BNK-1'},
        {name: 'shcg19bnk-1', label: 'SHCG19BNK-1'},
        {name: 'shcg20bnk-1', label: 'SHCG20BNK-1'},
        {name: 'shcg21bnk-1', label: 'SHCG21BNK-1'},
        {name: 'shcg22bnk-1', label: 'SHCG22BNK-1'},
        {name: 'shcg23bnk-1', label: 'SHCG23BNK-1'},
        {name: 'shcg24bnk-1', label: 'SHCG24BNK-1'},
        {name: 'shcg25bnk-1', label: 'SHCG25BNK-1'},
        {name: 'shcg26bnk-1', label: 'SHCG26BNK-1'},
        {name: 'shcg27bnk-1', label: 'SHCG27BNK-1'},
        {name: 'shcg28bnk-1', label: 'SHCG28BNK-1'},
        {name: 'shcg29bnk-1', label: 'SHCG29BNK-1'},
        {name: 'shcg30bnk-1', label: 'SHCG30BNK-1'}
      ],
      cdrgroupitems: {
        'scdr': [
          {name: 'duration', label: 'duration'},
          {name: 'accessPointNameNI', label: 'accessPointNameNI'},
          {name: 'causeForRecClosing', label: 'causeForRecClosing'},
          {name: 'servedIMSI', label: 'servedIMSI'},
          {name: 'sgsnAddress', label: 'sgsnAddress'},
          {name: 'accessPointNameOI', label: 'accessPointNameOI'},
          {name: 'servedMSISDN', label: 'servedMSISDN'},
          {name: 'chargingCharacteristics', label: 'chargingCharacteristics'},
          {name: 'systemType', label: 'systemType'}
          // {name: 'dataVolumeGPRSUplink', label: 'dataVolumeGPRSUplink'},
          // {name: 'dataVolumeGPRSDownlink', label: 'dataVolumeGPRSDownlink'}
        ],
        'sgwcdr': [
          {name: 'duration', label: 'duration'},
          {name: 'accessPointNameNI', label: 'accessPointNameNI'},
          {name: 'servedIMSI', label: 'servedIMSI'},
          {name: 'sGWAddress', label: 'sGWAddress'},
          {name: 'pGWAddressUsed', label: 'pGWAddressUsed'},
          {name: 'nodeID', label: 'nodeID'},
          {name: 'rATType', label: 'rATType'},
          {name: 'servedMSISDN', label: 'servedMSISDN'},
          {name: 'chargingCharacteristics', label: 'chargingCharacteristics'}
          // {name: 'dataVolumeGPRSUplink', label: 'dataVolumeGPRSUplink'},
          // {name: 'dataVolumeGPRSDownlink', label: 'dataVolumeGPRSDownlink'}
        ],
        'pgwcdr': [
          {name: 'duration', label: 'duration'},
          {name: 'accessPointNameNI', label: 'accessPointNameNI'},
          {name: 'causeForRecClosing', label: 'causeForRecClosing'},
          {name: 'servedIMSI', label: 'servedIMSI'},
          {name: 'pGWAddress', label: 'pGWAddress'},
          {name: 'nodeID', label: 'nodeID'},
          {name: 'ratingGroup', label: 'ratingGroup'},
          {name: 'serviceIdentifier', label: 'serviceIdentifier'},
          {name: 'rATType', label: 'rATType'},
          {name: 'servedMSISDN', label: 'servedMSISDN'},
          {name: 'chargingCharacteristics', label: 'chargingCharacteristics'}
          // {name: 'datavolumeFBCUplink', label: 'datavolumeFBCUplink'},
          // {name: 'datavolumeFBCDownlink', label: 'datavolumeFBCDownlink'}
        ]
      },
      cdrmonitoritems: {
        'scdr': [
          {name: 'duration', label: 'duration'},
          {name: 'accessPointNameNI', label: 'accessPointNameNI'},
          {name: 'causeForRecClosing', label: 'causeForRecClosing'},
          {name: 'servedIMSI', label: 'servedIMSI'},
          {name: 'sgsnAddress', label: 'sgsnAddress'},
          {name: 'accessPointNameOI', label: 'accessPointNameOI'},
          {name: 'servedMSISDN', label: 'servedMSISDN'},
          {name: 'chargingCharacteristics', label: 'chargingCharacteristics'},
          {name: 'systemType', label: 'systemType'}
          // {name: 'dataVolumeGPRSUplink', label: 'dataVolumeGPRSUplink'},
          // {name: 'dataVolumeGPRSDownlink', label: 'dataVolumeGPRSDownlink'}
        ],
        'sgwcdr': [
          {name: 'duration', label: 'duration'},
          {name: 'accessPointNameNI', label: 'accessPointNameNI'},
          {name: 'servedIMSI', label: 'servedIMSI'},
          {name: 'sGWAddress', label: 'sGWAddress'},
          {name: 'pGWAddressUsed', label: 'pGWAddressUsed'},
          {name: 'nodeID', label: 'nodeID'},
          {name: 'rATType', label: 'rATType'},
          {name: 'servedMSISDN', label: 'servedMSISDN'},
          {name: 'chargingCharacteristics', label: 'chargingCharacteristics'}
          // {name: 'dataVolumeGPRSUplink', label: 'dataVolumeGPRSUplink'},
          // {name: 'dataVolumeGPRSDownlink', label: 'dataVolumeGPRSDownlink'}
        ],
        'pgwcdr': [
          {name: 'duration', label: 'duration'},
          {name: 'accessPointNameNI', label: 'accessPointNameNI'},
          {name: 'causeForRecClosing', label: 'causeForRecClosing'},
          {name: 'servedIMSI', label: 'servedIMSI'},
          {name: 'pGWAddress', label: 'pGWAddress'},
          {name: 'nodeID', label: 'nodeID'},
          {name: 'ratingGroup', label: 'ratingGroup'},
          {name: 'serviceIdentifier', label: 'serviceIdentifier'},
          {name: 'rATType', label: 'rATType'},
          {name: 'servedMSISDN', label: 'servedMSISDN'},
          {name: 'chargingCharacteristics', label: 'chargingCharacteristics'}
          // {name: 'datavolumeFBCUplink', label: 'datavolumeFBCUplink'},
          // {name: 'datavolumeFBCDownlink', label: 'datavolumeFBCDownlink'}
        ]
      },
      collapse: 'false',
      querypanelform_show: true,
      message: '点击隐藏查询参数面板',
      loading: false,
      postApiString: '/api/getCgCdr',
      showAnalysisPanel: false,
      showQueryPanel: true,
      showStatisticsPanel: false,
      cdrContentBus: this.vuebus
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick () {
      console.log('toggleClick clicked', this.collapse)
      if (this.collapse === 'false') {
        console.log('collapse:', this.collapse)
        this.querypanelform_show = false
        this.collapse = 'true'
        this.message = '点击打开参数面板'
      } else {
        console.log('collapse:', this.collapse)
        this.querypanelform_show = true
        this.collapse = 'false'
        this.message = '点击隐藏参数面板'
      }
    },
    setForAnalysis () {
      console.log('setForAnalysis')
      this.showAnalysisPanel = true
      this.showQueryPanel = false
      this.showStatisticsPanel = false
      this.postApiString = '/api/getCgCdrAnalysis'
    },
    setForQuery () {
      console.log('setForQuery')
      this.showAnalysisPanel = false
      this.showQueryPanel = true
      this.showStatisticsPanel = false
      this.postApiString = '/api/getCgCdr'
    },
    setForStatistics () {
      console.log('cdrForStatistics')
      this.showAnalysisPanel = false
      this.showQueryPanel = false
      this.showStatisticsPanel = true
      this.postApiString = '/api/getCgCdrStatistics'
    },
    submitClick () {
      if (this.loading === false) {
        this.loading = true
      }
      // console.log('cookie: ', cookie, $.cookie('XSRF-TOKEN'))
      // console.log('token: ', 'Bearer ' + Storages.sessionStorage.get('token'))
      // console.log(`startdate: ${this.formItem.startdate} ; starttime: ${this.formItem.starttime}`)
      console.log('submit Api String: ', this.postApiString)
      if (this.vuebus.data instanceof Object) {
        this.vuebus.data['postApiString'] = this.postApiString
      } else {
        this.vuebus.data = {'postApiString': this.postApiString}
      }
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + Storages.sessionStorage.get('token')
      axios.defaults.timeout = 600000
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      if (this.formItem.startdate === '') {
        alert('Startdate 不能为空')
        return
      }
      if (this.formItem.starttime === '') {
        alert('Starttime 不能为空')
        return
      }
      if (this.formItem.stopdate === '') {
        alert('Stoptdate 不能为空')
        return
      }
      if (this.formItem.stoptime === '') {
        alert('Stoptime 不能为空')
        return
      }
      let date = new Date(this.formItem.startdate)
      let time = new Date(this.formItem.starttime)
      let dateYear = date.getFullYear()
      let dateMonth = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      let dateDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      let timeHour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
      let timeMinute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
      let timeSecond = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
      let startdatetime = dateYear + dateMonth + dateDate + timeHour + timeMinute + timeSecond
      date = new Date(this.formItem.stopdate)
      time = new Date(this.formItem.stoptime)
      dateYear = date.getFullYear()
      dateMonth = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      dateDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      timeHour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
      timeMinute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
      timeSecond = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
      let stopdatetime = dateYear + dateMonth + dateDate + timeHour + timeMinute + timeSecond
      // axios.post('/api/getCgCdr', {
      axios.post(this.postApiString, {
        imsi: this.formItem.imsi,
        msisdn: this.formItem.msisdn,
        startdatetime: startdatetime,
        stopdatetime: stopdatetime,
        mmelist: this.formItem.select_mme,
        saegwlist: this.formItem.select_saegw,
        cglist: this.formItem.select_cg,
        cdrtype: this.formItem.select_cdrtype,
        cdrgroupitems: this.formItem.select_group_items,
        cdrmonitoritems: this.formItem.select_monitor_items
      }, {
        timeout: 1200000,
        headers: {
          // 'Content-Type': 'applicaton/json'
          // 'xsrfCookieName': 'XSRF-TOKEN',
          // 'xsrfHeaderName': 'x-xsrf-token'
          // 'x-xsrf-token': $.cookie('XSRF-TOKEN')
          // 'authorization': 'Bearer ' + Storages.sessionStorage.get('token')
        },
        // transformResponse: [function (data) {
        //   console.log(data)
        // }],
        transformRequest: [function (data) {
          var str = []
          for (var p in data) {
            let pName = encodeURIComponent(p)
            let pValue = encodeURIComponent(data[p])
            str.push(pName + '=' + pValue)
          }
          // console.log('transformRequest: ' , str.join("&"));
          return str.join('&')
        }]
      })
      .then((response) => {
        console.log(new Date(), '  cgcdrquery response: ')
        this.cdrContentBus.$emit('change_cdrContent', response.data)
        this.loading = false
      })
      .catch((error) => {
        console.log(new Date(), ' cgcdrquery error: ', error)
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          if (error.response.status === 401 || error.response.status === 403) {
            alert('用户状态已过期，请退出后再次登录！')
          }
        }
        this.loading = false
      })
      console.log(new Date(), ' Submit Clicked!')
    }
  }
}
</script>

<style scoped>

</style>
