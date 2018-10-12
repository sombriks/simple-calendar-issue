module.exports = [{
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