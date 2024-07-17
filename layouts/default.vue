<template>
  <v-app dark>
    <!-- //////// -->
    <!-- <header>
      <img src="../static/logo0.png" alt="Site Logo" class="site-logo">
    </header> -->
    <!-- /////// -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      height="100000"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="orange lighten-2"
          class="orange--text"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ////////////////////////////// -->
      <div>
        <img
          ref="mouseImage"
          src="../assets/img/LOGO.png"
          alt="Mouse Image"
          class="  mouse-image"
          rounded
        >
      </div>
    <!-- ////////////////////////////// -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon class="orange--text">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-avatar
          class="grey lighten-3 mx-2 px-2 ">
        <img  :src='require(`../assets/img/LOGO.png`)'>
      </v-avatar>
      <a class="white--text" href="/"><v-toolbar-title class="mx-2 ">{{ title }}</v-toolbar-title></a>

    </v-app-bar>
    <v-main>
      <v-container>
        <Loader/>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
      class="orange--text"
    >
      <span >&copy; Sara Darwish   </span> <span>  &copy;  {{ new Date().getFullYear() }} </span>
    </v-footer>
  </v-app>
</template>

<script>
import Loader from '~/components/Loader.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Loader
  },
  // async beforeCreate() {
  //   this.$root.$emit('start-loading');
  // },
  // async created() {
  //   this.$root.$emit('stop-loading');
  // },
   async beforeCreate() {
    this.$root.$emit('start-loading');
  },
  async created() {
    this.$root.$emit('stop-loading');
  },
  watch: {
    '$route'(to, from) {
      this.$root.$emit('start-loading');
      this.$nextTick(() => {
        this.$root.$emit('stop-loading');
      });
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About Me',
          to: '/about'
        },
        {
          icon: 'mdi-circle',
          title: 'My Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-play',
          title: 'My Skills',
          to: '/skills'
        },
        {
          icon: 'mdi-mail',
          title: 'Contact me',
          to: '/contact'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: " Sara's Web",
     }
  },
   mounted() {
    document.addEventListener("mousemove", this.updateMousePosition);
  },
  methods: {
    updateMousePosition(e) {
      const image = this.$refs.mouseImage;
      image.style.left = e.clientX + "px";
      image.style.top = e.clientY + "px";
    },
  },
}
</script>

<style  >
.mouse-image {
  position: fixed;
  width: 50px;
  height: 50px;
  pointer-events: none;
  z-index: 1000;
  border-radius: 50%;
  background-color: rgb(190, 190, 190) ;
  /* padding: 0.5rem; */
}
</style>
