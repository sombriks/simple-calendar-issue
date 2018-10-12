# simple calendar issue

Project to explore why i'm getting errors on another simple calendar project.

## the Issue

when we change the show-date prop value, the following error pops out in the devTools console:

```
[Vue warn]: $attrs is readonly.

found in

---> <CalendarView> at CalendarView.vue
       <W00400DashboardOsCalendario>
         <VContent>
           <VApp>
             <W00200Landing>
               <BWDA>
                 <Root> vue.runtime.common.js:589
[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "showDate"

found in

---> <CalendarView> at CalendarView.vue
       <W00400DashboardOsCalendario>
         <VContent>
           <VApp>
             <W00200Landing>
               <BWDA>
                 <Root> vue.runtime.common.js:589
[Vue warn]: $attrs is readonly.

found in

---> <CalendarViewHeader> at CalendarViewHeader.vue
       <W00400DashboardOsCalendario>
         <VContent>
           <VApp>
             <W00200Landing>
               <BWDA>
                 <Root> vue.runtime.common.js:589
[Vue warn]: $listeners is readonly.

found in

---> <CalendarViewHeader> at CalendarViewHeader.vue
       <W00400DashboardOsCalendario>
         <VContent>
           <VApp>
             <W00200Landing>
               <BWDA>
                 <Root> vue.runtime.common.js:589
[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "headerProps"

found in

---> <CalendarViewHeader> at CalendarViewHeader.vue
       <W00400DashboardOsCalendario>
         <VContent>
           <VApp>
             <W00200Landing>
               <BWDA>
                 <Root> vue.runtime.common.js:589
```

## project setup

we'll test 3 different and incremental combinations in order to explore the problem.

## just vue + vue-simple-calendar

No issue. no warn, error, nothing.

## vue + vue-simple-calendar + vuetify

Even puting the calendar inside a few vuetify components, the problem couldn't be reproduced

## vue + vuetify + vue-router + vue-simple-calendar

Still unable to reproduce the problem

## vue + vuetify + vue-router + vue-simple-calendar + routes with children routers
