<template>
  <h1 class="title">About</h1>
</template>

<script>
export default {
  head() {
    return {
      title: "try learning about nuxt.js",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'place fo learning something new'
        }
      ]
    };
  }
};
</script>

<style>
.title{
  color: blueviolet;
}
</style>