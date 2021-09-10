<template>
  <div>
    <Post>
      <template v-slot:name>
         <h1>What is Lorem Ipsum?</h1>
      </template>
      <template v-slot:description>
        <p>
          What is Lorem Ipsum?Lorem Ipsum is simply dummy text
       </p>
     </template>
    </Post>
  </div>
</template>

<script>
import Post from "./components/Post";
export default {
  components: {
    Post
  }
};
</script>