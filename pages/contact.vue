<template>
  <div class="orange pa-8 rounded">
    <v-card class="  pa-4 ">
      <v-card-title class="headline">Contact
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-btn><label for="number">+966554323650</label></v-btn>
          <v-btn><label for="number">+201061622830</label></v-btn>
          <br>
          <br>
          <v-btn><label for="email">it.saradarwish@gmail.com</label></v-btn>
        </v-form>
        <hr class="my-3">
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
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
    name:"contact"

  }
</script>

<style lang="scss" scoped>

</style>
