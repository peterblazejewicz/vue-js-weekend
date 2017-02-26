var card = new Vue({
  el: '#app',
  name: 'Dinosaurs',
  data: {
    title: 'Dinosaurs',
    total: 0,
    dinos: [
      {
        name: "Tyrannosaurus",
        quantity: 5
      }, {
        name: "Triceratops",
        quantity: 4
      }, {
        name: "Stegosaurus",
        quantity: 6
      }
    ]
  },
  methods: {
    incrementTotal(amount) {
      this.total += amount;
    }
  },
  components: {
    'dino-counter': {
      template: '#dino-counter',
      props: [
        'initialQuantity', 'name'
      ],
      data() {
        this.$emit('increment', this.initialQuantity);
        return {quantity: this.initialQuantity}
      },
      methods: {
        increment() {
          this.quantity += 1;
          this.$emit('increment', 1);
        }
      }
    }
  }
});
