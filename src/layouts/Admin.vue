<template>
  <section class="layout">
    <section class="layout__admin">
      <img src="/src/assets/img/admin.jpg" alt="">
      <article class="layout__admin__container">
        <div>
        <h1>Request your credit</h1>
        <h2>It's time for a change, take a risk! Request your space with us now and accept the change.</h2>
        </div>
      </article>
    </section>
    <section class="main">
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
  grid-template-columns: 70% 1fr;
  height: 100vh;
  &__admin{
    background-color: #0E3125;
    img{
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
    &__container{
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 40px;
      > div{
      }
    }
    h1{
      color: #fff;
      font-size: 36px;
      font-weight: 700;
    }
    h2{
      font-size: 16px;
      font-weight: 400;
      color: #FFF;
    }
  }
}

.main {
}
</style>