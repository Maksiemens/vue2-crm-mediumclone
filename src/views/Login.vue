<template>
  <div class="login-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            Sign in
          </h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>

          <app-validation-errors
            v-if="error"
            :error="error"
          ></app-validation-errors>

          <form @submit.prevent="onSubmit()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </fieldset>

              <button
                class="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                :disabled="isSubmitting"
              >
                Sign in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppValidationErrors from '@/components/ValidationErrors';
import * as fromAuth from '@/store/modules/auth';

export default {
  name: 'AppLogin',
  components: {
    AppValidationErrors,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {
    ...mapGetters({
      isSubmitting: [fromAuth.getterTypes.isSubmitting],
      error: [fromAuth.getterTypes.error],
    }),
  },
  methods: {
    async onSubmit() {
      const formValue = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch(fromAuth.actionTypes.login, formValue);
        this.$router.push({ name: 'global-feed' });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
