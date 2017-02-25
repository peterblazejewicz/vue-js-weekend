var card = new Vue({
  el: '#cards',
  data: {
    title: 'Dinosaurs',
    dinos: [
      {
        text: "Velociraptor",
        weight: "15 kg",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Velociraptor_Wyoming_Dinosaur_Center_White_Background.jpg/500px-Velociraptor_Wyoming_Dinosaur_Center_White_Background.jpg'
      }, {
        text: "triceratops",
        weight: "6,000 kg",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Journal.pone.0138352.g001A.jpg/500px-Journal.pone.0138352.g001A.jpg'
      }, {
        text: "Stegosaurus",
        weight: "2,500 kg",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Journal.pone.0138352.g001A.jpg/500px-Journal.pone.0138352.g001A.jpg'
      }
    ]
  },
  filters: {
    capitalize: function (value) {
      if (!value) 
        return '';
      value = value.toString();
      return value
        .charAt(0)
        .toUpperCase() + value.slice(1);
    },
    undercase: function(value) {
      if(!value) return '';
      value = value.toString();
      return value.toLowerCase();
    },
    url: function(value) {
      if(!value) return '';
      return 'https://en.wikipedia.org/wiki/' + value;
    }
  }

});
