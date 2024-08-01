<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
    <div class="orange my-7 pa-4 light-5 ">
      <v-card class="pa-4 ">
        <v-card-title class="headline">Sara's Portfolio
        </v-card-title>
        <v-card-text>
          <h3>🚀 Hi! I'm Sara Darwish, an experienced web developer skilled in crafting
            stunning websites. With a degree in computer science . Let's turn your
            ideas into extraordinary digital realities 🚀!</h3>
            <br>
          <hr class="my-3">
          <div class="projects">
            <v-card-title class="headline">Sara's Projects
            </v-card-title>
            <SomeProjects/>
          </div>
          <hr class="my-3">
          <br>

          <div class="">

            <v-card  justify="center" align="center" class="mx-auto py-6 text-center">
              <v-img
                :src='require("../assets/img/air-window.png")'
                lazy-src="../assets/img/air-window.png"
                class="rounded "
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                max-height="330"
                rounded
              >
              <v-card-text width="50" center class="mx-auto center">
                <h3  class="orange darken-1 pa-2 my-2 mx-auto rounded">
                  The Companies & the Academies That I worked and Studied with : </h3>
              </v-card-text>
              <v-card-action>
                <v-carousel
                  cycle
                  width="300"
                  height="200"
                  hide-delimiter-background
                  show-arrows-on-hover
                  hide-delimiters
                  class="mx-auto rounded"
                  contain
                  rounded
                  >
                  <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    contain
                    center
                    width="300"
                    height="200"
                    class="mx-auto rounded"
                    rounded
                  >
                  </v-carousel-item>
                </v-carousel>
              </v-card-action>
             </v-img>
            </v-card>

          </div>
          <br>
          <hr class="my-3">
          <div class="skills">
            <v-card-title class="headline">Sara's Skills
            </v-card-title>
            <SomeSkills/>
          </div>
          <hr class="my-3">
          <br>
          <div class="">
            <v-card-title class="headline">Sara's Contacts
            </v-card-title>
            <SomeContacts/>
            <br>
            <Cv/>
          </div>

          <hr class="my-3">
          <br>
          <a
            href="https://github.com/SaraDrwish/nuxt1"
            target="_blank"
            rel="noopener noreferrer"
            color="orange"
            class="orange--text"
          >
            GitHub
          </a>
          <br>
          <a
            href="https://www.linkedin.com/in/sara-darwish-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
            target="_blank"
            rel="noopener noreferrer"
            color="orange"
            class="orange--text"
          >
            linkedin
          </a>

        </v-card-text>
        <v-card-actions>
        <br>
        <br>
        <p>Thank you </p>
        <v-spacer />
        <v-btn
          color="grey lighten-2"
          class="orange--text"
          nuxt
          to="/about"
        >
          Continue
        </v-btn>
        </v-card-actions>

      </v-card>
    </div>
    </v-col>
  </v-row>
</template>

<script>
import Cv from '~/components/Cv.vue';
import SomeProjects from '~/components/SomeProjects.vue';
import SomeSkills from '~/components/SomeSkills.vue';
import SomeContacts from '~/components/SomeContacts.vue';

export default {
  components: {Cv , SomeProjects,SomeSkills ,SomeContacts},
  name: 'IndexPage',
  data () {
    return {
      items: [
        {
          src: require('../assets/img/itrax.png'),
        },
        {
          src: require('../assets/img/jazeel.png'),
        },
        {
          src: require('../assets/img/seff.png'),
        },
        {
          src: require('../assets/img/prain.png'),
        },
        {
          src: require('../assets/img/solo.png'),
        },
        {
          src: require('../assets/img/yege.png'),
        },
      ],
    }
  },
  // mounted() {
  //   document.addEventListener("mousemove", this.updateMousePosition);
  // },
  // beforeDestroy() {
  //   document.removeEventListener("mousemove", this.updateMousePosition);
  // },
  // methods: {
  //   updateMousePosition(e) {
  //     const image = this.$refs.mouseImage;
  //     image.style.left = e.clientX + "px";
  //     image.style.top = e.clientY + "px";
  //   },
  // },
}
</script>

<style scoped>
/* .mouse-image {
  position: fixed;
  width: 50px;
  height: 50px;
  pointer-events: none;
  z-index: 1000;
} */
</style>
