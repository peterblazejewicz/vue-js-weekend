new Vue({
  el: '#app',
  data: {
    title: 'Vue.js Input Bindings',
    checked: false,
    selected: [],
    chosenDino: '',
    single: '',
    message: '',
    dinos: [
      "Triceratops", "Velociraptor", "Tyrannosaurus"
    ],
    periods: [
      {
        name: 'Triassic',
        value: 1
      }, {
        name: 'Jurassic',
        value: 2
      }, {
        name: 'Cretaceous',
        value: 3
      }
    ]
  },
  methods: {
    addDinos: function () {
      this.count += this.amount;
    }
  }
});
