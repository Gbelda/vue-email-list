const app = new Vue({
    el: '#root',
    data: {
        emails: [],
        emailContainer: []
    },
    methods: {
        generateEmail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    let email = { email: response.data.response }
                    this.emailContainer.push(email)
                })
        }
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            this.generateEmail()
        }

        setTimeout(function () {
            app.emails.push(app.emailContainer)

        }, 500)



    },

})