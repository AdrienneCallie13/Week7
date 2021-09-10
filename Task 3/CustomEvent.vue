<template>
  <form :class="this.errors ? 'errors' : false">
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="name" required @invalid="invalidateForm" />
      <span class="error-message">Required</span>
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        type="email"
        v-model="email"
        required
        @invalid="invalidateForm"
      />
      <span class="error-message">Required</span>
    </div>
    <div>
      <label for="text">Comment:</label>
      <textarea id="text" v-model="text"></textarea>
    </div>
    <div>
      <input type="submit" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: false
    };
  },
  methods: {
    invalidateForm() {
      this.errors = true;
    }
  }
};
</script>

<style lang="scss">
body {
  padding: 2em;
}
label {
  display: block;
}
div + div {
  margin-top: 1em;
}
.error-message {
  display: none;
  color: red;
}

/* ✨ The magic ✨ */
form.errors {
  :invalid {
    border-color: red;
  }
  .error-message {
    display: block;
  }
}
</style>
