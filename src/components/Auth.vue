<template>
    <q-btn-dropdown 
      :color="ShowDarkMode_Orange" 
      label="Sign in here" 
      dropdown-icon="menu_open">
      <q-list unelevated :style="ShowDarkMode_border_Orange" id="login_list" style="width: 350px; margin-top: 0px;">

        <q-item>
          <q-item-section>
            <q-input v-model="AuthFromData.email" label="Email" :color="ShowDarkMode_Orange"/>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-input v-model="AuthFromData.password" type="password" label="Password" :color="ShowDarkMode_Orange"/>
          </q-item-section>
        </q-item>
        <!-- CHECKBOX -->
        <q-item>
          <q-item-section>
            <q-checkbox class="flex flex-center"
                v-model="customModel"
                color="secondary"
                label="Keep me logged in"
                true-value="yes"
                false-value="no"
            />
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>

<template>

<script>

</script>

<style>

</style>