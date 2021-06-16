const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

// app.mount('#app');
//
// let message = "Hello!";
//
// let longMessage = message + ' World';
//
// console.log(longMessage);

const data = {
  message: 'Hello!'
};
const handler = {
  set(target, key, value) {
   if (key === 'message'){
     target.longMessage = value + ' world'
   }
   target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = "Christian";
console.log(proxy.longMessage);
