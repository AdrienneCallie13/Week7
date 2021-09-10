Vue.component('post', {
    props: ['title'],
    template: `
      <div>
        <h3>{{ title }}</h3>
      </div>
    `
})

new Vue({
    el: "#app"
})