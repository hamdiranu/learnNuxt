<template>
  <div id="app">
    <Header />
    <HeaderQuiz
      :num-correct="numCorrect"
      :num-total="numTotal"
    />
    <b-container class="bv-example-row box-quiz">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length"
            :current-question="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderQuiz from '~/components/HeaderQuiz.vue'
import QuestionBox from '~/components/QuestionBox.vue'
import Header from '~/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeaderQuiz,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  mounted() {
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.questions = jsonData.results
      })
  },
  methods: {
    next() {
      this.index++
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box-quiz {
  display: contents !important;
}
</style>
