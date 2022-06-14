//? Vanilla JS
// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);

//? Vue.js
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue === '') {
        return;
      }
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');
