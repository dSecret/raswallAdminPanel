<template>
    <v-form  class="elevation-4 pl-4 pr-4 pt-4 pb-4" >
      <v-text-field
        label="Username"
        v-model="name"
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="email"
        required
      ></v-text-field>
    </v-form>
</template>
<script>
  export default {
    data () {
      return {
        name: '',
        email: '',
      }
    }
  }
</script>