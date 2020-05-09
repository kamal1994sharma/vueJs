<template>
    <div class="vertical-menu">
      <a href="#/mobilehome" v-bind:class="activeMobileHome">Home</a>
      <a href="#/postStampHome" v-bind:class="activePostStampHome">Post Stamps</a>
      <a href="#/mobKartHome" v-bind:class="activeMobKartHome">Mobile Products</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 4</a>
    </div>
</template>

<script>
export default {
  name: 'MobileLeftMenu',
  props: ['activeMobileHome', 'activePostStampHome', 'activeMobKartHome'],
  data () {
    return {
      introTextLogin: 'Welcome to mobile home component'
    }
  },
  created () {
    console.log(this.introTextLogin)
  },
  methods: {
    resetLoginDate: function () {
      console.log(this.introTextLogin)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vertical-menu {
  width: 220px;
  height: 220px;
  margin-top: 12px;
}
.vertical-menu a {
  background-color: #eee;
  color: black;
  display: block;
  padding: 13px 10px 13px 0px;
  text-align: center;
  text-decoration: none;
}
.vertical-menu a:hover {
  background-color: #CEE3EE;
}
.vertical-menu a.active {
  background-color: #57AFDE;
  color: white;
}
</style>
