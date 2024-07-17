<template>
  <div class="orange pa-8 rounded">
    <v-card class="  pa-4 ">
      <v-card-title class="headline">Contact
      </v-card-title>
      <v-card-text>
        <v-chip-group
            v-model="selection"
            class="orange--text"
            active-class="orange white--text"
            column
          >
        <v-form class="my-2 py-4 orange--text">

          <v-chip   > <label for="number">+966554323650</label> </v-chip>
          <v-chip  > <label for="number">+201061622830</label> </v-chip>
          <br>
          <br>
          <v-chip  > <label for="email">it.saradarwish@gmail.com</label> </v-chip>

        </v-form></v-chip-group>
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
  name: "contact",
  data() {
    return {
        selection: 1,
      }
    }

  }
</script>
