# Contents

- [Solidity](#Solidity)
- [Best Practices and workflow](#Best Practices and workflow)
- [Terms and Concepts](#Terms and Concepts)
    - [library](#Terms and Concepts#library)
    - [interface](#Terms and Concepts#interface)
    - [modifier](#Terms and Concepts#modifier)
    - [constant](#Terms and Concepts#constant)
    - [immutable](#Terms and Concepts#immutable)
    - [error and revert](#Terms and Concepts#error and revert)
    - [receive() and fallback()](#Terms and Concepts#receive() and fallback())

# Solidity

# Best Practices and workflow

[Solidity_format](Solidity_format.md)
[Inheritance_Child and deploying other contracts from a contract](Inheritance_Child.md)
[Fund_and_withdraw](Fund_and_withdraw.md)

# Terms and Concepts

View functions cost gas if called from contract !!! wierd...

## library
Like a smart contract but only for calculations, can not send ethers etc. SafeMath was an example, was used a lot in the past by people. Now 0.8 solidity has it inbuilt.

## interface 
contract1 is contract2: This way one, contract1 inherits all features of contract2

contructor: <-- This is a special function like receive and fallback
setting up owner, something like a global variable maybe?? Check...

## modifier
added to any function, and the code runs only if conditions in modifier is met

## constant
https://youtu.be/gyMwXuJrbJQ?t=18430

Saves in bytecode of contract and not in storage
Hence it saves gas fee
written in CAPITAL_LETTERS
If some variable does not change
Exmaple:
uint256 public constant ANY_CONSTANT_THING = 50

## immutable
https://youtu.be/gyMwXuJrbJQ?t=18654

Saves in bytecode of contract and not in storage
Hence it saves gas fee
written with i_
variable in constructor can use it.

Example
address public immutable i_owner
constructor(){
    i_owner = msg.sender
}

## error and revert
https://youtu.be/gyMwXuJrbJQ?t=18781

In the require statements, we save the error message as string, which cost gas, so instead we use error now. This is new and better way.
Before the contract, below pragma, write the following:
error NotOwner();
Then inside the contract, at any function, write
if(msg.sender != i_owner) { revert NotOwner(); } <-- New method, does not cost gas
_;
Old method was -->  require(msg.sender == i_owner, "Sender is not owner");
 
## receive() and fallback()

https://youtu.be/gyMwXuJrbJQ?t=18947

If someone interacts with with contract without running specific functions in the contract then: 

If there is data send while interacting  --> fallback() is called
If no data and there is receive function --> receive() is called
if no data and no receive function       --> fallback() is called
if no data, no receive and no fallback   --> ERROR

If someone sends ETH to our contract, and we wish to run a function, we usually put it under receive or fallback. Meaning, if there is no data sent, EVM looks for receive function, if its there good, else it goes to fallback function. If data is send and not empty, fallback function is called. 
Wrapping each function in receive and fallback seems like a good practice.
They are special functions in solidity, just like constructor
