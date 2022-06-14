const app = Vue.createApp({
  data() {
    return {
      userClass: '',
      visible: true,
      userBackgroundColour: '',
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.userClass === 'user1',
        user2: this.userClass === 'user2',
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
});

app.mount('#assignment');
