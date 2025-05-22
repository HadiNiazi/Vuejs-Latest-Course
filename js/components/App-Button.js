export default {
    'template': `<button><slot /></button>`,

    created() {
        console.log('Component is created')
    }
}