<template>
<v-app>
  <v-navigation-drawer app></v-navigation-drawer>
  <v-toolbar app>sample</v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
  <v-footer app>copy</v-footer>
</v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
