<template>
  <div class="orange my-6 py-6 px-4 rounded">
    <v-card class="pa-2">
      <v-card-title class="headline">My Projects</v-card-title>
    <v-card-text>

    <v-text-field
      v-model="search"
      required
      color="orange"
      class="orange--text grey darken-3 rounded px-5 ma-2"
      append-icon="mdi-magnify"
      prepend-icon="mdi-heart"
    ></v-text-field>

    <v-container >
      <v-row dense>
        <v-col cols="12" md="4"
        v-for="proj in searchProject" :key="proj.id"
        >
          <div class=" "  >
            <AllProjectsCompo :proj="proj"  > </AllProjectsCompo>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
            title:"Template Watch",
            techno: "CSS - HTML",
            github: "https://github.com/SaraDrwish/task19",
            image: 'https://saradrwish.github.io/task19/',
            explore: '',
            src:'1watch.png',
          },
          {
            id: 2,
            title:"Template Plant",
            techno: "HTML - CSS - Bootstrap - JS ",
            github: "https://github.com/SaraDrwish/temp1_bootstrab_plant",
            image: 'https://saradrwish.github.io/temp1_bootstrab_plant/',
            explore: ' ',
            src:'2plant.png',
          },
          {
            id: 3,
            title:"Template 3 Jeans",
            techno: "HTML - CSS",
            github: "https://github.com/SaraDrwish/template1",
            image: 'https://saradrwish.github.io/template1/',
            explore: 'https://saradrwish.github.io/template1/',
            src:'jeans3.png',
          },
          {
            id: 4,
            title:"Template Fish Shift",
            techno: "HTML - CSS",
            github: "https://github.com/SaraDrwish/template2",
            image: 'https://saradrwish.github.io/template2/',
            explore: 'https://saradrwish.github.io/todo2023/',
            src:'shift4.png',
          },
          {
            id: 5,
            title:"Template Bakrey",
            techno: "HTML - CSS",
            github: "https://github.com/SaraDrwish/task13full",
            image: 'https://saradrwish.github.io/task13full/',
            explore: ' ',
            src:'bary5.png',
          },
          {
            id: 6,
            title:"Template Filter",
            techno: "HTML - CSS - JS",
            github: "https://github.com/SaraDrwish/filter",
            image: 'https://saradrwish.github.io/filter/',
            explore: ' ',
            src:'filt6.png',
          },
          {
            id: 7,
            title:"Template Prev&Next ",
            techno: "CSS - HTML- JS",
            github: "https://github.com/SaraDrwish/js_task_close_prev_next",
            image: 'https://saradrwish.github.io/js_task_close_prev_next/',
            explore: ' ',
            src:'netprov7.png',
          },
          {
            id: 8,
            title:"Template CRUD ",
            techno: "HTML - CSS - JS ",
            github: "https://github.com/SaraDrwish/radwatasknewcrud24v1",
            image: 'https://saradrwish.github.io/radwatasknewcrud24v1/',
            explore: ' ',
            src:'crd.png',
          },
          {
            id:9 ,
            title:"Tamplate Squers",
            techno: "HTML - CSS - JS",
            github: "https://github.com/SaraDrwish/task26",
            image: 'https://saradrwish.github.io/task26/',
            explore: ' ',
            src:'squr26_9.png',
          },
          {
            id:10 ,
            title:"Template API",
            techno: "HTML - CSS - JS",
            github: "https://github.com/SaraDrwish/task28json",
            image: 'https://saradrwish.github.io/task28json/',
            explore: ' ',
            src:'api10.png',
          },
          {
            id:11,
            title:"Template Gost",
            techno: "HTML - CSS",
            github: "https://github.com/SaraDrwish/template3ghost",
            image: 'https://saradrwish.github.io/template3ghost/',
            explore: '',
            src:'gost11..png',
          },
          {
            id:12,
            title:"Template Leon",
            techno: "HTML - CSS - JS",
            github: "https://github.com/SaraDrwish/leonjs5",
            image: 'https://saradrwish.github.io/leonjs5/',
            explore: 'https://www.linkedin.com/posts/sara-darwish-d_zero-elzero-activity-6944739530486784000-vw7A?utm_source=share&utm_medium=member_desktop',
            src:'leaon12-12.png',
          },
          {
            id:13,
            title:"Template Coffee",
            techno: "HTML - CSS ",
            github: "https://github.com/SaraDrwish/ProjectOne23",
            image: 'https://saradrwish.github.io/ProjectOne23/',
            explore: ' ',
            src:'coff.png',
          },
          {
            id:14,
            title:"Template Space",
            techno: "HTML - CSS ",
            github: "https://github.com/SaraDrwish/Project2",
            image: 'https://saradrwish.github.io/Project2/',
            explore: ' ',
            src:'14spac.png',
          },
          {
            id:15,
            title:"Template 15",
            techno: "HTML - CSS - BootStrap",
            github: "https://github.com/SaraDrwish/project3_bootstrap",
            image: 'https://saradrwish.github.io/project3_bootstrap/',
            explore: ' ',
            src:'15bootsrr.png',
          },
          {
            id:16,
            title:"Template Todo",
            techno: "HTML - CSS - JS",
            github: "https://github.com/SaraDrwish/todo2023",
            image: ' https://saradrwish.github.io/todo2023/',
            explore: ' ',
            src:'todo.png',
          },
          {
            id:17,
            title:"Template City Count",
            techno: "HTML - CSS ",
            github: "https://github.com/SaraDrwish/js_task1",
            image: 'https://saradrwish.github.io/js_task1/',
            explore: ' ',
            src:'citycount.png',
          },
          {
            id:18,
            title:"Tamplate  Shopping",
            techno: "HTML - CSS - JS ",
            github: "https://github.com/SaraDrwish/app1-shopping",
            image: 'https://saradrwish.github.io/app1-shopping/index.html',
            explore: ' ',
            src:'shopping.png',
          },
          {
            id:19,
            title:"Template Dashboard",
            techno: "HTML - CSS ",
            github: "https://github.com/SaraDrwish/pro1cha2",
            image: 'https://saradrwish.github.io/pro1cha2/',
            explore: ' ',
            src:'sashbo.png',
          },
          {
            id:20,
            title:"Template Portfolio",
            techno: "HTML - CSS - JS - React js",
            github: "https://github.com/SaraDrwish/reaaaacttttt23",
            image: 'https://saradrwish.github.io/reaaaacttttt23/',
            explore: ' ',
            src:'react20.png',
          },
          {
            id:21,
            title:"Template Beauty",
            techno: "HTML - CSS - JS - React js",
            github: "https://github.com/SaraDrwish/srpo-react",
            image: 'https://github.com/SaraDrwish/srpo-react',
            explore: ' ',
            src:'react2.jpeg',
          },
          {
            id:22,
            title:"Template  22",
            techno: "HTML - CSS - JS - React js",
            github: "https://github.com/SaraDrwish/react3Porto",
            image: 'https://saradrwish.github.io/react3Porto/',
            explore: ' ',
            src:'react22.png',
          },
          {
            id:23 ,
            title:"Template  23",
            techno: "HTML - CSS - JS  ",
            github: "https://github.com/SaraDrwish/myportofolio2022march",
            image: 'https://saradrwish.github.io/myportofolio2022march/',
            explore: ' ',
            src:'my23port.png',
          },
          {
            id:24 ,
            title:"Template Travel ",
            techno: "HTML - CSS - JS - Vue js 3 - Tailwindcss - api",
            github: "https://github.com/SaraDrwish/algoriza-internship-FE204",
            image: 'https://github.com/SaraDrwish/algoriza-internship-FE204',
            explore:"https://drive.google.com/file/d/18mMZEu9SS3g-zeg_jQHNOLn4RLFXYwLT/view?usp=sharing",
            src:'travel2.png',
          },
          {
            id:25 ,
            title:"Template  25",
            techno: "SCSS - HTML - JS - Vue js 2 - nuxt 2 - vuetify 2 - axios - auth ",
            github: "https://gitlab.com/it.saradarwish/nuxttask1",
            image: 'https://gitlab.com/it.saradarwish/nuxttask1',
            explore:'https://drive.google.com/file/d/1mqOpK-BvTbCRZoAjOV4CBEBG3Nq3XMUh/view?usp=drive_link',
            src: 'nuxt1.png',
          },
          {
            id:26 ,
            title:"Template Id Site",
            techno: "Vue js - Tailwind css ",
            github: "https://github.com/SaraDrwish/sara-s-task1-1-vueJs",
            image: 'https://www.linkedin.com/posts/sara-darwish-d_vuejs-vue-js-activity-7168486257377828865-mlsy?utm_source=share&utm_medium=member_desktop',
            explore:'https://drive.google.com/file/d/15LKs01nntI3B-qhpe1ZXofkEofk1vJCP/view?usp=sharing',
            src: 'smallStaticVueSite.png',
          },
          {
            id:27 ,
            title:"Template Portfolio latest",
            techno: "css - HTML - JS - React js",
            github: " ",
            image:"https://incomparable-manatee-a1580d.netlify.app/",
            explore:" ",
            src: "portfolioLast2.png",
          },
          {
            id:28 ,
            title:"Template CRUD Note",
            techno: "CSS - HTML - JS - Vue js",
            github: " ",
            image:" https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/task4crud",
            explore:" ",
            src: "vueNote.png",
          },
          {
            id:29 ,
            title:"Template Todo app",
            techno: "HTML - CSS - JS - Vue js",
            github: "https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/crud-tsk4-todo",
            image:"https://github.com/SaraDrwish/SolutionPlusTasks1/tree/main/crud-tsk4-todo",
            explore:" ",
            src: "todoVue.png",
          },
          {
            id:30 ,
            title:"Template Somoq",
            techno: "WordPress",
            github: " ",
            image:"https://www.linkedin.com/posts/sara-darwish-d_wordpress-wordpress-project-activity-7168527384273534976-nmbF?utm_source=share&utm_medium=member_desktop",
            explore:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7168527361460711424",
            src: "wordpress_somoq_jazeel.png",
          },
           {
            id: 31 ,
            title:"",
            techno: "",
            github: "",
            image:"",
            explore:"",
            src: "",
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
