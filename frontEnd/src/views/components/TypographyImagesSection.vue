<template>
  <div class="wrapper">
    <div id="typography">
      <div class="title">
        <h2>{{content}}</h2>
      </div>
      
    </div>
    <div class="space-50"></div>

    
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      image: require("@/assets/img/faces/avatar.jpg"),
      responsive: false
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>
