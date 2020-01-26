//like object literal
module.exports = {
    funMath: function(){
        console.log("This is a math module");
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        //return the greater number
        if(num1 > num2) return num1;
        return num2;
        //you can equally drop the else and it will work also

    },
    smaller: function(num1, num2){
        //return the the smaller of the two parameters
        if(num1 < num2) return num1;
        return num2;        
    },

    division: function(number, by){
        if(by == 0){
            console.error('DO NOT DIVIDE BY 0 PLEASE!');
            return 0;
        }
        return number / by;
    },
    isEven: function(num){
        var res = num % 2;
        if (res == 0) return true;
        return false;
    
    }
};