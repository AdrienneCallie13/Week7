// defining component  globally
Vue.component('greeting-card', {
    template: '<p> Hello Adrienne! </p>'
})

// The first vue instance
new Vue({
    el: '#app1'
})

// The second vue instance
new Vue({
    el: '#app2'
})
