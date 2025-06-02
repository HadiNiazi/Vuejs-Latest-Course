import AppButton from './App-Button.js';

export default {

        components: {
            'app-button': AppButton
        },

        data() {

            return {

                message: 'Welcome to the Vuejs'

            }

        },

        methods: {
            
            recievedChilCompData(data) {
                console.log('Getting data: '+ data)
            }

        }

    }