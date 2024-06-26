import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [vue(), react()],
});