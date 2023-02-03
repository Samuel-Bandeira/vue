const func = () => {
  console.log("hello");
};
var app = new Vue({
  el: "#app",
  data: {
    user: {
      firstName: "Samuel",
      lastName: "Bandeira",
      email: "samuel@gmail.com",
      image:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x900.jpg",
      gender: "male",
    },
  },
  methods: {
    async getUser() {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();
      console.log("results", results[0]);
      this.user.firstName = results[0].name.first;
      this.user.email = results[0].email;
      this.user.image = results[0].picture.large;
    },
  },
});

// app.mount("#app");
