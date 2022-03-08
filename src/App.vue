<template>
  <div>
    <div class="wrapper">
      <h1 class="mb-8">
        Brands in Russia
      </h1>
      <p class="text-lg md:text-2xl leading-relaxed">
        Growing list of companies and brands that closed their business in Russia.
        <br class="hidden md:block" />
        Is your favorite brand still open in Russia? <span class="font-semibold">Let them know what you think!</span>
      </p>
    </div>
    <div class="wrapper bg-red-50">
      <h2>
        Open in Russia
      </h2>

      <div class="tiles">
        <Brand v-for="brand in openBrands" :key="brand.id" :brand="brand" />
      </div>
    </div>
    <div class="wrapper bg-white-50">
      <h2>
        Closed or limited
      </h2>

      <div class="tiles">
        <Brand v-for="brand in limitedBrands" :key="brand.id" :brand="brand" />
      </div>
    </div>
    <div class="footer wrapper border-t bg-yellow-200">
      <p class="text-lg md:text-2xl leading-relaxed">
        Can't find your favorite brand? <a href="mailto:hello@brandsinrussia.com" class="font-semibold text-blue-500">Suggest a brand</a>.
        &nbsp;&nbsp;
        Something is wrong? <a href="mailto:hello@brandsinrussia.com" class="font-semibold text-blue-500">Let us know</a>.
      </p>
    </div>

  </div>
</template>

<script>
import brands from '@/constants/brands'
import Brand from '@/components/Brand.vue'
export default {
  components: {
    Brand
  },

  data() {
    return {
      brands
    }
  },

  computed: {
    openBrands() {
      return brands.filter(({ status }) => status === -1)
    },
    limitedBrands() {
      return brands.filter(({ status }) => status !== -1)
    }
  }
};
</script>
