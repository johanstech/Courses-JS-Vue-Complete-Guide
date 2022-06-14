const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet...';
      } else if (this.number > 37) {
        return 'Too high!';
      }
      return this.number;
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    add(value) {
      this.number += value;
    },
  },
});

app.mount('#assignment');
