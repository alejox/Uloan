<template>
  <section class="layout">
    <MenuAdmin />

    <section class="main">
      <Header />
      <div class="main__container">
        <router-view></router-view>
      </div>
    </section>
  </section>
</template>

<script setup>
import MenuAdmin from "@/components/base/MenuAdmin.vue";
import Header from "@/components/base/Header.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  @media (max-width: 800px) {
    width: 100vw;
    grid-template-columns: 1fr;
  }
}

.main {
  &__container {
    padding: 32px 64px;
  }
}
</style>