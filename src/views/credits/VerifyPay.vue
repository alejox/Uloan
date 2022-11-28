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
            <p>{Id_Prestamo}</p>
            <h3>Préstamo</h3>
          </div>
          <div>
            <p>Cuota</p>
            <h3>0/0</h3>
          </div>
        </article>
      </article>
      <article class="credit__form">
        <h3 class="subtitle credit__subtitle">Seleccionar pago</h3>
        <article class="credit__credits">
          <article class="credit__credits__text">
            <div class="credit__credits__text-total">
              <p>Valor a pagar</p>
              <h3>$0.00</h3>
            </div>
          </article>
          <h6>Cambiar</h6>
        </article>
        <article class="credit__credits">
          <article class="credit__credits__text">
            <div class="credit__credits__text-total">
              <p>Costo</p>
              <h3>$0.00</h3>
            </div>
          </article>
        </article>
      </article>
    </section>
    <ButtonColor text="Pagar"></ButtonColor>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
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
    margin-bottom: 20px;
    h6{
        font-size: 15px;
        font-weight: 700;
        color: #0E3729;
        text-decoration: underline;
      }
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

        h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0E3729;
        }

        p {
          font-size: 12px;
          font-weight: 400;
          color: #686c75;
        }
        h4{
        color: #000;
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
      }
    }

    &__total {
      margin-top: 20px;

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