var app = Vue.createApp({
  data() {
    return {
     number : "",
     result: "",
     number1 : "",
     result1: ""
    };
  },

  methods: {
    handleInput(e){
      console.log(e);
      this.number = e.target.value
    },
    getDouble(){
      this.result = this.number * 2
    },
    getTriple(){
      this.result =  this.number * 3
    },
    addHundred(){
      this.result =  this.number+100
    },
    reset(){
      this.number =  "",
      this.result =  ""
    },


  //  Vue way of 2 way data binding in input field:
    getDouble1(){
      this.result1 = this.number1 * 2
    },
    getTriple1(){
      this.result1 =  this.number1 * 3
    },
    addTen(){
      this.result1 =  this.number1 + 10
    },
    reset1(){
      this.number1 =  "",
      this.result1 =  ""
    }
    
  }
});

app.mount("#app");