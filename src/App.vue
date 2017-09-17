<template>
  <v-app dark toolbar>
    <v-navigation-drawer
      absolute dark
      persistent clipped overflow
      v-model="drawer">
      <v-list class="pt-0" dense>
        Placeholder Text
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Goalie</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="login">Login</v-btn>
        <v-btn flat href="signup">Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
