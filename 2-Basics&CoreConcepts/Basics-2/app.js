const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(e, lastName) {
      this.name = `${e.target.value} ${lastName}`;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      //* Achieve the same prevention of default behaviour
      //* with .prevent (one of a few . modifiers)
      // e.preventDefault();
      alert('Submitted!');
    },
  },
});

app.mount('#events');
