<template>
  <div class="puzzle min-h-screen flex flex-col items-center justify-center relative">
    <div class="back absolute top-12 left-0">
      <NuxtLink class="p-12 text-16" to="/">Back</NuxtLink>
    </div>

    <div class="board h-[min(90vh,90vw)] w-[min(90vh,90vw)] flex flex-col space-y-4">
      <div v-for="(row, ri) in map" :key="ri" class="flex-1 row flex space-x-4">
        <div v-for="(cell, ci) in row" :key="ci" class="flex-1 cell">
          <a-button
            v-if="cell"
            class="h-full w-full text-bold p-0"
            :style="{ fontSize: `min(${24 / level}vh,${24 / level}vw)` }"
            type="primary"
            @click="handleClick(ri, ci)"
            >{{ cell }}</a-button
          >
          <div v-else class="h-full w-full" type="ghost"></div>
        </div>
      </div>
    </div>

    <a-modal
      :visible="win"
      title="Congratulations"
      ok-text="New game"
      cancel-text="Home"
      @ok="handleRestart"
      @cancel="handleBackHome"
    >
      <h1 class="text-64 text-center text-[#068FFF]">You won!</h1>
    </a-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GameController } from '../../controller/game.controller';

let game: GameController;

export default Vue.extend({
  name: 'PuzzleLevelPage',
  data() {
    const level = Number(this.$route.params.level);
    game = new GameController(level);
    return {
      map: game.map,
      level,
      win: false,
    };
  },
  methods: {
    handleClick(r: number, c: number) {
      game.click(r, c);
      this.map = game.getMap();
      if (game.checkWinning()) {
        this.win = true;
      }
    },
    handleBackHome() {
      this.$router.replace('/');
    },
    handleRestart() {
      this.win = false;
      game = new GameController(this.level);
      this.map = game.getMap();
    },
  },
});
</script>
