<template>
  <div>
    <div class="projects-box">
      <v-row>

        <v-col cols="12" md="3">
        <v-card
            class="mx-auto orange pa-2"
            max-width="200"
            height="350"
          >
          <v-img
            class="align-end text-white"
            height="200"
            :src='require("../assets/img/dashVuenuxt2.png")'
            cover
          >
            <v-card-title class="orange--text grey darken-3 pa-1">Template 1 </v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
          HTML - SCSS - Vue js - Vuetify
        </v-card-subtitle>
        <v-spacer></v-spacer>
        <v-card-text class="bottom" bottom>
          <a href="https://gitlab.com/it.saradarwish/gitflow-task5-vuetify-v1"  target="_blank">
          <v-btn bottom class="bottom">More Detailes</v-btn>
          </a>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn class="orange" color="grey" text="Show">Show</v-btn>
          <v-btn class="orange" color="grey" text="Github Link">Github Link</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
    <!-- ............................................................................................ -->
     <v-col cols="12" md="3">
        <v-card
            class="mx-auto orange pa-2"
            max-width="200"
            height="350"
          >
          <v-img
            class="align-end text-white"
            height="200"
            :src='require(`../assets/img/2plant.png`)'
            cover
          >
            <v-card-title class="orange--text grey darken-3 pa-1" >Template 2 </v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
          Bootstrap - HTML - CSS
        </v-card-subtitle>
        <!-- <v-spacer></v-spacer> -->
        <v-card-text>
          <a href="https://saradrwish.github.io/temp1_bootstrab_plant/"  target="_blank">
          <v-btn bottom class="bottom">More Detailes</v-btn>
          </a>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn class="orange" color="grey" text="Show">Show</v-btn>
          <v-btn class="orange" color="grey" text="Github Link">Github Link</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
    <!-- ............................................................................................ -->
    <v-col cols="12" md="3">
        <v-card
            class="mx-auto orange pa-2"
            max-width="200"
            height="350"
          >
          <v-img
            class="align-end text-white"
            height="200"
            :src='require("../assets/img/des3.png")'
            cover
          >
            <v-card-title class="orange--text grey darken-3 pa-1" >Template 3</v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
          JS - HTML - CSS
        </v-card-subtitle>
        <v-spacer></v-spacer>

        <v-card-text>
          <a href="https://saradrwish.github.io/leonjs5/"  target="_blank">
          <v-btn>More Detailes</v-btn>
          </a>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ............................................................................................ -->
    <v-col cols="12" md="3">
        <v-card
            class="mx-auto orange pa-2"
            max-width="200"
            height="350"
          >
          <v-img
            class="align-end text-white"
            height="200"
            :src='require("../assets/img/4react.png")'
            cover
          >
            <v-card-title class="orange--text grey darken-3 pa-1" >Template 4</v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
          JS - HTML - CSS - React
        </v-card-subtitle>
        <!-- <v-spacer></v-spacer> -->

        <v-card-text >
          <a href="https://saradrwish.github.io/react3Porto/"  target="_blank">
          <v-btn>More Detailes</v-btn>
          </a>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ............................................................................................ -->
   </v-row>
</div>


  <v-card-actions>
    <v-spacer />
    <v-btn class="my-12 ml-12 orange lighten-2 grey--text" ><a href="/projects">  All Projects  </a></v-btn>
  </v-card-actions>

  </div>
</template>

<script>
export default {
    name:'SomeProjects',

  }
</script>

<style lang="scss" scoped>
.v-card
{
  transition: all 0.4s ease-in;
    .v-img {
      // background-position: contain;
      overflow: hidden;
      transition: all 0.4s ease-in;
        // transform: scale(2.15);
        :hover {
        transform: scale(1.1);
        }
    }

}
</style>

