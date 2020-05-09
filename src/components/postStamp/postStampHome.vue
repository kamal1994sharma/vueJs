<template>
  <div style="display: flex;">
    <MobileLeftMenu activePostStampHome="active"></MobileLeftMenu>
    <div class="homeMargin">
      <h2>{{introTextLogin}}</h2>
    </div>
    <br>
    <!-- <div> -->
      <!-- <img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"><img>
      <img src="../../assets/images/apple.png" fluid alt="Fluid image"><img> -->
    <!-- </div> -->
  </div>
</template>

<script>
import MobileLeftMenu from '@/components/home/MobLeftMenu'
export default {
  name: 'PostStampHome',
  components: {
    MobileLeftMenu: MobileLeftMenu
  },
  data () {
    return {
      introTextLogin: 'Post Stamp Home',
      availProduct: ['Upload your registration details', 'Tea', 'Make a payment', 'More Coming Soon........'],
      newProduct: ['Iphone1', 'Iphone2', 'More Coming Soon........']
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
.homeMargin{
  margin: 30px;
}
ul {
  background: #E2E7F2;
  padding: 5px 20px 5px 30px;
}

</style>
