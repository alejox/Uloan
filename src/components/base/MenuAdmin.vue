<template>
  <section class="menu">
    <div>
      <img class="menu__logo" src="@/assets/img/logo.svg" alt="Logo Uloan" />

      <article class="menu__routes">
        <div
          v-for="route in routes"
          class="menu__routes__item"
          @click="$router.push({ path: route.route })"
          :class="$route.path === route.route ? 'active' : ''"
        >
          <img :src="route.img" alt="dashboard" />
          <p class="menu__routes__item-text">{{ route.name }}</p>
        </div>
      </article>
    </div>

    <div class="menu__logout">
      <img src="@/assets/svg/logout.svg" alt="" />
      <p class="menu__logout-text">Cerrar sesión</p>
    </div>
  </section>
</template>

<script setup>
const routes = [
  { img: "src/assets/svg/dashboard.svg", name: "Dashboard", route: "/admin" },
  { img: "src/assets/svg/usersMenu.svg", name: "Usuarios", route: "/" },
  { img: "src/assets/svg/request.svg", name: "Solicitudes", route: "/" },
  { img: "src/assets/svg/profileMenu.svg", name: "Perfil", route: "/" },
  { img: "src/assets/svg/reports.svg", name: "Reportes", route: "/" },
];
</script>

<style lang="scss" scoped>
.menu {
  background: $color-green;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 30px 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__logo {
    display: block;
    width: 64px;
    margin: 0 auto 30px;
  }
  &__routes {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 30px;
    color: #fff;
    &__item {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 4px 8px;
      cursor: pointer;
      &.active {
        background: rgba(255, 255, 255, 0.05);
        border-right: 2px solid #ffffff;
        border-radius: 4px 0px 0px 4px;
      }
      &-text {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        text-align: left;
      }
    }
  }
  &__logout {
    display: flex;
    color: #fff;
    gap: 10px;
    justify-content: center;
    cursor: pointer;
    &-text {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
}
</style>