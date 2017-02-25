new Vue({
  el: '#card',
  data: {
    title: 'Dinosaurs',
    input: '',
    speciesUpdated: 0,
    dinosUpdated: 0,
    dinos: [
      {
        text: "Tyrannosaurus",
        quantity: 5
      }, {
        text: "Triceratops",
        quantity: 3
      }, {
        text: "Stegosaurus",
        quantity: 6
      }
    ]
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    addDino: function (event) {
      if (!this.input)
        return;
      this
        .dinos
        .push({text: this.input, quantity: 1});
      this.input = '';

    },
    removeDino: function (which) {
      debugger;
      this
        .dinos
        .splice(which, 1);
    }
  },
  computed: {
    totalDinosaurs: function() {
      this.dinosUpdated += 1;
      var sum = 0;
      for(var i in this.dinos) {
        sum += this.dinos[i].quantity;
      }
      return sum;
    },
    totalSpecies: function() {
      this.speciesUpdated += 1;
      return this.dinos.length;
    }
  }
});
