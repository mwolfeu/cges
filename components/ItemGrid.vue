<template>
  <div class="d-flex ga-4 ma-4">
    <div class="w-25" v-if="types.length > 1" style="min-width: 200px">
      <!-- FILTER -->
      <div>Filter by:</div>
      <v-list>
        <v-list-item
          v-for="(item, i) in ['All', ...types]"
          :key="i"
          :value="item"
          :active="item == filter"
          rounded="xl"
          color="secondary"
          @click="() => filterBy(item)"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <!-- GRID -->
    <div>
      <div>
        <b>{{ content.length }}</b> Found:
      </div>
      <div class="d-flex flex-wrap ga-6 justify-left pa-4">
        <!-- title	subtitle	abstract_image	abstract	body	attachments	is_dialog	type -->
        <v-card
          v-for="c of content"
          :key="c"
          :style="`width: 300px; border-top: 2px solid ${cardTypes[c.type]};`"
        >
          <v-card-item>
            <v-card-title v-if="'title' in c"
              ><b>{{ c.title }}</b></v-card-title
            >
            <v-card-subtitle v-if="'subtitle' in c">{{
              c.subtitle
            }}</v-card-subtitle>
            <template v-slot:prepend v-if="'abstract_image' in c">
              <v-avatar size="64" rounded="0">
                <v-img :src="`/cges/img/${c.abstract_image}`"></v-img>
              </v-avatar>
            </template>
          </v-card-item>
          <v-card-text>
            <div v-if="'abstract' in c">{{ c.abstract }}</div>
            <div v-if="'attachments' in c">
              <div v-for="(a, i) in parseURLs(c.attachments)">
                <div
                  class="pt-3"
                  @click="openURL(a)"
                  style="font-weight: 700; cursor: pointer"
                >
                  Attachment {{ i + 1 }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import siteData from "~/public/cges/localization.json";

export default {
  props: {
    // items: {
    //   type: Array,
    //   required: true,
    //   default: Array,
    // },
    contentKey: {
      type: String,
      required: true,
      default: "",
    },
  },
  async mounted() {
    //globalThis.CGEScontent.cardTypes
    console.log("mw", await $fetch("/cges/localization.json"));
    for (const t of siteData["Card Types"]) this.cardTypes[t.type] = t.color;

    this.all = siteData[this.contentKey];
    this.content = this.all;
    this.types = [...new Set(this.content.map((d) => d.type.trim()))];
  },
  data() {
    return {
      cardTypes: {},
      types: [],
      all: [],
      content: [],
      filter: "All",
    };
  },
  methods: {
    parseURLs(s) {
      return s.split(" ").filter((u) => u != "");
    },
    openURL(url) {
      window.open(url, "_blank");
    },
    filterBy(type) {
      console.log("here");
      this.filter = type;
      if (type == "All") this.content = this.all;
      else this.content = this.all.filter((o) => o.type == type);
    },
  },
};
</script>
