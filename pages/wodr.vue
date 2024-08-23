<template>
  <!-- <il contentKey="Women on Death Row List" />
  <ig contentKey="Women on Death Row Cards" /> -->
  <v-card class="w-100 pa-6">
    <v-card-title class="d-flex justify-center">
      Women on Death Row Worldwide
    </v-card-title>

    <v-card-subtitle class="d-flex justify-center">
      <div class="w-75" style="text-wrap: wrap">
        This map highlights the countries where courts have sentenced women to
        death. Women are prosecuted and sentenced in criminal legal systems
        imbued with sexism, racism, xenophobia, classism, and ableism.
      </div>
    </v-card-subtitle>

    <v-card-text>
      MAP nav w mouse/kbd
      <br />
      legend: Abolitionist, Abolitionist for common law crimes, De facto
      abolitionist, Retentionist
    </v-card-text>

    <v-card-subtitle class="d-flex justify-center">
      <div class="w-75" style="text-wrap: wrap">
        This data was gathered as part of an ongoing long-term collaboration
        between the Cornell Center on the Death Penalty Worldwide, The Advocates
        for Human Rights, the Center on Gender and Extreme Sentencing, and the
        World Coalition Against the Death Penalty.
      </div>
    </v-card-subtitle>

    <!-- <v-card-actions>
      <v-btn color="primary">Learn More</v-btn>
      <v-btn color="secondary">Share</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import il from "../components/ItemList.vue";
import ig from "../components/ItemGrid.vue";

export default {
  components: {
    il,
    ig,
  },
  props: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
