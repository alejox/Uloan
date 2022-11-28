<template>
  <section class="credit container">
    <section>
      <article class="credit__form">
        <GoBack class="credit__back" />
        <h2 class="subtitle credit__subtitle">Préstamo {Id_Prestamo}</h2>
      </article>
      <article class="credit__info">
        <article class="credit__info__data">
          <div>
            <p>Tasa</p>
            <h3>0.0%</h3>
          </div>
          <div>
            <p>Mora</p>
            <h3>Al día</h3>
          </div>
          <div>
            <p>Cuotas</p>
            <h3>0/0</h3>
          </div>
        </article>
        <article class="credit__info__total">
          <div>
            <p>Total deuda</p>
            <h3>0.0%</h3>
          </div>
        </article>
        <article class="credit__info__pay">
          <div>
            <h3>Nov 10 | $0.00</h3>
            <p>Próximo pago</p>
          </div>
        </article>
      </article>
      <article class="credit__form">
        <h3 class="subtitle credit__subtitle">Historial de pagos</h3>
        <article class="credit__credits">
          <article class="credit__credits__text">
            <div class="credit__credits__text-total">
              <p>Octubre 00 de 0000</p>
              <h3>$0.00</h3>
            </div>
          </article>
          <img src="/src/assets/img/arrow.png" alt="" @click="showInfo = true">
        </article>
      </article>
    </section>
    <ButtonColor text="Pagar $0.00" @click="$router.push({ path: '/creditpay'})"></ButtonColor>
  </section>
  <section class="payInfo" v-if="showInfo">
    <section class="payInfo__text">
      <article class="payInfo__text-title">
        <div>
          <h3>Detalles del pago</h3>
          <p>pID: 0000000</p>
        </div>
        <ButtonColor text="Aprobado"></ButtonColor>
      </article>
      <article class="payInfo__text-details">
        <article>
          <div>
            <p>Valor</p>
            <h3>$0.00</h3>
          </div>
          <div>
            <p>Cuota</p>
            <h3>0/0</h3>
          </div>
        </article>
        <article>
          <div>
            <p>Método de pago</p>
            <h3>AutoPay</h3>
          </div>
          <div>
            <p>Fecha de pago</p>
            <h3>Fecha de pago</h3>
          </div>
        </article>
      </article>
    </section>
    <section class="payInfo__layer"  @click="showInfo = false"></section>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
import { ref } from "@vue/reactivity";
const showInfo = ref(false)
</script>

<style lang="scss" scoped>


.credit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  min-height: 100vh;
  height: 100%;

  &__credits {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #ECECEE;

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
          color: #0E3729;
        }

        p {
          font-size: 12px;
          font-weight: 400;
          color: #686c75;
        }
      }
    }

  }

  &__back {
    margin-top: 24px;
  }

  &__subtitle {
    margin: 36px 0;
  }

  &__info {
    padding: 24px;
    border-radius: 4px;
    background: #396155;

    &__data {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        opacity: 0.7;
      }

      h3 {
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        text-align: end;
      }
    }

    &__total {
      margin-top: 20px;
      border-bottom: 1px solid #ebebeb;
      padding-bottom: 16px;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        opacity: 0.7;
      }

      h3 {
        font-weight: 500;
        font-size: 20px;
        color: #fff;
      }
    }

    &__pay {
      margin-top: 16px;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        opacity: 0.7;
      }

      h3 {
        font-weight: 500;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>