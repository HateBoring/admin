<template>
  <div class="articleList">
    <el-row :gutter="5" style="margin-bottom: 10px;height: 35px;">
      <el-col :span="5">
        <el-input v-model="a_title" size="small">
          <template slot="prepend">文章标题</template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="a_author" size="small">
          <template slot="prepend">作者</template>
        </el-input>
      </el-col>
      <el-col :span="3" style="padding-top: 2px;">
        <el-select v-model="a_class" placeholder="所属栏目" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5.5" style="padding-top: 2px;">
        <el-date-picker
          v-model="dateTime"
          type="daterange"
          align="right"
          unlink-panels
          size="small"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
      <el-col :span="2" style="padding-top: 2px;">
        <el-button size="small" type="warning" style="width: 100%">搜索</el-button>
      </el-col>
    </el-row>
    
    <el-button-group>
      <el-button type="primary" class="article_list_button" icon="el-icon-document-add" size="small">添加文章</el-button>
      <el-button type="danger" class="article_list_button" icon="el-icon-delete" size="small">删除文章</el-button>
    </el-button-group>
    <div class="list_box">
      <el-row class="list_box_title">
        <el-col :span="1">
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
        </el-col>
        <el-col :span="2">序号</el-col>
        <el-col :span="5">标题</el-col>
        <el-col :span="3">作者</el-col>
        <el-col :span="3">所属栏目</el-col>
        <el-col :span="3">缩略图</el-col>
        <el-col :span="4">发布时间</el-col>
        <el-col :span="3">操作</el-col>
      </el-row>
      <!-- 最外层单选组 -->
      <el-row v-for="(item,index) in articleList" :key="index" class="art_list_row">
        <el-col :span="1">
          <el-checkbox-group v-model="checkedGroup" @change="handleCheckedGroupChange">
            <el-checkbox :label="index" :key="index"></el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col :span="2">{{item.id}}</el-col>
        <el-col :span="5">{{item.title}}</el-col>
        <el-col :span="3">{{item.author}}</el-col>
        <el-col :span="3">{{item.class}}</el-col>
        <el-col :span="3">缩略图</el-col>
        <el-col :span="4">{{item.time}}</el-col>
        <el-col :span="3">操作</el-col>
      </el-row>
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleList',
  data() {
    return {
      a_title: '', // 搜索标题
      a_author: '', // 搜索作者
      a_class: '', // 所属分类
      dateTime: '', // 时间范围
      pickerOptions: { // 时间范围快捷设置
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      checkAll: false, // 是否全选
      articleList: [ // 假数据
        {id: 1,title: '奋力完成好明年经济工作重点任务1',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 2,title: '奋力完成好明年经济工作重点任务2',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 3,title: '奋力完成好明年经济工作重点任务3',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 4,title: '奋力完成好明年经济工作重点任务4',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 5,title: '奋力完成好明年经济工作重点任务5',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 6,title: '奋力完成好明年经济工作重点任务1',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 7,title: '奋力完成好明年经济工作重点任务2',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 8,title: '奋力完成好明年经济工作重点任务3',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 9,title: '奋力完成好明年经济工作重点任务4',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'},
        {id: 10,title: '奋力完成好明年经济工作重点任务5',author: '本报评论员',class: '今日播报',imgsrc: 'null',time: '2019-12-17 11:30'}
      ],
      checkedGroup: [], // 选中保存的数组
    }
  },
  methods: {
    // 单选
    handleCheckAllChange(val){
      console.log(val)
    },
    // 全选
    handleCheckedGroupChange(value){
      console.log(value)
    }
  }
}
</script>

<style scoped>
.articleList {
  height: 100%;
}
/deep/ .el-pager li.active {
  color: rgb(131, 193, 255);
}
/deep/ .el-pagination .btn-next {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
/deep/ .el-pagination .btn-prev{
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
/deep/ .el-pager li {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.list_box {
  margin-top: 20px;
  font-size: 14px;
  border-radius: 5px;
  overflow: hidden;
}
.list_box_title {
  background: rgba(0, 0, 0, 0.3);
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  padding: 0 20px;
  box-sizing: border-box;
}
/deep/ .el-checkbox__label {
  display: none;
}
.art_list_row {
  background: rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(71, 71, 71, 0.664);
  /* height: 40px;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box; */
}
.art_list_row:last-child {
  border: none;
}
</style>
