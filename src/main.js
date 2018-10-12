import "./main.css";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import {
  CalendarView,
  CalendarViewHeader
} from "vue-simple-calendar";
import App from "./App.vue";

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: "/",
    component: require("./outer.vue"),
    children: [{
      path: "/",
      redirect: "/inner"
    }, {
      path: "/inner",
      component: require("./hello-calendar.vue")
    }]
  }]
});

// simple calendar components
Vue.component("calendar-view", CalendarView);
Vue.component("calendar-view-header", CalendarViewHeader);

// starting the viewmodel thing
window.vm = new Vue({
  render: r => r(App),
  el: "#app",
  router
});