<template>
  <v-container fluid>
    <div class="calendar-parent">
      <calendar-view :show-date="d" class="theme-default">
        <calendar-view-header slot="header" slot-scope="{ headerProps }" :header-props="headerProps" @input="d => mudaData(d)"></calendar-view-header>
      </calendar-view>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "hello-calendar",
  data: _ => ({d: new Date()}),
  methods: {
    mudaData(d) {
      this.d = d;
    },
  },
};
</script>

<style>
</style>
