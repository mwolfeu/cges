<template>
  <div class="d-flex ga-4">
    <div class="w-25">
      <div v-for="t of types" :key="t">{{ t }}</div>
      <v-list>
        <v-list-subheader>Filter by:</v-list-subheader>

        <v-list-item
          v-for="(item, i) in types"
          :key="i"
          :value="item"
          rounded="xl"
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
      <div class="d-flex flex-wrap ga-4">
        <!-- title	subtitle	abstract_image	abstract	body	attachments	is_dialog	type -->
        <v-card v-for="c of content" :key="c" style="width: 300px">
          <v-card-item>
            <v-card-title color="red" v-if="'title' in c">{{
              c.title
            }}</v-card-title>
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
    const sheet = wb.Sheets[wb.SheetNames[0]];
    this.content = XLSX.utils.sheet_to_json(wb.Sheets["News & Events Content"]);
    this.types = new Set(this.content.map((d) => d.type.trim()));
  },
  data() {
    return {
      content: [],
      contentTypes: ["All"],
    };
  },
  methods: {
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
