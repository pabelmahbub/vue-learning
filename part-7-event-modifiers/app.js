var app = Vue.createApp({
  data() {
    return {
     name: "",
     name1: ""  
    };
  },

  methods: {
    handleKeyup(e) {
      console.log(e);
      this.name = e.target.value;
    },
    handleKeyup1(e) {
      console.log(e);
      this.name1 = e.target.value;
    },
    handleFormSubmit(){
      console.log('form is submitted');
    },
    
    handleCardClick(e) {
      console.log(e);
      console.log("Card clicked!");
    },

    handleViewClick(e) {
      console.log(e);
      console.log("View clicked!");
    }
  }
});

app.mount("#app");