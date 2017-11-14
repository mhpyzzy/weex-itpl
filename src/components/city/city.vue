<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->
<!-- Update by Tw93 on 17/06/20. -->
<template>
  <div class="container">
    <wxc-indexlist :normal-list="list.normalList"
                   :hot-list-config="hotListConfig"
                   :city-location-config="cityLocationConfig"
                   v-on:wxcIndexlistItemClicked="wxcIndexlistItemClicked"
                   :show-index="showIndex"></wxc-indexlist>
  </div>
</template>

<style scoped>
  .container {
    width: 750px;
    height:1334px;
    align-items: center;
    position: fixed;
    left:0;
    top:0;
  }
</style>

<script>
  const modal = weex.requireModule('modal');
  import WxcIndexlist from '../../../packages/wxc-indexlist/index.vue';

  const dataList = require('./cityList.js');

  module.exports = {
    components: { WxcIndexlist },
    data: () => ({
      list: dataList,
      showIndex: true,
      hotListConfig: {
        type: 'group',
        title: '热门',
        list: dataList.hotList
      },
      cityLocationConfig: {
        type: 'group',
        title: '定位',
        list: [{ name: '杭州', isLocation: true }]
      }
    }),
    methods: {
      wxcIndexlistItemClicked (e) {
        // modal.toast({ 'message': JSON.stringify(e.item), 'duration': 1 });
        this.$emit('citySelect',e.item)
      }
    }
  };
</script>
