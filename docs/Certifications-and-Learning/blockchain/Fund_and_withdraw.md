# Fund and Withdraw

https://youtu.be/gyMwXuJrbJQ?t=12859

How to send token, store token and get token out from the contract

msg.sender <-- Contract address of the person interacting with the contract
msg.value  <-- Value of token being sent by the msg.sender

## Simply speaking

### Fund
require(msg.value); in a function will fund the contract with specified amount of Token

### Withdraw
#### Using transfer
payable(msg.sender).transfer(address(this).balance);

Has gas limit of 2300, throws error and auto revert.

#### Using send
bool sendSuccess = payable(msg.sender).send(address(this).balance);
require(sendSuccess, "Send Fail");

Has gas limit of 2300, throws error if bool false and revert

#### Using call
This is a general function in solidity to call anyfunction without an abi. Hence withdraw can also be called using this.

Format is (bool, bytes) = address.call{value: anyFunction() }("");

Example for withdraw:
(bool callSuccess, bytes memory dataReturned) = payable(msg.sender).call{value: address(this).balance}("");
require(callSuccess, "Call Failed")

## Example code

```solidity
contract FundMe{
    
    // Since only the contract deployer should be able to withdraw funds, we do the following
    address public owner;
    
    constructor(){
        owner = msg.sender;
    }
    
    // Ideally modifiers should go to the end of the code
    modifier onlyOwner {
        require(msg.sender == owner,  "Sender is not owner!");
    }
    // First we create an array to store people who fund the contract
    // then a mapping to see who funded this contract with how much, we create a mapping
    // address to uint256 means that when we search, we search by address
    // if you wanted to search using amount, it would be uint256 => address
    // and the necessary change in the code
    // Lastly we define the function and update our array
    
    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    
    function fund() public payable {
        require(msg.value > 1e18, "Not enough ETH"); // 1e18 is 1 Eth
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] = msg.value;
    }
    
    function withdraw() public onlyOwner { // Modifier added here
        // Here we loop and set all the funder amount to 0
        // Since we are planning to withdraw all eth
        // and essentially amount for each funder will go to zero
        for(uint256 funderIndex=0; funderIndex < funders.length; funderIndex++){
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        
        // Reset the funders array
        funders = new address[](0);
        
        // Finally we withdraw using call. We can use transfer or send too.
        (bool callSuccess, bytes memory dataReturned) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call Failed")
    }
}
```
