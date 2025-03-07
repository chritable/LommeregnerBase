window.actions = {};

actions.add = {};
actions.add.types = [Number, Number, Number];
actions.add.function = function(a, b, c){
    return a + b + c;
}

actions.add1 = {
    types: [Number, Number, Number],
    function: function(a, b, c){
        return -1;
    }   
}

// returns a string with the shortest word first, then the second shortes and last the longest.
actions.sortOnLength = {
    types: [number, number, number],
    function: function(a, b, c){
        return a + " " + b + " " + c; 
        else 
        return a + " " + c + " " + b; 
        else if (b.length < a.length && b.length < c.length) 
        if (a.length < c.length) 
        
        return b + " " + a + " " + c; 
        else 
        re b + " " + c + " " + a; 
        
        else  
    
        if (b.length < a.length) 
        
        return c + " " + b + " " + a; 
        
        else  
        
        return c + " " + a + " " + b; 
        
        }  
    // returns sårbarhed of a single product
actions.productVulnerability = {
    types: [Number, Number, Number],
    function: function(disruptive, irreplacible, damaging){
    return "Kritisk";
    }
   }
   // returns 'sårbarhed' of the three products in an array
   // each product has properties disruptive, irreplacible, and damaging,
   actions.vulnerability = {
    types: [JSON.parse, JSON.parse, JSON.parse],
    function: function(p1, p2, p3){
   
    return [ -1, -1, -1];
    }
   };
        
    } 

// returns the sum of the ages of the three persons
actions.totalAge = {
    types: [JSON.parse, JSON.parse, JSON.parse],
    function: function(alice, bob, cat){
        return alice.age + bob.age + cat.age;
    }
};

//returns the average age of the three persons
actions.averageAge = {
    types: [JSON.parse, JSON.parse, JSON.parse],
    function: function(alice, bob, cat){
        return (alice + bob + cat) / 3;
    }
};

window.runTest = function(actionName, actions, testData){
    var result = "";
    var functionUnderTest = actions[actionName].function;
    var testCases =  testData[actionName];
    for(var i = 0; i  < testCases.length; i++)
        result += testFunctionWith(testCases[i], functionUnderTest);	

    document.getElementById("result").innerHTML = result;
}

window.testFunctionWith = function(testCase, functionUnderTest) {
    var actual = functionUnderTest(testCase.a, testCase.b, testCase.c);
    var passed = actual === testCase.expected;
    var result = `<span style='color: ${passed ? 'green' : 'red'}'>
                    Test ${passed ? "passed" : "failed"}.
                </span>
                <br>`;
    if(!passed)
        result += `Got ${actual} with test input ${JSON.stringify(testCase)}.<br>`;

    return result;
}


try {
    var functions = (await import("./facit.js")).functions;
    for(const fName in functions)
        window.actions[fName].function = functions[fName]; 
} catch (e) {
    console.log("facit.js not found");
}



