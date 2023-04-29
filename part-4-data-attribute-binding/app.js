
var app =  Vue.createApp({
    data() {
      return {
        tutorialInfo: {
           name: "Vue js learning ",
           githubLink: "https://www.github.com/pabelmahbub",
           htmlCode: '<a v-bind:href=" tutorialInfo.githubLink ">Github</a>'
        }
      }
    }
  }).mount('#app')