const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //! Watchers are not good for this
    // name(value) {
    //   this.fullName = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   this.fullName = this.name + ' ' + value;
    // },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount('#events');
