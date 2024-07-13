<template>
  <div class="orange pa-8 rounded">
    <v-card class="  pa-4 ">
      <v-card-title class="headline">Contact
      </v-card-title>
      <v-card-text>
        <v-form class="my-2 py-4">
          <v-btn class="orange--text" ><label for="number">+966554323650</label></v-btn>
          <v-btn class="orange--text" ><label for="number">+201061622830</label></v-btn>
          <br>
          <br>
          <v-btn class="orange--text" ><label for="email">it.saradarwish@gmail.com</label></v-btn>
        </v-form>
        <hr class="my-3">
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey lighten-2"
          class="orange--text"
          nuxt
          to="/"
        >
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    name:"contact",

  }
</script>
