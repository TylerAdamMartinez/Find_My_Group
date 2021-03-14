
<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HOMEPAGE TITLE BAR -->
    <q-header elevated :class="ShowDarkMode_header" height-hint="98">
      <!-- <q-toolbar>
        <q-avatar rounded size="100px">
          <img id="flag_logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg">
        </q-avatar>
        <q-toolbar-title>
          Find My Group
        </q-toolbar-title>
      </q-toolbar> -->
      <!-- TITLE BAR TABS -->
      <q-tabs align="center">
        <q-route-tab to="/" label="Home Page" />
        <q-route-tab to="/map" label="Find Others" />
        <q-route-tab to="/my_account" label="My Account" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('settings', ['setIsDarkMode'])
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    IsDarkMode: {
      get(){
        return this.settings.IsDarkMode
      },
      set(value) {
        this.setIsDarkMode(value)
      }
    },
    ShowDarkMode_header() {
      if (!this.settings.IsDarkMode) {
        return "bg-primary text-white"
      }
      else {
        return "bg-orange text-black"
      }
    }
  }
}

</script>

<style>
  #flag_logo {
    height: 45px;
    width: 45px;
  }

</style>
