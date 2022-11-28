<template>
  <section class="bg">
    <section class="credit container">
      <article class="credit__form">
        <GoBack class="credit__back" />
        <h2 class="subtitle credit__subtitle">Mis créditos</h2>
      </article>
      <article class="credit__credits">
        <article class="credit__credits__text">
          <div class="credit__credits__text-title">
            <h3>Préstamo</h3>
            <p>{Id_Prestamo}</p>
          </div>
          <div class="credit__credits__text-number">
            <p>Cuotas <span>0/0</span></p>
          </div>
          <div class="credit__credits__text-total">
            <p>Total deuda</p>
            <h3>$0.00</h3>
          </div>
        </article>
        <img
          src="/src/assets/img/arrow.png"
          alt=""
          @click="$router.push({ path: '/mycredit' })"
        />
      </article>
    </section>
    <Menu />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
import Menu from "@/components/base/Menu.vue";
</script>

<style lang="scss" scoped>
.bg{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
}
.credit {
  &__back {
    margin-top: 24px;
  }
  &__subtitle {
    margin: 36px 0;
  }
  &__credits {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #ececee;
    background: #fff;
    border-radius: 4px;
    &__text {
      &-title {
        margin-bottom: 10px;
        h3 {
          font-size: 20px;
          font-weight: 700;
          color: #000;
        }
        p {
          font-size: 10px;
          font-weight: 500;
          color: #686c75;
        }
      }
      &-number {
        margin-bottom: 10px;
        p {
          font-size: 12px;
          color: #000;
          font-weight: 500;
          span {
            color: #686c75;
          }
        }
      }
      &-total {
        margin-bottom: 10px;
        h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0e3729;
        }
        p {
          font-size: 12px;
          font-weight: 400;
          color: #686c75;
        }
      }
    }
  }
}
</style>