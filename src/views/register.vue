<template>
  <div class="mt-8">
    <!-- 4 = 1 rem = 16px -->
    <div class="container mx-auto px-8">
      <!-- Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              type="text"
              placeholder="iMoney..."
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            />
          </label>
        </div>

        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              type="email"
              placeholder="exmaple@gmail.com"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              autocomplete="username"
            />
          </label>
        </div>

        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              type="password"
              placeholder="**********"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              autocomplete="current-password"
            />
          </label>
        </div>

        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign up
          </button>
        </div>
      </form>

      <!-- Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', param: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
