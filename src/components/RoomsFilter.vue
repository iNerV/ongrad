<template>
  <MultiSelect :options="options" v-on="$listeners" />
</template>

<script>
import getOptions from "@/utils/getOptions";
import MultiSelect from "@/components/MultiSelect";

export default {
  model: {
    event: "change"
  },
  components: {
    MultiSelect
  },
  props: {
    facets: { type: Object, required: true }
  },
  computed: {
    options() {
      const options = getOptions("rooms", this.facets);
      const idx = options.findIndex(obj => obj.key === 0);

      if (options[idx]) {
        options[idx].value = "Студия";
      }
      return options;
    }
  }
};
</script>

<style scoped lang="scss"></style>
