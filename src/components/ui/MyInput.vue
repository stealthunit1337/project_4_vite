<template lang='pug'>
.input-wrapper
  .input-label {{ label }}
  input.input-body
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
  },
  setup() {

    return {

    }
  }
})
</script>

<style lang='scss'>
</style>