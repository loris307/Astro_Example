<template>
	<div class="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-600 space-y-4">
	  <h1 class="text-2xl font-bold text-emerald-500">Hallo von Vue in Astro!</h1>
	  <button class="bg-gray-500 p-2 "@click="handleClick">Klick mich</button>
	</div>
</template>
  
    <script setup>
      function handleClick() {
          alert('Button in Vue wurde geklickt!');
      }
    </script>

  