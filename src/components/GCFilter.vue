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
      return getOptions("term_gc", this.facets);
    }
  }
};
</script>

<style scoped lang="scss"></style>
