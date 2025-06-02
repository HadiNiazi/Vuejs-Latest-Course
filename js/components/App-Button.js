export default {

    // props: ['message'],

     props: {
        message: {
            type: String,
            default: 'Default Msg'
        }
     },

    'template': `<button @click="sendDataToParent">{{ message }}</button>`,

    created() {
        console.log(this.message)
    },

    methods: {
        
        sendDataToParent() {
            this.$emit('data', 'nice to see it');
        }

    }
}