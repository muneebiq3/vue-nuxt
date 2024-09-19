<template>
  <div ref="triggerElement" class="header">
    <a href="#">
      <IconsMenu class="menu-icon"/>
    </a>
    <a href="#">
      <IconsLogo class="mobile-logo"/>
    </a>
    <a href="#"><img src="@/assets/images/app-store.png" class="app-store"/></a>
  </div>
</template>

<script setup lang="js">
</script>

<style scoped lang="scss">
.header {
  background-image: url('@/assets/images/banner-bg.svg');
  display: flex;
  justify-content: space-between;
  padding: 20px 101px 30px 89px;
  align-items: center;

  .menu-icon {
    width: 40px;
    height: 40px;
  }

  .mobile-logo {
    width: 100px;
    height: 70px;
  }

  .app-store {
    width: 121px;
    height: 35px;
  }
}
</style>