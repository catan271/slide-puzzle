<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="select-level flex flex-col space-y-8">
      <NuxtLink v-for="level in levels" :key="level" :to="'/puzzle/' + level">
        <a-button class="w-120" type="primary">
          {{ level }} x {{ level }}
        </a-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      levels: [3, 4, 5, 6, 7, 8],
    };
  },
});
</script>
