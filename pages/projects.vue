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
     ></v-text-field>

<!-- /// -->

  <!-- <v-row> -->
    <!-- <v-col cols="12" md="4"> -->
      <div class="pink lighten-2 ma-2 pa-2" v-for="proj in searchProject" :key="proj.id" >
        <AllProjectsCompo :proj="proj"  ></AllProjectsCompo>
      </div>
    <!-- </v-col> -->
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
        techno: "html , css,vue js ",
        github: "",
        image: '',
        link: '',
        explore:'',
        },
      {
        id: 3,
        name: 'poroj 3',
        techno: " vue js , nuxt js , vuetify ",
        github: "",
        image: '',
        link: '',
        explore:'',
      },
    ]
    }
  },
  computed: {
    searchProject() {
      return this.projects.filter(proj => proj.techno.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
    }
  }
}
</script>
