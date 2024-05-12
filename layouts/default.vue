<template>
  <div>
    <div class="bg-primary logo">
      <div class="pt-4 ml-6 mr-6 pb-4">
        <div class="d-flex flex-row justify-start align-center">
          <NuxtLink to="/">
            <div class="icon mr-4"></div>
          </NuxtLink>
          <!-- <v-icon color="white">mdi-face-woman</v-icon> -->
          <div class="icon-text">Center on Gender and Extreme Sentencing</div>
        </div>

        <v-divider
          class="border-opacity-50 mt-4 mb-4"
          color="white"
        ></v-divider>
        <div v-if="!show.projects">
          <span v-for="(c, i) of categories" :key="c">
            <v-btn
              :to="c.link.startsWith('/') ? `${c.link}` : undefined"
              color="textl"
              variant="text"
              :text="`${c.category}`"
              prepend-icon="mdi-square"
              @click="toggleShow(c.link)"
            />
          </span>
        </div>
        <div v-if="show.projects">
          <span>
            <v-btn
              color="textl"
              variant="text"
              text="<"
              @click="toggleShow('projects')"
            />
          </span>
          <span v-for="(c, i) of projects" :key="c">
            <v-btn
              :to="c.link.startsWith('/') ? `${c.link}` : undefined"
              color="textl"
              variant="text"
              :text="`${c.category}`"
              prepend-icon="mdi-square"
              @click="toggleShow(c.link)"
            />
          </span>
        </div>
      </div>
    </div>
    <slot site="dorkus"></slot>
  </div>
  <div class="bg-primary">
    <!-- <div class="footer-top"></div> -->
    <div
      class="text-textl ml-4 mr-4 pb-4 pt-4 d-flex flex-nowrap justify-space-between"
    >
      <span>© 2024 Center on Gender and Extreme Sentencing</span>
      <span>
        <!-- <v-icon>mdi-facebook</v-icon> -->
        <!-- <v-icon>mdi-twitter</v-icon> -->
        <!-- <v-icon>mdi-youtube</v-icon> -->
        <!-- <v-icon>mdi-linkedin</v-icon> -->
        <v-icon
          @click="
            () => openTab('https://www.instagram.com/genderjusticenow_cges/')
          "
          >mdi-instagram</v-icon
        >
        <v-icon @click="() => openTab('mailto:clh288@cornell.edu')"
          >mdi-email</v-icon
        >
      </span>
    </div>
  </div>
</template>

<script>
import siteData from "~/public/cges/localization.json";

export default {
  components: {},
  async mounted() {},
  data() {
    return {
      categories: siteData["Main Categories"],
      projects: siteData["Projects Categories"],
      show: { projects: false },
    };
  },
  methods: {
    // async parse_from_url(url) {
    //   const res = await fetch(url);
    //   if (!res.ok) throw new Error("fetch failed");
    //   const ab = await res.arrayBuffer();
    //   // console.log("blob", ab);
    //   const workbook = XLSX.read(ab);
    //   return workbook;
    // },
    toggleShow(name) {
      if (name in this.show) this.show[name] = !this.show[name]; // turn on new menu level
      // else for (const k of Object.keys(this.show)) this.show[k] = false; // turn all off
    },
    openTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&family=Source+Serif+4:opsz,wght@8..60,400;8..60,700&display=swap"); */
/* @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Sen:wght@400..800&display=swap");

html {
  font-family: "Sen", sans-serif;
  font-size: 16px;
}

.logo {
  font-family: "Raleway", serif;
  font-size: 40px;
  font-weight: 700;
  color: white;
}

.icon {
  background-image: url("/cges/img/logo.png");
  background-size: cover;
  width: 70px;
  height: 70px;
}

.icon-text {
  color: white;
}

.footer-top {
  background-image: url("/wave.svg");
  background-size: cover;
  width: 100%;
  height: 100px;
}
</style>
