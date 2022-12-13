const {createApp} = Vue

const Contact = {
    data() {
        return {
            error: ''
        }
    },

    methods: {
        validation() {
            const form = document.myForm;
            const Name = form.Name;
            const Email = form.Email;
            const Subject = form.Subject;
            const Message = form.Message;

            if (!validateName(Name)) {
                this.error = 'name cannot be empty'
            } else if (!validateEmail(Email)) {
                this.error = 'email is not valid'
            } else if (!validateSubject(Subject)) {
                this.error = 'subject cannot be empty'
            } else if (!validateMessage(Message)) {
                this.error = 'message cannot be empty'
            } else {
                this.error = ''
            }
        }
    }
}

function validateName(name) {
    const regEx = new RegExp(/^[a-zA-Z]{2,}$/)

    return regEx.test(name);
}

function validateEmail(email) {
    const regEx = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    return regEx.test(email);
}

function validateSubject(subject) {
    const regEx = new RegExp(/^[a-zA-Z0-9]{2,}$/)

    return regEx.test(subject);
}

function validateMessage(message) {
    const regEx = new RegExp(/^[a-zA-Z0-9]{1,}$/)

    return regEx.test(message);
}

createApp(Contact).mount("#app")

