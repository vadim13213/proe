<template>
  <div class="sign-in">
    <h2 class="sign-in__header">ВХОД</h2>
    <div sign-in="message" v-if="message">{{ message }}</div>
    <form @submit.prevent="submit">
      <div class="sign-in__email">
        <InputEmail
          v-model="form.email"
          :v="$v.form.email"
          :errorMessage="emailErrorMessage"
        />
      </div>
      <div class="sign-in__password">
        <InputPassword
          v-model="form.password"
          :v="$v.form.password"
          @onPasswordRecoveryClick="openPasswordRecovery"
        />
      </div>
      <button class="shopBtn" type="submit">Войти</button>
    </form>
    <nuxt-link :to="`/users/register`">зарегестрироваться</nuxt-link>
  </div>
</template>

<script>
import InputEmail from "@/components/common/input-email";
import InputPassword from "@/components/common/input-password";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      message: "",
      form: { email: "", password: "" },
      emailErrorMessage: "Введите электронную почту",
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  components: {
    InputEmail,
    InputPassword,
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) {
        return;
      }
      this.$store.commit("user/updateIsAuthorised", true);
      this.$store.commit("user/updateEmail", this.form.email);
      this.$emit("close");
    },
    openPasswordRecovery() {},
  },
};
</script>

<style lang="scss">
.sign-in {
  position: relative;
  @media (min-width: $pad) {
    min-width: 330px;
  }
}
.sign-in__header {
  margin-bottom: 18px;
  font-weight: 600;
}
</style>
