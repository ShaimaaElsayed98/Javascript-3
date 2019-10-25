// Q1

async function f(x,y) {

    console.log(x+y);

  }

  f(2,6).then();



  //Q3

  async function calculateSum( x ,y ){

    const sum = x + y;

    if( sum>8 ){

        console.log( "larger than 8")

    }
    else{

        throw new Error;

    }

}

calculateSum(2,6)

 

//Q4



async function writeDataToFile(){  

    await fetch('https://api.github.com/users/id'); 

    let data = data.map(function (x) {

    ( return x * 8;) 

    })};

writeDataToFile(data);
