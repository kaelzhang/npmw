
var flag = 0;


module.exports = {
    set flag(value){
        flag = value;
    },

    get flag(){
        return flag + 1;
    },

    getFlag: function() {
        return flag;
    }
};