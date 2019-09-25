<template>
  <div class="filters">
    <component
      v-for="filter in filters"
      :is="filter.name"
      v-bind="props"
      v-model="selected[filter.key]"
      :key="filter.key"
    />
    <button class="btn btn-primary" @click="search">search</button>
  </div>
</template>

<script>
import GCFilter from "@/components/GCFilter";
import BuildingFilter from "@/components/BuldingFilter";
import RoomsFilter from "@/components/RoomsFilter";
import PriceFilter from "@/components/PriceFilter";
import FloorFilter from "@/components/FloorFilter";

import axios from "axios";
import makeQuery from "@/utils/makeQuery";

export default {
  name: "AppFilters",
  components: {
    BuildingFilter,
    GCFilter,
    RoomsFilter,
    PriceFilter,
    FloorFilter
  },
  data() {
    return {
      test: {},
      selected: {
        price: {},
        floor: {},
        rooms: {},
        term_gc: [],
        building_type: []
      },
      props: {
        facets: {},
        labels: {}
      },
      filters: [
        { name: "GCFilter", key: "term_gc" },
        { name: "BuildingFilter", key: "building_type" },
        { name: "RoomsFilter", key: "rooms" },
        { name: "PriceFilter", key: "price" },
        { name: "FloorFilter", key: "floor" }
      ]
    };
  },
  methods: {
    search() {
      this.test = makeQuery(this.selected);
      this.$router.push({ query: makeQuery(this.selected) }, () => {});
    }
  },
  async mounted() {
    const BACKEND_URL = "/api/search/apartment/facet/";
    const resp2 = await axios.get(BACKEND_URL);
    const resp = await axios.post(BACKEND_URL, {});
    this.props.facets = { ...resp.data.facets };
    this.props.labels = resp2.data;
  }
};
</script>
