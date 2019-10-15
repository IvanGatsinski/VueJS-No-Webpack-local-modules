const { name } = data;
export default Vue.component('Counter', {
    data() {
      return {
        count: 0,
        
      }
    },
    computed: {
        getName() {
            return name;
        }
    },
    template: '<button v-on:click="count++"> {{ getName }} you clicked me {{ count }} times.</button>'
  })