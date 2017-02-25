new Vue({
  el: '#card',
  data: {
    title: 'Style Bindings',
    sizeToggle: false,
    outline: false,
    block: false,
    disabled: false,
    fontColor: "#000000",
    backgroundColor: '#563d7c',
    range: 50
  },
  computed: {
    styles: function () {
      return {
        color: this.fontColor,
        backgroundColor: this.backgroundColor,
        transform: 'translateX(-' + this.range + '%)'
      }
    }
  }
});
