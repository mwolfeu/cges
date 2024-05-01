<template>
  <div class="d-flex flex-column justify-center align-center">
    <!-- <div>
      <v-card class="ma-6" width="600">
        <v-card-item>
          <v-card-title>Mission</v-card-title>
          <!- - <v-card-subtitle>This is a subtitle</v-card-subtitle> - ->
        </v-card-item>
        <v-card-text>
          <v-img class="ma-4"
            src="https://www.washingtoncountycda.org/wp-content/uploads/2018/08/partner-orgs.jpg"></v-img>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
          optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
          dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
          et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
          ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </v-card-text>
      </v-card>
    </div> -->
    <div class="w-100 mt-6 pb-6">
      <div
        v-for="c of content"
        :key="c"
        class="w-100 d-flex pt-4"
        :style="`background-color:${c.BgColor}; color:${c.FgColor};`"
      >
        <div class="d-flex w-75 justify-center ma-auto">
          <div v-if="c.Type == 'title'" style="font-size: 40px" class="mb-8">
            {{ unquote(c.Section) }}
          </div>
          <div v-if="c.Type == 'normal'" style="font-size: 20px" class="mb-4">
            {{ unquote(c.Section) }}
          </div>
          <div
            v-if="c.Type == 'picture'"
            style="font-size: 20px"
            class="mb-4 w-25"
          >
            <v-img :src="`/cges/img/${c.Section}`"> </v-img>
          </div>
          <div v-if="c.Type == 'space'" class="mb-16" />
        </div>
      </div>
    </div>

    <!-- <div class="bg-secondary" style="padding: 30px 1000px;">
      <v-card width="600">
        <v-card-item>
          <v-card-title>Vision</v-card-title>
          <!- - <v-card-subtitle>This is a subtitle</v-card-subtitle> - ->
        </v-card-item>
        <v-card-text>
          <v-img class="ma-4" style="height:100px; width:100px; float:right;"
            src="https://www.mbot.com/wp-content/uploads/2016/11/icon-advocacy.png"></v-img>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
          corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
          expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </v-card-text>
      </v-card>
    </div> -->

    <!-- <div>
      <v-card class="ma-6" width="600">
        <v-card-item>
          <v-card-title>Team</v-card-title>
          <!- - <v-card-subtitle>This is a subtitle</v-card-subtitle> - ->
        </v-card-item>
        <v-card-text>
          <v-img class="ma-4"
            src="https://thumbs.dreamstime.com/z/business-people-board-meeting-modern-office-sitting-round-table-133549878.jpg?w=992"></v-img>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </v-card-text>
      </v-card>
    </div> -->
  </div>
</template>
<script>
import * as XLSX from "xlsx/xlsx.mjs";

export default {
  components: {},
  async mounted() {
    const wb = await this.parse_from_url("/cges/content.xlsx");
    this.content = XLSX.utils.sheet_to_json(wb.Sheets["About"]);
  },
  data() {
    return {
      content: [],
    };
  },
  methods: {
    unquote(str) {
      if (
        (str.startsWith('"') && str.endsWith('"')) ||
        (str.startsWith("'") && str.endsWith("'"))
      ) {
        // Check if the string starts and ends with the same quote character
        return str.slice(1, -1); // Return the string without the first and last character
      } else {
        // If the string doesn't start and end with the same quote character, return the original string
        return str;
      }
    },
    async parse_from_url(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("fetch failed");
      const ab = await res.arrayBuffer();
      console.log("blob", ab);
      const workbook = XLSX.read(ab);
      return workbook;
    },
  },
};
</script>
