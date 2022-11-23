<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
*{
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0px;
  background-color: $background;
}
</style>
