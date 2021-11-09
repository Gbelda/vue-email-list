const app = new Vue({
    el: '#root',
    data: {
        generatedEmail: '',
        emails: []
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    generateEmail = { email: response.data.response }
                    this.emails.push(generateEmail)
                })
        }
    }

})