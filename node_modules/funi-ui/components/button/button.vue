<template>
  <div>
    <button @click="btnClick" class="btn">{{ props.btnText }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  btnText: {
    //asd
    default: '按钮',
  },
});

const btnClick = () => {
  alert('点击了按钮');
};
</script>
<script>
export default {
  name: 'FuniButton',
};
</script>
<style lang="scss" scoped>
.btn {
  border: 1px solid #dddddd;
  padding: 2px 6px;
}
</style>
