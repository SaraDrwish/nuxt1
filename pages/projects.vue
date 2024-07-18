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
        title:"name 1 ",
        techno: "html , css",
        github: "",
        image: 'https://www.linkedin.com/posts/sara-darwish-d_wordpress-wordpress-project-activity-7168527384273534976-nmbF?utm_source=share&utm_medium=member_desktop',
        explore: '',
        src:'wordpress_somoq_jazeel.png',
      },
      {
        id: 2,
        title:"name 2 ",
        techno: "HTML - CSS - JS - React js ",
        github: "https://github.com/SaraDrwish/reaaaacttttt23",
        image: 'https://github.com/SaraDrwish/reaaaacttttt23',
        explore: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7168527361460711424',
        src:'react20.png',
        },
      {
        id: 3,
        title:"name 3 ",
        techno: " vue js , nuxt js , vuetify ",
        github: "https://github.com/SaraDrwish/template1",
        image: '',
        explore: '',
        src:'wordpress_somoq_jazeel.png',
        },
      {
        id: 4,
        title:"name 4 ",
        techno: " CSS - HTML - JS ",
        github: "https://github.com/SaraDrwish/todo2023",
        image: 'https://saradrwish.github.io/todo2023/',
        explore: 'https://saradrwish.github.io/todo2023/',
        src:'todo.png',
        },
      {
        id: 5,
        title:"name 5 ",
        techno: " CSS - HTML - JS - vue js ",
        github: "https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/task4crud",
        image: 'https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/task4crud',
        explore: ' ',
        src:'vueNote.png',
        },
      {
        id: 6,
        title:"name6 ",
        techno: " CSS - HTML - JS - vue js ",
        github: "https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/crud-tsk4-todo",
        image: 'https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/crud-tsk4-todo',
        explore: ' ',
        src:'todoVue.png',
        },
      {
        id: 7,
        title:"name 7 ",
        techno: "HTML - CSS - JS - Vue js - vuetify - Nuxt js 2 ",
        github: "https://gitlab.com/it.saradarwish/gitflow-task5-vuetify-v1",
        image: 'https://gitlab.com/it.saradarwish/gitflow-task5-vuetify-v1',
        explore: ' ',
        src:'dashVuenuxt2.png',
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
