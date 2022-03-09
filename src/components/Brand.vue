<template>
  <div class="Brand" :class="{'Brand--small': brand.small}">
    <div class="Brand__image">
      <img class="Brand__logo" :src="logo" :alt="brand.description" loading="lazy" />
    </div>
    <div class="mt-3 text-sm text-gray-500">
      {{ brand.name }}
    </div>
    <div v-if="brand.status === -1" class="mt-6 font-bold text-blue-500 cursor-pointer hover:bg-blue-600 px-4 py-1 bg-blue-500 text-white rounded-full border">
      <a :href="twitterProfile" target="_blank">Tweet</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: Object,
    default: () => {}
  },

  computed: {
    logo() {
      return `brands/optimized/${this.brand.id}.png`
    },
    twitterProfile() {
      return `https://twitter.com/compose/tweet?text=Hey%20%40${this.brand.twitter}%20.........................%20%28via%20https%3A%2F%2Fwww.brandsinrussia.com%29`
    }
  }
}
</script>

<style lang="postcss">
.Brand {
  @apply flex flex-col items-center justify-between;

  &__image {
    @apply h-32;
  }

  &--small .Brand__image {
    @apply h-24;
  }

  &__logo {
    @apply mix-blend-multiply w-full h-full flex-grow-0 flex-shrink-0 object-contain;
  }

  &__name {
    @apply mt-4 text-center text-sm text-gray-400;
  }
}
</style>
