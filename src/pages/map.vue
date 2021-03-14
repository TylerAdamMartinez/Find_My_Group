
<template>
  <!---DISPLAYING MAP ---->
  <q-layout view="hHh lpR fFf">
    <div class="flex flex-center">
      <iframe 
        width="400" 
        height="600" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=-109.6769428253174%2C23.485604846574866%2C-87.46258735656738%2C38.27457524235273&amp;layer=transportmap" 
        >
      </iframe>   
    </div>
  </q-layout>
  
</template>

<script>

</script>


<style>

iframe {
  border: 2px solid #31CCEC;
  border-radius: 15px;
  margin-top: 45px;
}

</style>