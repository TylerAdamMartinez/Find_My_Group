<template>

  <q-btn-dropdown 
    :color="ShowDarkMode_Orange" 
    label="Create an account"
    dropdown-icon="menu_open">
    <q-list :style="ShowDarkMode_border_Orange" id="login_list" style="width: 350px; margin-top: 0px;">
      <q-item>
        <q-item-section>
          <q-input v-model="text" label="Email" :color="ShowDarkMode_Orange"/>
        </q-item-section>
      </q-item>
      
      <q-item>
        <q-item-section>
          <q-input v-model="text" label="Username" :color="ShowDarkMode_Orange"/>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-input v-model="text" label="Password" :color="ShowDarkMode_Orange"/>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-input v-model="text" label="Confirm Password" :color="ShowDarkMode_Orange"/>
        </q-item-section>
      </q-item>
      <!-- CHECKBOX -->
      <q-item>
        <q-item-section>
          <q-checkbox class="flex flex-center"
              v-model="customModel02"
              color="secondary"
              label="I agree with the terms & conditions"
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