const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: '',
      confirmedOutput2: '',
    };
  },
  methods: {
    showAlert() {
      alert('Something');
    },
    setOutput1(e) {
      this.output1 = e.target.value;
    },
    setOutput2(e) {
      this.output2 = e.target.value;
    },
    confirmOutput2() {
      this.confirmedOutput2 = this.output2;
    },
  },
});

app.mount('#assignment');
