<template>
    <div>
        <Header />
        <h1 class="titelPage">User List</h1>
        <div class="containerButton">
          <button class="getUserButton" @click="getUsers">
            Get Random User
          </button>
        </div>
        <ul v-for="user in users" :key="user.id.name" class="userList">
          <li>
            {{user.name.title}} {{user.name.first}} {{user.name.last}}
          </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  computed: mapState(['users']),
  methods: {
    ...mapActions(['getUsers']),
    ...mapMutations(['addUsers'])
  }
}
</script>

<style scoped>
h1 {
    text-align: center;
}

.containerButton {
  text-align: center;
  margin: 30px auto;
}

.titelPage {
  margin-top: 20px;
}
</style>