<template>
  <ig :items="content" />
</template>

<script>
import ig from "../components/ItemGrid.vue";

export default {
  components: {
    ig,
  },
  props: {},
  mounted() {},
  data() {
    return { content: globalThis.CGEScontent.womenOnDeathRow };
  },
  methods: {},
};
</script>
