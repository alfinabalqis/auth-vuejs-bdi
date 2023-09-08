<!-- <template>
  <div class="flex justify-center items-center">
    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Login An Account
        </h1>
        
      </div>
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="space-y-4 mb-4">
          <Field
            name="email"
            type="email"
            placeholder="Masukkan Email"
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="space-y-4">
          <Field
            name="password"
            type="password"
            placeholder="Masukkan Password"
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="text-center mt-6">
          <button
            class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
            :disabled="loading"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
          <p class="mt-4 text-sm">
            Don't Have An Account?
            <span class="underline cursor-pointer"> <a href="/register">Sign Up</a></span>
          </p>
          <div class="space-y-4">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template> -->
<template>
  <h1>Login</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter Email" required>
    <input type="password" v-model="password" placeholder="Enter Password" required>
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>

  </div>
</template>

<script>
// import { Form, Field, ErrorMessage } from "vee-validate";
// import * as yup from "yup";

// export default {
//   name: "Login",
//   components: {
//     Form,
//     Field,
//     ErrorMessage,
//   },
//   data() {
//     const schema = yup.object().shape({
//       email: yup
//         .string()
//         .required("Email is required!")
//         .email("Email is invalid!")
//         .max(50, "Must be maximum 50 characters!"),
//       password: yup.string().required("Password is required!"),
//     });

//     return {
//       loading: false,
//       message: "",
//       schema,
//     };
//   },
//   computed: {
//     loggedIn() {
//       return this.$store.state.auth.status.loggedIn;
//     },
//   },
//   created() {
//     if (this.loggedIn) {
//       this.$router.push("/profile");
//     }
//   },
//   methods: {
//     handleLogin(user) {
//       this.loading = true;

//       this.$store.dispatch("auth/login", user).then(
//         () => {
//           this.$router.push("/profile");
//         },
//         (error) => {
//           this.loading = false;
//           this.message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//         }
//       );
//     },
//   },
// };
import axios from 'axios';
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
      console.warn(result)

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0])),
          this.$router.push({ name: 'Home' })
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: "Home" })
    }
  }
}
</script>

<!-- <style>
.error-feedback {
  color: red;
}
</style> -->
