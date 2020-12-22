<template>
     <div class="main-header">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
         </a-button>
        <div class="breadcrumb">
          <a-breadcrumb>
            <a-breadcrumb-item>
                {{currentRoute[0] ? currentRoute[0].meta.title : ''}}
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <router-link :to="{name:currentRoute[1].name}">
                    {{currentRoute[1] ? currentRoute[1].meta.title:''}}
                </router-link>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <ul class="user-info">
            <li>欢迎，{{$store.state.user.username}}<a-icon type="down" /></li>
            <li class="loginout" @click="logout">退出</li>
        </ul>
      </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route() {
    //   console.log(this.$router);
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>

<style lang="less">
.main-header{
    position: relative;
    .user-info{
        position: absolute;
        top: 0;
        right: 20px;
        z-index: 999;
    }
}
</style>
