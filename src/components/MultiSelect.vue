<template>
  <div class="form-group">
    <select
      class="form-control"
      multiple
      v-model="selected"
      v-on="listeners"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :key="option.key"
        :disabled="option.disabled"
        :value="option.key"
      >
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: "change"
  },
  name: "MultiSelect",
  props: {
    options: { type: Array, required: true }
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: () => this.$emit("change", this.selected)
      };
    }
  }
};
</script>

<style scoped lang="scss"></style>
