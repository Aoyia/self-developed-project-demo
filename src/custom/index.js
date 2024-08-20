import CustomCalendar from "./Calendar.vue";

const myPlugin = {
  install(app, options) {
    app.component("CustomCalendar", CustomCalendar);
  },
};

export default myPlugin;
