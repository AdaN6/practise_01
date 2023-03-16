const app = Vue.createApp({
  //data , functions
  // template: '<h2> I am the template </h2>'

  data() {
    return {
      showBooks: true,
      url: 'https://adaneo6.com/',
      // title: "The Final Empire", 
      // author: "Brandon Sanderson",
      books: [
        {title: "The Final Empire", author: "Brandon Sanderson", img:'assets/1.jpg'}, 
        {title: 'the way of kings', author:'brandon sanderson', img:'assets/2.jpg'},
        {title: 'the final empire', author: 'brandon sanderson', img:'assets/3.jpg'},
      ],
      x: 0,
      y: 0,
    };
  },

  methods: {
    changeTitle(title) {
      // this.title = 'Words of Randiance'
      this.title = title;
    },
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    },
    handleEvent(e, data){
        console.log(e, e.type)
        if (data) {
            console.log(data)
        }
    },
    handleMousemove(e){
        this.x = e.offsetX
        this.y = e.offsetY
    }
  },
});

app.mount('#app')