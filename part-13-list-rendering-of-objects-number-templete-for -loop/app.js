var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Rahman Mahbubur",
        nickName: "Pabel",
        website: "https://pabelmahbub.portfolio"
      },

      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 }
      ]
    };
  },

  methods: {}
});
app.mount("#app");