const numbers = [16, -37, 54, -4, 72, -56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let sum = 0
let count = 0
for ( let i = 0; i < numbers.length; i++ ) {
    if  (numbers[i] > 0) {
        sum += numbers[i]
        count++
    }
}

let maxElement = numbers[0]
let maxIndex = 0
for (let i = 1; i < numbers.length; i++) {
    if  (numbers[i] > maxElement) {
        maxElement = numbers[i]
        maxIndex = i
    }
}

let counts = 0 
for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        counts ++
    }
}

let count1 = 0;
for ( let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 0 && numbers[i] % 2 !== 0) {
        count1++
    }
}

let count2 = 0;
for ( let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 0 && numbers[i] % 2 === 0) {
        count2++
    }
}

let count3 = 0 
for ( let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 0 && numbers[i] % 2 === 0) {
        count3 += numbers[i]
    }
}

let count4 = 0 
for ( let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 0 && numbers[i] % 2 !== 0) {
        count4 += numbers[i]
    }
}

let product = 1
for ( let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 0) {
        product *= numbers[i]
    }
}

alert('1. Max element is  ' + maxElement +  '\n2. Sum positive elements is ' + sum + ' Count positive elements is '+  count + '\n3. Count negative elements is ' + counts + '\n4. Count of odd positive elements is ' + count1 + '\n5. Count of paired positive elements is ' + count2 + '\n6. Sum  positive elements is  ' + count3 + '\n7.  Sum of odd positive elements is ' + count4 + '\n8. Product of positive elements is ' + product) 
