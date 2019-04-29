<template>
  <v-app dark>
    <v-container fluid>
      <v-layout align-center justify-center fill-height column>
        <h1 style="word-wrap: break-word; text-align: center;">{{text}}</h1>
      </v-layout>
    </v-container>
    <v-text-field
      id="input"
      @keyup.alt.u="setEnglish"
      @keyup.alt.k="setKorean"
      @keyup.alt.j="setJapanese"
      autogrow
      autofocus
      v-model="text"
      style="float: left; margin: 10;"
    ></v-text-field>
  </v-app>
</template>

<script>
import * as wanakana from 'wanakana'
import fitty from 'fitty'
export default {
  data: function() {
    return {
      text: "",
      mode: "english"
    };
  },
  methods: {
    setEnglish: function() {
      this.mode = "english";
    },
    setJapanese: function() {
      this.mode = "japanese";
    }
  },
  mounted() {
    // setInterval(() => {this.text = this.text})
    fitty('h1', {maxSize: 256, minSize: 64})
  },
  watch: {
    text: function() {
      if (this.mode == "japanese")
        this.text = wanakana.toKana(this.text, { IMEMode: true });
    }
  }
};
</script>

<style>

</style>
