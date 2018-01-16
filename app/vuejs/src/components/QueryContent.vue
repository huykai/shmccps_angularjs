<template>  
    <div class="layout-content">
      <Tabs value="">
        <TabPane v-for="cghost in cgHostsInfo" :label="cghost.name" :name="cghost.name">
          <Table border stripe height="600" :columns="cghost.columns" :data="cghost.datas"></Table>
          <Page :total="cghost.cdrcount" size="small" show-elevator show-sizer></Page>
        </TabPane>
      </Tabs>
    </div>
</template>

<script>
export default {
  props: [
    'cdrContent'
  ],
  data () {
    return {
      cghosts: [
        {
          name: 'shcg16bnk-1',
          columns: [
            {
              title: 'Name',
              key: 'name',
              width: 100,
              fixed: 'left'
            },
            {
              title: 'Age',
              key: 'age',
              width: 100
            },
            {
              title: 'Province',
              key: 'province',
              width: 100
            },
            {
              title: 'City',
              key: 'city',
              width: 100
            },
            {
              title: 'Address',
              key: 'address',
              width: 200
            },
            {
              title: 'Postcode',
              key: 'zip',
              width: 100
            },
            {
              title: 'Action',
              key: 'action',
              fixed: 'right',
              width: 120,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    }
                  }, 'View'),
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    }
                  }, 'Edit')
                ])
              }
            }
          ],
          datas: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            }
          ],
          cdrcount: 16
        }
      ],
      cdrContentInfo: this.cdrContent
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    },
    cgHostsInfo: function () {
      console.log('this.cdrContent: ', this.cdrContent)
      return this.cdrContent ? this.cdrContent : this.cghosts
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  },
  watch: {
    cdrContent: function (val) {
      console.log('watch cdrContent')
      this.cghosts = val
    }
  }
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
