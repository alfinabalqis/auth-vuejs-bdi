<template>
  <div class="flex justify-center items-center">
    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Create An Account
        </h1>
        <p
          class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"
        >
          Create an account to enjoy all the services without any ads for free!
        </p>
      </div>
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="space-y-4 mb-4">
          <Field
            name="email"
            type="email"
            placeholder="email"
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="space-y-4">
          <Field
            name="password"
            type="password"
            placeholder="password"
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
            Already Have An Account?
            <span class="underline cursor-pointer"> Sign In</span>
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
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style>
.error-feedback {
  color: red;
}
</style>
