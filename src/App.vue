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
    <div class="footer wrapper border-t bg-yellow-200 flex items-center justify-between">
      <p class="text-lg md:text-2xl leading-relaxed">
        Can't find your favorite brand? <a href="mailto:hello@brandsinrussia.com" class="font-semibold text-blue-500">Suggest a brand</a>.
        &nbsp;&nbsp;
        Something is wrong? <a href="mailto:hello@brandsinrussia.com" class="font-semibold text-blue-500">Let us know</a>.
      </p>
      <div class="flex space-x-4 items-center">
        <div>
          Updated March 8, 2022
        </div>
        <div>
          <a href="https://github.com/virae/brands-in-russia" target="_blank" title="Open on Github">
            <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
            </svg>
          </a>
        </div>
      </div>
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
