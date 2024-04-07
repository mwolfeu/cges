<template>
  <div>

    <Carousel class="mt-4 h-75 ma-auto" :autoplay="4000" :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="slide in 5" :key="slide">
        <v-img @click="console.log('hi')" class="carousel__item" :src="`/cges/img/p${slide}.jpg`"></v-img>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <div class="w-100 mt-6 pb-6" style="background-image: url('/cges/bg.png');  background-repeat: repeat;">
      <div class="ma-auto d-flex flex-row">
        <v-row class="w-75 justify-center">
          <div class="w-25 ma-4">
            <div class="mt-6 w-100 text-h6 font-weight-bold">Projects</div>
            <v-card class="mt-6 w-100" v-for="slide in 5" :key="slide">
              <v-card-item class="pa-1 bg-gold mb-4">
                <v-card-title class="ml-2">This is a title</v-card-title>

                <v-card-subtitle class="ml-2">This is a subtitle</v-card-subtitle>
              </v-card-item>

              <v-card-text>
                {{ li.generateSentences(parseInt(Math.random() * 5)) }}
              </v-card-text>
            </v-card>
          </div>
          <div class="w-25 ma-4">
            <div class="mt-6 w-100 text-h6 font-weight-bold">Events</div>
            <v-card class="mt-6 w-100" v-for="slide in 5" :key="slide">
              <v-card-item class="pa-1 bg-rust mb-4">
                <v-card-title class="ml-2">This is a title</v-card-title>

                <v-card-subtitle class="ml-2">This is a subtitle</v-card-subtitle>
              </v-card-item>

              <v-card-text>
                {{ li.generateSentences(parseInt(Math.random() * 5)) }}
              </v-card-text>
            </v-card>
          </div>
        </v-row>

      </div>
    </div>
    hello
    <test />
  </div>
</template>
<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { LoremIpsum } from "lorem-ipsum";
import * as XLSX from 'xlsx/xlsx.mjs';

export default {

  components: {
    Carousel,
    Slide,
    Pagination,
  },
  async mounted() {
    // const wb = await this.parse_from_url("/cges/content.xlsx");
    // const sheet = wb.Sheets[wb.SheetNames[0]]
    // this.categories = XLSX.utils.sheet_to_json(wb.Sheets['Main Categories']);
    // console.log("len", wb.SheetNames, JSON.stringify(json));
    // console.log(JSON.stringify(json));

  },
  data() {
    return {
      // data: { sheet1: [] },
      categories: [],
      li: new LoremIpsum(),
      layout: "default",
    }
  },
  methods: {
    async parse_from_url(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("fetch failed");
      const ab = await res.arrayBuffer();
      console.log("blob", ab);
      const workbook = XLSX.read(ab);
      return workbook;
    }
  },
}
</script>
