<template>
    <div class="layout-querypanel" >
        <div >
            <i-button type="text" @click="toggleClick">
                <icon type="navicon" size="16"></icon>
                {{message}}
            </i-button>
        </div>     
        <Form v-if="querypanelform_show" :model="formItem" :label-width="80">
            <FormItem label="号码信息">
                <Row>
                    <Col span="2"> IMSI: </Col>
                    <Col span="6">
                        <Input v-model="formItem.imsi_input" placeholder="Enter IMSI..."></Input>
                    </Col>
                    <Col span="2"> MSISDN: </Col>
                    <Col span="6">
                        <Input v-model="formItem.imsi_input" placeholder="Enter IMSI..."></Input>
                    </Col>
                    <Col span="2"> 话单类型: </Col>
                    <Col span="6">
                        <Select v-model="formItem.select_cdrtype">
                            <Option value="scdr">S话单</Option>
                            <Option value="sgwcdr">SGW话单</Option>
                            <Option value="pgwcdr">PGW话单</Option>
                        </Select>
                    </Col>
                </Row>
            </FormItem>
            
            <FormItem label="选择时间段">
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
                            <Option value="SHMME03BNK">SHMME03BNK</Option>
                            <Option value="SHMME04BNK">SHMME04BNK</Option>
                            <Option value="SHMME05BNK">SHMME05BNK</Option>
                            <Option value="SHMME06BNK">SHMME06BNK</Option>
                            <Option value="SHMME07BNK">SHMME07BNK</Option>
                            <Option value="SHMME08BNK">SHMME08BNK</Option>
                            <Option value="SHMME09BNK">SHMME09BNK</Option>
                            <Option value="SHMME10BNK">SHMME10BNK</Option>
                        </Select>
                    </Col>
                    <Col span="2"> SAEGW: </Col>
                    <Col span="6">
                        <Select multiple v-model="formItem.select_saegw">
                            <Option value="SHSAEGW03BNK">SHSAEGW03BNK</Option>
                            <Option value="SHSAEGW04BNK">SHSAEGW04BNK</Option>
                            <Option value="SHSAEGW05BNK">SHSAEGW05BNK</Option>
                            <Option value="SHSAEGW06BNK">SHSAEGW06BNK</Option>
                            <Option value="SHSAEGW07BNK">SHSAEGW07BNK</Option>
                            <Option value="SHSAEGW08BNK">SHSAEGW08BNK</Option>
                            <Option value="SHSAEGW09BNK">SHSAEGW09BNK</Option>
                            <Option value="SHSAEGW10BNK">SHSAEGW10BNK</Option>
                            <Option value="SHSAEGW11BNK">SHSAEGW11BNK</Option>
                            <Option value="SHSAEGW12BNK">SHSAEGW12BNK</Option>
                        </Select>
                    </Col>
                    <Col span="2"> CG: </Col>
                    <Col span="6">
                        <Select multiple v-model="formItem.select_cg">
                            <Option value="SHCG15BNK">SHCG15BNK</Option>
                            <Option value="SHCG16BNK">SHCG16BNK</Option>
                            <Option value="SHCG17BNK">SHCG17BNK</Option>
                            <Option value="SHCG18BNK">SHCG18BNK</Option>
                            <Option value="SHCG19BNK">SHCG19BNK</Option>
                            <Option value="SHCG20BNK">SHCG20BNK</Option>
                            <Option value="SHCG21BNK">SHCG21BNK</Option>
                            <Option value="SHCG22BNK">SHCG22BNK</Option>
                            <Option value="SHCG23BNK">SHCG23BNK</Option>
                            <Option value="SHCG24BNK">SHCG24BNK</Option>
                            <Option value="SHCG25BNK">SHCG25BNK</Option>
                            <Option value="SHCG26BNK">SHCG26BNK</Option>
                            <Option value="SHCG27BNK">SHCG27BNK</Option>
                            <Option value="SHCG28BNK">SHCG28BNK</Option>
                            <Option value="SHCG29BNK">SHCG29BNK</Option>
                            <Option value="SHCG30BNK">SHCG30BNK</Option>
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
                    <span v-else>Loading...</span>Submit
                </Button>
                <Button type="ghost" style="margin-left: 8px">Cancel</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import axios from 'axios'
import Storages from 'js-storage'
import $ from 'jquery'
import cookie from 'jquery.cookie'
export default {
  data () {
    return {
      formItem: {
        imsi: '',
        msisdn: '',
        select_cdrtype: '',
        startdate: '',
        starttime: '',
        stopdate: '',
        stoptime: '',
        select_mme: [],
        select_saegw: [],
        select_cg: []
      },
      collapse: 'false',
      querypanelform_show: true,
      message: '点击隐藏查询参数面板',
      loading: false
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
    submitClick () {
      if (this.loading === false) {
        this.loading = true
      }
      console.log('cookie: ', cookie, $.cookie('XSRF-TOKEN'))
      console.log('token: ', 'Bearer ' + Storages.sessionStorage.get('token'))
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + Storages.sessionStorage.get('token')
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      axios.post('/api/getCgCdr', {
        mmelist: ['shmme03bnk', 'shmme04bnk'],
        saegwlist: ['shsaegw03bnk', 'shsaegw04bnk'],
        cglist: ['shcg16bnk-1', 'shcg17bnk-1'],
        cdrtype: 'scdr'
      }, {
        timeout: 1000,
        headers: {
          // 'xsrfCookieName': 'XSRF-TOKEN',
          // 'xsrfHeaderName': 'x-xsrf-token'
          // 'x-xsrf-token': $.cookie('XSRF-TOKEN')
          // 'authorization': 'Bearer ' + Storages.sessionStorage.get('token')
        },
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
        console.log('cgcdrquery response: ', response)
        this.loading = false
      })
      .catch((error) => {
        console.log('cgcdrquery error: ', error)
        this.loading = false
      })
      console.log('Submit Clicked!')
    }
  }
}
</script>

<style scoped>

</style>
