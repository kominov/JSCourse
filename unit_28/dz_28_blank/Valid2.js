class Valid2 extends Valid {
    constructor(email, password, passwordError = "", emailError = "") {
        super(email, password)
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validateNew() {
        super.validate();
        if (this.email.length == 0) {
            this.isValid = false;
            this.emailError = 'email is empty';
        }
        if (this.password.length < 6) {
            this.isValid = false;
            this.passwordError = 'min length 6';
        }
    }
}