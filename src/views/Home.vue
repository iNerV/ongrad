<template>
  <div class="home">
    <AppFilters />
    <span>Всего ( {{ results.total }}) квартир</span>
    <ul>
      <li v-for="item in results.items" :key="item.id">
        {{ item.id }} —— {{ item.address }}
      </li>
    </ul>
    <button
      class="btn btn-primary"
      @click="previousPage"
      v-if="!($route.query.page === 1)"
    >
      Назад
    </button>
    <button
      class="btn btn-primary"
      @click="nextPage"
      v-if="!($route.query.page >= Math.floor(results.total / 10))"
    >
      Дальше
    </button>
  </div>
</template>

<script>
import AppFilters from "@/components/AppFilters.vue";

import axios from "axios";

export default {
  name: "home",
  components: {
    AppFilters
  },
  data() {
    return {
      results: []
    };
  },
  methods: {
    async getResult() {
      const BACKEND_URL = "/api/search/apartment/list/";
      const { query } = this.$route;
      const defaultQuery = {
        company_id: [],
        complex_id: [],
        limit: 10,
        location_slugs: [],
        metro_stations: [],
        offset: query.page === 1 ? 0 : (query.page || 1) * 10,
        sort: ["price"]
      };
      const resp = await axios.post(BACKEND_URL, { ...defaultQuery, ...query });
      this.results = resp.data;
    },
    nextPage() {
      this.changePage("forward");
    },
    previousPage() {
      this.changePage("backward");
    },
    changePage(direction) {
      const query = Object.assign({}, this.$route.query);
      if (!query.page) query.page = 1;
      query.page = direction === "forward" ? query.page + 1 : query.page - 1;
      return this.$router.push({ name: "home", query: { ...query } });
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: "getResult"
    }
  }
};
</script>
