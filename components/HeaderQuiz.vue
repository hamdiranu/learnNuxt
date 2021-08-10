<template>
  <div>
    <b-nav tabs class="header-content">
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled>Counter: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    numCorrect: {
      type: String,
      default: null,
    },
    numTotal: {
      type: String,
      default: null,
    }
  }
}
</script>

<style>
.header-content{
  display: block;
  padding-bottom: 5vh;
}
</style>
