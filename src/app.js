var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count < 1) {
      return "Number cannot be zero/negative";
    }
    for (var i = 0; i < count; i++) {
      chocolates.unshift(color);
    }
    return chocolates;
  }


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    var removed = [];
    if (number>chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number > 1) {
        for (var i = 0; i < number; i++) {
        removed[i]=chocolates.shift();
        }
        return removed;
    }
    else {
        return "Number cannot be zero/negative";
    }
    
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    var dispensed = [];
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number > 0) {
        for (var i = 0; i < number; i++) {
        dispensed[i]=chocolates.pop();
        }
        return dispensed;
    }
    else {
        return "Number cannot be zero/negative";
    }

}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    var color = [];
    if (number > chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else if (number > 0) {
    for (var i=0; i < number; i++){
    color[i] = chocolates.pop(color);
    }
    return color;
    }
    else {
        return "Number cannot be zero/negative";
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var numberOfChocolates = [];
    var colors = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    for (let i = 0; i < colors.length; i++) {
      var count = 0;
      for (let j = 0; j < chocolates.length; j++) {
        if (colors[i] == chocolates[j]) {
          count++;
        }
      }
      numberOfChocolates[i] = count;
    }
    return numberOfChocolates.filter(Number);
  }

//Progression 6: Sort chocolates based on count in each color. Return array of colors



//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, color, finalColor) {
    
    if (color == finalColor) {
      return "Can't replace the same chocolates";
    } else if (count > 0) {

      for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color) {
          chocolates[i] = finalColor;
        }
      }
      return chocolates;
    } else {
      return "Number cannot be zero/negative";
    }
  }

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor) {
    var res = [];
    if (currentColor == finalColor) return "Can't replace the same chocolates";
    else
      for (var i = chocolates.length; i >= 0; i--) {
        if (chocolates[i] == currentColor) {
          chocolates[i] = finalColor;
          count++;
        }
      }
    var count = chocolates.filter(function (x) {
      return x == finalColor;
    }).length;
    res = [count, chocolates];
    return res;
  }

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
