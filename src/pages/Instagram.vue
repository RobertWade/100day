<template>
  <Layout class="instagram">
      <v-text-field v-model="username">

      </v-text-field>
      <v-btn @click="getFollowers(username)">Senden</v-btn>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  data:()=>({
      username:'coding_rob',
  }),
  methods: {
    async getFollowers(username) {
        console.log(username)
      try {
        const { data } = await axios.get(
          `https://www.instagram.com/${username}/?__a=1`
        );
        let user = data.graphql.user;
        let posts = user.edge_owner_to_timeline_media.edges
        console.log(posts)
        let followers = user.edge_followed_by.count;
        let following = user.edge_follow.count;
        let fullname = user.full_name;
        let user_name = user.username;
        let profile_pic = user.profile_pic_url_hd;
        console.log(
          `${user_name} has ${followers} and follows ${following}. His full name is ${fullname}. His pic is ${profile_pic}`
        );
      } catch (error) {
        console.log(error);
        // throw Error(error);
      }
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.instagram {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-image: "../../images/background.jpg";
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
