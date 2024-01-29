<template>
  <div>
    <div class="bg-primary logo">


      <div class="pt-4 ml-6 mr-6">
        <div class="d-flex flex-row justify-start align-center">
          <NuxtLink to="/">
            <div class="icon mr-4"></div>
          </NuxtLink> <!-- <v-icon color="white">mdi-face-woman</v-icon> -->
          <div class="icon-text">Center on Gender and Extreme Sentencing</div>
        </div>

        <v-divider class="border-opacity-50 mt-4 mb-4" color="white"></v-divider>
        <div class="pb-4">
          <v-btn to="/women" color="textl" variant="text">
            Women On Death Row
          </v-btn>
          &#x25A0;
          <v-btn to="/projects" color="textl" variant="text">
            Projects
          </v-btn>
          &#x25A0;
          <v-btn to="/resources" color="textl" variant="text">
            Resource Hub
          </v-btn>
          &#x25A0;
          <v-btn to="/events-news" color="textl" variant="text">
            Events & News
          </v-btn>
          &#x25A0;
          <v-btn to="/about" color="textl" variant="text">
            About
          </v-btn>
        </div>

      </div>
    </div>
    <slot />
  </div>
  <div class="bg-primary">
    <div class="footer-tosp"></div>
    <div class="text-textl ml-4 mr-4 pb-4 d-flex flex-nowrap justify-space-between">
      <span>© 2024 Center on Gender and Extreme Sentencing</span>
      <span>
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon>
        <v-icon>mdi-youtube</v-icon>
        <v-icon>mdi-linkedin</v-icon>
        <v-icon>mdi-email</v-icon>
      </span>
    </div>

  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&family=Source+Serif+4:opsz,wght@8..60,400;8..60,700&display=swap');

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

.logo {
  font-family: 'Source Serif 4', serif;
  font-size: 28px;
  font-weight: 700;
  color: white;
}

.icon {
  background-image: url('/cges/img/logo.png');
  background-size: cover;
  width: 70px;
  height: 70px;
}

.icon-text {
  color: white;
}

.footer-top {
  background-image: url('/wave.svg');
  background-size: cover;
  width: 100%;
  height: 100px;
}
</style>
