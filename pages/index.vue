<template>
  <div>

    <Carousel class="mt-4 h-75 ma-auto" :autoplay="4000" :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="slide in 5" :key="slide">
        <v-img @click="console.log('hi')" class="carousel__item" :src="`/img/p${slide}.jpg`"></v-img>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <div class="w-100 mt-6 pb-6" style="background-image: url('/bg.png');  background-repeat: repeat;">
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

export default {

  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      li: new LoremIpsum(),
      layout: "default",
    }
  },
}
</script>


