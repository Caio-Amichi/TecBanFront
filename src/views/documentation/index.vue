<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=demo_English_button">Java backend integration</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/">Documentation</a>
    <a class="document-btn" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">Github Repository</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/"></a>
    <dropdown-menu class="document-btn" :items="articleList" title="系列文章" />
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/job/"></a>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template ', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: 'v4.0 ', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
        { title: ' component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: ' icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: '', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: '', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
