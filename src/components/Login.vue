<template>
  <div id="#login-form">
    <form>
      <v-text-field
        label="Email"
        v-model="email"
        required
        ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        required
        ></v-text-field>
      <v-btn @click="login">Login</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
