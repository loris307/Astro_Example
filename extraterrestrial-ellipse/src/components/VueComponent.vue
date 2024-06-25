<template>
  <div class="bg-green-500 p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
    <div>
      <h2 class="text-white text-2xl mb-2">Vue Komponente</h2>
      <button 
        @click="count++" 
        class="px-4 py-2 bg-white text-black-500 font-bold rounded-lg hover:bg-gray-100 transition"
      >
        Klick mich!
      </button>
    </div>
    <div class="text-white text-6xl font-bold">
      {{ count }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>


  