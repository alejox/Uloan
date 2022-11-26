<template>
  <section class="bg">
    <section class="home">
      <article class="home__header">
        <div>
          <img src="/src/assets/img/LogoUloan.png" alt="" />
          <h2>Hola Pablo!</h2>
        </div>
        <div>
          <img src="/src/assets/img/Avatar.png" alt="" />
        </div>
      </article>
      <article class="home__data">
        <article class="home__data__chart">
          <div>
            <VueApexCharts
              type="radialBar"
              :options="chartOptions"
              :series="series"
              height="100%"
              width="100%"
            ></VueApexCharts>
          </div>
          <div>
            <p>Pagos realizados</p>
            <h4>$0.00</h4>
            <p>Total deuda</p>
            <h4>$0.00</h4>
          </div>
        </article>
        <article class="home__data__info">
          <div>
            <p>Tasa</p>
            <h4>0.0%</h4>
          </div>
          <div>
            <p>Mora</p>
            <h4>Cuotas</h4>
          </div>
          <div>
            <p>Cuotas</p>
            <h4>0/0</h4>
          </div>
        </article>
        <article class="home__data__pay">
          <div>
            <p>Último pago realizado</p>
            <h4>Nov 10</h4>
          </div>
          <div>
            <h4>$0.00</h4>
          </div>
        </article>
        <article class="home__data__pay">
          <div>
            <h4>Próximo pago</h4>
            <p>Nov 10 | $0.00</p>
          </div>
          <ButtonColorVue
            text="Pagar"
            @click="$router.push({ path: '/mycredits' })"
          ></ButtonColorVue>
        </article>
      </article>
    </section>
    <section class="banners">
      <article class="banners__credit">
        <img src="/src/assets/img/Bussines.jpg" alt="" />
        <div>
          <h4>Solicita su crédito</h4>
          <p>
            Aún no tiene créditos disponibles, solicite su cupo ahora con
            nosotros
          </p>
          <ButtonColorVue
            text="Solicitar ahora"
            class="white"
            @click="$router.push({ path: '/creditApply' })"
          ></ButtonColorVue>
        </div>
      </article>
      <h3>Principales transacciones</h3>
      <article class="banners__tabs">
        <div
          class="banners__tabs-tab"
          @click="$router.push({ path: '/creditApply' })"
        >
          <img src="/src/assets/svg/cash-banknote-credit-card.svg" alt="" />
          <p>Solicitar créditos</p>
        </div>
        <div
          class="banners__tabs-tab"
          @click="$router.push({ path: '/simulateCredit' })"
        >
          <img src="/src/assets/svg/money-banknote-calculator.svg" alt="" />
          <p>Simulador de crédito</p>
        </div>
        <div
          class="banners__tabs-tab"
          @click="$router.push({ path: '/mycredits' })"
        >
          <img src="/src/assets/svg/cash-banknote-checkmark.svg" alt="" />
          <p>Pagar crédito</p>
        </div>
      </article>
    </section>
    <Menu />
  </section>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import ButtonColorVue from "@/components/form/ButtonColor.vue";
import Menu from "@/components/base/Menu.vue";
const series = [70];
const chartOptions = {
  chart: {
    width: "100%",
    type: "radialBar",
    parentHeightOffset: 0,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      track: {
        background: "#F6F6F6",
        strokeWidth: "80%",
      },
    },
    dataLabels: {
      showOn: "always",
      name: {
        offsetY: -10,
        show: true,
        color: "#888",
        fontSize: "10px",
      },
      value: {
        color: "#111",
        fontSize: "18px",
        show: true,
      },
    },
  },
  grid: {
    padding: {
      right: 0,
    },
  },
  stroke: {
    lineCap: "round",
    width: 3,
  },

  colors: ["#0E3729"],
  labels: ["Mis pagos"],
};
</script>

<style lang="scss" scoped>


.home {
  padding: 16px;
  background: #0e3729;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    > div {
      display: flex;
      align-items: center;

      h2 {
        color: white;
        font-size: 26px;
        font-weight: 700;
        margin-left: 15px;
      }
    }
  }

  &__data {
    background: white;
    padding: 24px;
    border-radius: 8px;

    &__chart {
      display: flex;
      > div {
        max-width: 50%;
        display: grid;
        align-items: center;
        p {
          color: #686c75;
          font-size: 14px;
          font-weight: 400;
        }
        h4 {
          color: #0e3729;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      p {
        color: #686c75;
        font-size: 14px;
        font-weight: 400;
      }
      h4 {
        color: #0e3729;
        font-size: 18px;
        font-weight: 600;
      }
    }
    &__pay {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 20px;
      p {
        color: #686c75;
        font-size: 14px;
        font-weight: 400;
      }
      h4 {
        color: #0e3729;
        font-size: 18px;
        font-weight: 600;
      }
      button {
        width: auto;
      }
    }
  }
}
.banners {
  padding: 16px;
  padding-top: 24px;
  &__credit {
    display: grid;
    grid-template-columns: 45% 1fr;
    grid-gap: 16px;
    background: #1e2f2a;
    padding: 16px;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    h4 {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      color: #fff;
      opacity: 0.7;
      margin-bottom: 16px;
    }
    button {
      padding: 12px 16px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  &__tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    &-tab {
      display: grid;
      justify-items: center;
      padding: 11px;
      border-radius: 4px;
      background-color: #f0fbf8;
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