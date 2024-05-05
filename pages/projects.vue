<template>
  <div>
    <div
      class="pb-4"
      style="
        font-family: 'Raleway', serif;
        font-size: 30px;
        font-weight: 700;
        color: black;
      "
    >
      Projects
    </div>
    <div>
      <span v-for="(c, i) of projectsCategories" :key="c">
        <v-btn
          :to="`${c.link}`"
          color="black"
          variant="text"
          :text="`${c.category}`"
          prepend-icon="mdi-square"
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.projectsCategories = globalThis.CGEScontent.projectsCategories;
  },
  data() {
    return {
      projectsCategories: [],
    };
  },
  methods: {},
};
</script>
