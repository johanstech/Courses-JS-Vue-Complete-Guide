const app = Vue.createApp({
  data() {
    return {
      name: 'Johan',
      age: 30,
      imageUrl:
        'https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?ver-20220429.02',
    };
  },
  methods: {
    agePlus5() {
      return this.age + 5;
    },
    favouriteNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount('#assignment');
