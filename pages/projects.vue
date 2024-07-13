<template>
  <div class="orange pa-8 rounded">
    <v-card class="pa-4 ">
      <v-card-title class="headline">My Projects
      </v-card-title>
      <v-card-text>
       <div class="green pa-1"  >
        <v-row>
         <!-- /////////////////////////////// /////////////////////////////// -->
<!-- ............................................................................................ -->
      <!-- <v-card class="grey darken-1 pa-1 ma-1 orange--text rounded" width="40%"> -->

         <v-col cols="12" md="4">
    <v-card class="grey darken-1 pa-1 ma-1 orange--text rounded"  >
<!-- /// -->
        <v-card-image class="red ma-1 pa-1">
          <v-img class="blue ma-1 pa-1 rounded" src="../assets/img/plant1.png" alt="plant-project-1" />
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
    </v-col>
<!-- ............................................................................................ -->

<v-col>
    <v-card   class="mx-auto"
    max-width="400" >
<!-- /// -->
        <!-- <v-card-image class="red pa-2 ma-2"> -->
          <v-img class="rounded yellow pa-1 ma-1" src="../assets/img/plant1.png" alt="plant-project-1" />
        <!-- </v-card-image> -->

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
    </v-col>
<!-- ............................................................................................ -->
<v-col>
 <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Share"></v-btn>

      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  <!-- ززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززززز -->

 <!-- /////////////////////////////// /////////////////////////////// -->

  </v-row>
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
