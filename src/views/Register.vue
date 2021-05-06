<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            Sign up
          </h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Have an account?
            </router-link>

            <!-- <a href="#/login">
              Have an account?
            </a>
            <a
              href="#/register"
            >
              Need an account?
            </a> -->
          </p>

          <!-- <list-errors errors="$ctrl.errors" class="ng-isolate-scope"
            ><ul class="error-messages ng-hide" ng-show="$ctrl.errors">

            </ul>
          </list-errors> -->

          <form @submit.prevent="onSubmit()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  v-model="username"
                />
              </fieldset>

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
                Sign up
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRegister',
  data: () => ({
    email: '',
    password: '',
    username: '',
  }),
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
  },
  methods: {
    async onSubmit() {
      const formValue = {
        email: this.email,
        password: this.password,
        username: this.username,
      };

      try {
        await this.$store.dispatch('register', formValue);
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
