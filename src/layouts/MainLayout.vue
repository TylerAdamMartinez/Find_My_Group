
<template>
  <q-layout view="lHh Lpr lFf">
    <!---HOMEPAGE TITLE BAR --->
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <img src="src/assets/images_for_web/texas.jpeg">
          </q-avatar>
          Find My Group
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
