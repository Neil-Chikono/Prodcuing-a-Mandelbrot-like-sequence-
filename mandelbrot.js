// this code generates a mandelbrot like sequence from an input array 
// it mimics the equation ( z = z² + c ) but with integer values


function mandelbrotLikeSequence(originalArray, iterations = 16) {

// this array will collect each generated value and will be retunred at the end

const result = []; 

// "z" is the running value in the fractal formula
let z = originalArray[0]; 

// Loop up to `iterations` times, but never longer than the input array.
for ( let i = 0; i < iterations && i < orginalArray.length; i++) {


  const c = originalArray[i];

// The core fractal step:  z = z² + c
// - Math.floor(...) : rounds down to an integer
// - % 20 : keeps results in range 0–19 so numbers stay readable
   z = Math.floor(Math.abs(z * z + c)) % 20;


// Store this iteration's computed value into the result array
    result.push(z);


if (i % 4 === 0 && i > 0) {
            z = originalArray[(i + 1) % originalArray.length];


}


} 

  return result;

}

  const randomarry = Array.from({ length: 16 }, () => Math.floor(Math.random() * 127));




  const myArray = [63, 61, 65, 70, 65, 68, 70, 80, 71, 73, 61, 59, 68, 70, 73, 63, 68, 66];


document.getElementById("output").innerHTML = mandelbrotLikeSequence(myArray);
