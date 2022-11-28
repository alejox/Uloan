<template>
  <section class="navigationMenu">
    <article class="navigationMenu__tabs">
      <div
        v-for="route in routes"
        class="navigationMenu__tabs-tab"
        @click="$router.push({ path: route.route })"
        :class="$route.path === route.route ? 'active' : ''"
      >
        <img :src="route.url" alt="" />
        <p>{{ route.name }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
const routes = [
  {
    name: "Home",
    route: "/home",
    url: "/src/assets/svg/home.svg",
  },
  {
    name: "Creditos",
    route: "/mycredits",
    url: "/src/assets/svg/credit.svg",
  },
  {
    name: "Perfil",
    route: "/profile",
    url: "/src/assets/svg/profile.svg",
  },
];
</script>

<style lang="scss" scoped>
.navigationMenu {
  margin-top: 20px;
  border-radius: 24px 24px 0 0;
  background: #fff;
  padding: 20px 0px;
  &__tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    &-tab {
      display: grid;
      justify-items: center;
      padding: 11px;
      border-radius: 4px;
      opacity: 0.5;
      &.active {
        opacity: 1;
      }
      p {
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: #000;
      }
    }
  }
}
</style>