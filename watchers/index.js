new Vue({
  el: '#card',
  data: {
    title: 'Dinosaurs',
    input: '',
    buttonText: 'Add Dinosaur',
    dinos: [
      "Tyrannosaurus",
      "Triceratops",
      "Stegosaurus"
    ]
  },
  computed: {
    buttonDisabled: function() {
      return this.input === '';
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
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
        .push(this.input);
      this.input = '';
    },
    removeDino: function (which) {
      debugger;
      this
        .dinos
        .splice(which, 1);
    }
  },
  watch: {
    input: _.debounce(function() {
      console.log(this.input);
    }, 250)
  }
});
