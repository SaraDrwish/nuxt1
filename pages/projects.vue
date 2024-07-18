<template>
 <div class="orange my-6 py-6 px-4 rounded">
  <v-card class="pa-2">
   <v-card-title class="headline">My Projects
   </v-card-title>
   <v-card-text>

     <v-text-field
      v-model="search"
      required
      color="orange"
      class="grey--text grey darken-3 rounded pa-3 ma-5"
      append-icon="mdi-magnify"
      prepend-icon="mdi-heart"
      @change="searchProject"
    ></v-text-field>

<!-- /// -->

      <!-- <v-row> -->
        <div class="red pa-2" v-for="proj in projects" :key="proj.id" >
          <!-- <v-col> -->
            <AllProjectsCompo :proj="proj"></AllProjectsCompo>
          <!-- </v-col> -->
        </div>
      <!-- </v-row> -->

<!-- /// -->
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
import AllProjectsCompo from '~/components/AllProjectsCompo.vue'
export default {
  name: "projects",
  components:{AllProjectsCompo},
  data () {
    return {
      dialog: false,
      dialog2:false,
      dialog3:false,
      dialog4: false,
      search: '',
      projects: [
        {
        id: 1,
        name: 'poroj 1',
        techno: "html , css",
        github: "",
        image: '',
        link: '',
        explore:'',
      },
      {
        id: 2,
        name: 'poroj2',
        tech: "html , css,vue js ",
        github: "",
        image: '',
        link: '',
        explore:'',
        },
      {
        id: 3,
        name: 'poroj 3',
        tech: " vue js , nuxt js , vuetify ",
        github: "",
        image: '',
        link: '',
        explore:'',
      },
    ]
    }
  },
  // computed: {
  //   searchProject: function () {
  //     return
  //   }
  // }
}
</script>
