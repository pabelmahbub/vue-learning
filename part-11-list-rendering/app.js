var app = Vue.createApp({
  data() {
    return {
      skills: ['HTML','CSS','JAVA'],
      newSkill: "",
      skills1: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 }
      ],
      newSkill1: { name:"", experience: 0}
    };

  },

  methods: {
    addSkill(){
      this.skills.push(this.newSkill);
      this.newSkill=""
    },
    removeSkill(i){
      this.skills.splice(i, 1)
    },


    addSkill1() {
      this.skills1.push(this.newSkill1);
      this.newSkill1 = {};
    },
    removeSkill1(i) {
      this.skills1.splice(i, 1);
    }
  }
});

app.mount("#app");