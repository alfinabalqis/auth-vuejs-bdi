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
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="space-y-4 mb-4">
            <Field
              name="username"
              type="text"
              placeholder="username"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="space-y-4 mb-4">
            <Field
              name="no_hp"
              type="text"
              placeholder="no_hp"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <ErrorMessage name="no_hp" class="error-feedback" />
          </div>
          <div class="space-y-4 mb-4">
            <Field
              name="tgl_lahir"
              type="date"
              placeholder="tgl_lahir"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <ErrorMessage name="tgl_lahir" class="error-feedback" />
          </div>
          <div class="space-y-4 mb-4">
            <Field
              name="email"
              type="email"
              placeholder="email"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="space-y-4 mb-4">
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
              <span>Register</span>
            </button>
            <p class="mt-4 text-sm">
              Already Have An Account?
              <span class="underline cursor-pointer"> Sign In</span>
            </p>
            <div class="space-y-4">
              <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
                {{ message }}
              </div>
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
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      no_hp: yup
        .string()
        .required("Phone number is required!")
        .min(12, "Must be at least 12 characters!")
        .max(20, "Must be maximum 20 characters!"),
      tgl_lahir: yup
        .date()
        .required("Date of birth is required!")
        .max(new Date(), "Date of birth cannot be in the future"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      (this.message = ""), (this.successful = false), (this.loading = true);

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          (this.message = data.message),
            (this.successful = true),
            (this.loading = false);
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
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
