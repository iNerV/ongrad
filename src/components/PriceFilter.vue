<template>
  <div v-on="listeners">
    <label>
      от {{ price.min }} млн. руб.
      <input
        class="custom-range"
        type="range"
        v-model.number.lazy="price.min"
        :max="price.max"
      />
    </label>
    <label>
      до {{ price.max }} млн. руб.
      <input
        class="custom-range"
        type="range"
        v-model.number.lazy="price.max"
        :min="price.min"
        max="25"
      />
    </label>
  </div>
</template>

<script>
const M = 1000000;
export default {
  model: {
    event: "change"
  },
  data() {
    return {
      price: {
        min: 0,
        max: 25
      }
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: () =>
          this.$emit("change", {
            min_price: this.price.min * M,
            max_price: this.price.max * M
          })
      };
    }
  }
};
</script>

<style scoped lang="scss"></style>
