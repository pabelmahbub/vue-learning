
var app =  Vue.createApp({
    data() {
      return {
        count : 0
      }
    },
    methods: {
      increaseClicked(evt, value){
        this.count = this.count + value;
        console.log(evt)
      },
      increase(value){
        this.count = this.count + value;
      },
      decrease(value){
        this.count = this.count - value
      },
      reset(){
        this.count = 0
      },
      test(ev){
        console.log('Hello, I am clicked!');
        console.log(ev);
      }
    }
  })
  app.mount('#app')