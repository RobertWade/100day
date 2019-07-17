<template>
  <input :type="type" class="input" />
</template>

<script>
export default {
  props:['type'],
  name: "Inputfield",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.input {
  padding: 20px;
  background: #fff;
  -webkit-box-shadow: 5px 5px 19px -1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 5px 5px 19px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 5px 5px 19px -1px rgba(0, 0, 0, 0.12);
  border-radius:10px;
  width:100%;
}
</style>

Learn more about Single File Components
#