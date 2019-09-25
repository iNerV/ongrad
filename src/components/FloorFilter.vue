<template>
  <div v-on="listeners">
    <label>
      <input
        type="checkbox"
        class="form-check-input"
        v-model="floor.floor_not_first_not_last"
      />
      не первый / не последний
    </label>
    <label>
      мин. этаж {{ floor.min_floor }}
      <input
        class="form-control"
        type="number"
        v-model.number.lazy="floor.min_floor"
        :max="floor.max_floor"
      />
    </label>
    <label>
      макс. этаж {{ floor.max_floor }}
      <input
        class="form-control"
        type="number"
        v-model.number.lazy="floor.max_floor"
        :min="floor.min_floor"
      />
    </label>
  </div>
</template>

<script>
export default {
  model: {
    event: "change"
  },
  data() {
    return {
      floor: {
        min_floor: 1,
        max_floor: 100,
        floor_not_first_not_last: false
      }
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: () => this.$emit("change", this.floor)
      };
    }
  }
};
</script>

<style scoped lang="scss"></style>
