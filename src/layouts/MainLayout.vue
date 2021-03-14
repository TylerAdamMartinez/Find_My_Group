
<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HOMEPAGE TITLE BAR -->
    <q-header elevated class="bg-primary text-white" height-hint="98">
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

</script>

<style>
  #flag_logo {
    height: 45px;
    width: 45px;
  }

</style>
