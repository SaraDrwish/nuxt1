<template>
  <div class="orange pa-8 rounded">
    <v-card class="pa-4 ">
      <v-card-title class="headline">My Projects
      </v-card-title>
      <v-card-text>
       <div class="flex"  >
         <!-- /////////////////////////////// /////////////////////////////// -->
<!-- ............................................................................................ -->
      <!-- <v-card class="grey darken-1 pa-1 ma-1 orange--text rounded" width="40%"> -->
    <v-card class="grey darken-1 pa-1 ma-1 orange--text rounded"  >
<!-- /// -->
        <v-card-image>
          <v-img class="rounded" src="../assets/img/plant1.png" alt="plant-project-1" />
        </v-card-image>
        <v-card-title >
          Template 1 Plant
        </v-card-title>
        <v-card-text>
          Bootstrap - HTML - CSS
        </v-card-text>
        <v-card-actions>
          <a href="https://saradrwish.github.io/temp1_bootstrab_plant/"  target="_blank">
            <v-btn>More Detailes</v-btn>
          </a>
        </v-card-actions>
<!-- /// -->
    </v-card>
<!-- ............................................................................................ -->

    <v-card class="grey darken-1 pa-1 ma-1 orange--text rounded" >
<!-- /// -->
        <v-card-image class="red pa-2 ma-2">
          <v-img class="rounded" src="../assets/img/plant1.png" alt="plant-project-1" />
        </v-card-image>

        <v-card-title >
          Template 2 watch
        </v-card-title>

        <v-card-text>
          HTML - CSS
        </v-card-text>

        <v-card-actions>
          <a href="https://saradrwish.github.io/task19/"  target="_blank">
            <v-btn>More Detailes</v-btn>
          </a>
        </v-card-actions>
<!-- /// -->
    </v-card>
<!-- ............................................................................................ -->


 <!-- /////////////////////////////// /////////////////////////////// -->

      </div>
        <br>
        <hr class="my-3">
        <br>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey lighten-2"
          class="orange--text"
          nuxt
          to="/skills"
        >
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    name:"projects"

  }
</script>

<style lang="scss" scoped>

</style>
