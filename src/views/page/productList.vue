<template>
    <div class="product-list">
        <search-box @submit="searchSubmit" />
    </div>
</template>

<script>
import SearchBox from '@/components/search.vue';

export default {

  components: {
    SearchBox,
  },
  methods: {
    searchSubmit(form) {
      console.log(form);
    },
  },
};
</script>
