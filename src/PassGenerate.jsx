import { useState } from "react";
import ReactSwitch from "react-switch";
function PassGenerate() {
  const [pass, setpass] = useState("");
  const [length, setLength] = useState(8);
  const [includeUpper, setUpper] = useState(true);
  const [includeNumber, setNumber] = useState(true);
  const [includeSpecial, setSpecial] = useState(true);

  const generatePassword = () => {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";

    let validpass = lowercase;
    if (includeUpper) {
      validpass += uppercase;
    }
    if (includeNumber) {
      validpass += numbers;
    }
    if (includeSpecial) {
      validpass += specialChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += validpass[Math.floor(Math.random() * validpass.length)];
      /**
             * password+= This part is adding something to the variable password. In other words, it's like saying password = password + something.

validpass[Math.floor(Math.random()validpass.length)]* This part is more complex:

Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive).

Math.floor(): Rounds down the random number to the nearest whole number.

Math.random()validpass.length*: Multiplies the random number by the length of the validpass array, giving a number between 0 and validpass.length-1.

Math.floor(Math.random()validpass.length)*: Ensures the number is an integer between 0 and validpass.length-1.

validpass[...]: Uses this integer to select a random element from the validpass array.

Putting it all together:

This line of code selects a random character from the validpass array and appends it to the password variable.
             */
    }
    console.log(password);
    setpass(password);
  };


  return (
    <div className="p-8 w-[80%] md:w-[55%] lg:w-[35%] mt-10 border shadow-2xl rounded-xl flex flex-col justify-between">
      <div className="flex mb-2 items-center justify-between">
        <label htmlFor="length" className="mr-4 text-xl">
          PASSWORD LENGTH :
        </label>
        <input
          id="length"
          value={length}
          onChange={(e)=>{setLength(e.target.value)
          }}
          className="rounded w-12 pl-2 text-black"
          type="number"
        />
      </div>
      <div className="flex items-center mb-2 justify-between">
        <label htmlFor="upper" className="cursor-pointer text-xl mr-4">
          INCLUDE UPPERCASE :
        </label>
        <ReactSwitch 
        id="upper" 
        height={20} 
        width={40} 
        handleDiameter={18}
        checked={includeUpper}
        onChange={()=>{setUpper(!includeUpper)}}
        />
      </div>

      <div className="flex items-center mb-2 justify-between">
        <label htmlFor="number" className="text-xl mr-4">
          INCLUDE NUMBER :
        </label>
        <ReactSwitch 
        id="number"
        height={20} 
        width={40} 
        handleDiameter={18} 
        checked={includeNumber}
        onChange={()=>setNumber(!includeNumber)}
        />
      </div>

      <div className="flex items-center mb-4 justify-between">
        <label htmlFor="char" className="text-xl mr-4">
          INCLUDE SPECIAL CHARACTERS :
        </label>
        <ReactSwitch 
        id="char"
        height={20} 
        width={40} 
        handleDiameter={18} 
        checked={includeSpecial}
        onChange={()=>setSpecial(!includeSpecial)}
        />
      </div>
      <button className="text-xl border rounded p-2 bg-gradient-to-r from-gray-800 to-purple-300 font-bold "
      onClick={generatePassword}>
        GENERATE PASSWORD
      </button>
      <h1 className="flex items-center justify-center font-bold text-xl mt-4">{pass}</h1>
    </div>
  );
}

export default PassGenerate;
