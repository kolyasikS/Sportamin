const User = {
    email: null,

    isAuth: function() {
        return this.email ? true : false;
    },

    setAuth: function(state) {
        this.email = state || null;
    },
}
export default User;