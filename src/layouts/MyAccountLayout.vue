
<template>
  <q-layout view="lHh Lpr lFf">
    <!---HOMEPAGE TITLE BAR --->
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          MY ACCOUNT / SETTINGS PAGE
        </q-toolbar-title>
      </q-toolbar>
      <!---TITLE BAR TABS --->
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