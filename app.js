const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    // event binding
    add(num) {
      this.number = this.number + num;
      console.log(this.number);
    },
  },
  computed: {
    // outputting computed value to DOM
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much";
      } else if (this.number === 37) {
        return this.number;
      }
    },
  },
  watch: {
    result() {
      console.log("watcher executing...");

      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
