function saturdayFun(param = "roller-skate") {
    return `This Saturday, I want to ${param}!`;
};

function mondayWork(param = "go to the office") {
    return `This Monday, I will ${param}.`;
};

function wrapAdjective(param1 = "*"){
    return function(param2 = "special") {
        return `You are ${param1}${param2}${param1}!`;
    };
};
