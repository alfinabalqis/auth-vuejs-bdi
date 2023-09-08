<template>
  <div>
    <!-- <h3>{{ content }}</h3> -->
    <h1>Halo {{ name }}, Success Login</h1>
  </div>
</template>
<script>
// import UserService from "../services/user.service";
export default {
  name: "Home",
  data() {
    return {
      name: ''
    };
  },
  // mounted() {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       this.content = response.data;
  //     },
  //     (error) => {
  //       this.content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // },
  mounted() {
  let user = localStorage.getItem('user-info');
  if (user) {
    this.name = JSON.parse(user).username
  } else {
    this.$router.push({ name: "Register" })
  }
}
};
</script>
<style></style>
