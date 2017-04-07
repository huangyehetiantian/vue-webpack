<template>
     <div id="content-box">
       <router-view>
       </router-view>
       <ul v-for="item in items" class="content-box">
          <li>
               <div class="title line12">{{item.title}}</div>
               <div class="clear"></div>
               <div class="info line12">
                 时长：{{item.time}}小时 / 课时：{{item.num}}
               </div>
               <div class="curse-info ">
                 <div >
                   <span class="teacher"></span>
                    <div class="">{{item.teachername}}</div>
                 </div>
                 <div >
                   <span class="money">¥ {{item.nowmoney}}</span>
                   <div  >已有{{item.people}}人购买</div>
                 </div>
               </div>
          </li>
       </ul>
     </div>
</template>
<style>
  @import "../assets/less/content/content.less";
</style>
<script>
  export default {
    name: 'content-box',
    data () {
      return {
        items: [
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          },
          {
            title: '地球形状',
            time: 14,
            num: 666,
            teachername: '刘老师',
            nowmoney: 999,
            people: 6666
          }
        ]
      }
    }
  }
</script>

