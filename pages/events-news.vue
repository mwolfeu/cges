<template>
  <div class="d-flex ga-4 ma-4">
    <div class="w-25" v-if="types.length > 1" style="min-width: 200px">
      <!-- <div v-for="t of types" :key="t">{{ t }}</div> -->
      <div>Filter by:</div>
      <v-list>
        <!-- <v-list-subheader></v-list-subheader> -->

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
    <div>
      <div>
        <b>{{ content.length }}</b> Found:
      </div>
      <div class="d-flex flex-wrap ga-4 justify-space-between pa-4">
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
                <v-img :src="`/cges/content/img/${c.abstract_image}`"></v-img>
              </v-avatar>
            </template>
          </v-card-item>
          <v-card-text v-if="'abstract' in c">{{ c.abstract }}</v-card-text>
          <!-- <v-card-actions v-if="'' in c"></v-card-actions> -->
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import * as XLSX from "xlsx/xlsx.mjs";

export default {
  async mounted() {
    const wb = await this.parse_from_url("/cges/content.xlsx");
    // const sheet = wb.Sheets[wb.SheetNames[0]];
    const ct = XLSX.utils.sheet_to_json(wb.Sheets["CardTypes"]);
    for (const t of ct) this.cardTypes[t.Type] = t.Color;
    console.log(this.cardTypes);

    this.all = XLSX.utils.sheet_to_json(wb.Sheets["News & Events Cards"]);
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
    filterBy(type) {
      this.filter = type;
      if (type == "All") this.content = this.all;
      else this.content = this.all.filter((o) => o.type == type);
    },
    async parse_from_url(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("fetch failed");
      const ab = await res.arrayBuffer();
      // console.log("blob", ab);
      const workbook = XLSX.read(ab);
      return workbook;
    },
  },
};
</script>
