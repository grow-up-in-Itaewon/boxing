<template>
  <v-app>
    <v-app-bar 
      app 
      color="primary" 
      dark
    >
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
      <site-title :title="title"></site-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <site-menu></site-menu>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <site-footer :footer="footer"></site-footer>

  </v-app>
</template>

<script>
import SiteTitle from '@/components/Title'
import SiteFooter from '@/components/Footer'
import SiteMenu from '@/components/Menu'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: "App",
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      drawer: false,
      title: 'Fight Club',
      footer: 'Fight Club',
      right: null,
  }),
};
</script>
