# Inheritance and deploying other contracts

https://youtu.be/gyMwXuJrbJQ?t=12636

## Terms

is       --> Use this to make child
virtual  --> Allow function in the parent contract to be changed in child contract
override --> Use this in the child contract to change the function

## Inheritance Example
import "./ImportedContract.sol";

contract MyContract is ImportedContract {
    
    function functionInContract(uint256 _someInput) public override { // At the same time, in the ImportedContract, set the functionInContract as virtual
        someVariable = _someInput +5;
    }
}

## Import and deploy other contracts

import "./ImportedContract.sol";

contract MyContract {
    
    ImportedContract[] public importedContractArray;
    
    function createImportedContract() public {
        ImportedContract instanceOfImportedContract = new ImportedContract();
        importedContractArray.push(instanceOfImportedContract);
    }
}

## Run function from a certain copy of deployed contract

import "./ImportedContract.sol";

contract MyContract {
    
    ImportedContract[] public importedContractArray;
    
    function createImportedContract() public {
        ImportedContract instanceOfImportedContract = new ImportedContract();
        importedContractArray.push(instanceOfImportedContract);
    }
    
    function interactWithFunctions(uint256 _someInputIndexNumber) public view returns(something) {
        ImportedContract instanceOfImportedContract = importedContractArray[_someInputIndexNumber]
        return instanceOfImportedContract.afunctionInTheImportedContract();
    }
    
}
