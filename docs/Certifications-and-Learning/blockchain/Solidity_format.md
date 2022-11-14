# Contents

- [Solidiy format](#Solidiy format)
    - [Overall Structure](#Solidiy format#Overall Structure)
    - [Solidity style guide](#Solidiy format#Solidity style guide)

# Solidiy format
Link for coding --> https://docs.soliditylang.org/en/v0.8.15/style-guide.html#introduction
Natspec Format for documenting code  --> https://docs.soliditylang.org/en/v0.8.15/natspec-format.html
To document code, we use natspec format in solidity

Order of Layout:
Layout contract elements in the following order:
    Pragma statements
    Import statements
    Interfaces
    Libraries
    Contracts

Inside each contract, library or interface, use the following order:
    Type declarations
    State variables
    Events
    Modifiers
    Functions

## Overall Structure
1. SPDX-License-Identifier: MIT
2. Imports
3. Errors
4. Interfaces
5. Libraries
6. Contracts
7. Project description lie @title @author etc
8. Type declarations
9. State variables
10. Events
11. Constructor
12. Modifiers
13. Functions:
    1. Each Function Description with @dev
    2. Each logic meaning with
14. Getter Functions

//////////////////
// Example Code //
//////////////////

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ContractInSameFolder.sol";
import "@FromGitHub";

/* Errors */
error ContractName__UpkeepNotNeeded(uint256 currentBalance, uint256 numPlayers, uint256 raffleState);
error ContractName__TransferFailed();      // Note the format. Its contractname then double underscroe then error name

/**@title A sample Raffle Contract
 * @author Manasvi Mohan Sharma
 * @notice This contract is for creating a sample raffle contract
 * @dev This implements the Chainlink VRF Version 2
 */

contract ContractName  {
    
    /* Type declarations */
    enum ChoicesType {
        OPEN,
        CALCULATING
    }
    /* State variables */
    // Variables
    uint64 private immutable i_subscriptionId;          // immutable has i_
    uint16 private constant REQUEST_CONFIRMATIONS = 3;  // constants are CAPITALISED_YES
    address private s_recentWinner;                     // state varibles are s_
    ChoicesType private s_raffleState;                  // declaring from the enum above

    /* Events */
    event RequestedRaffleWinner(uint256 indexed requestId);
    event WinnerPicked(address indexed player);

    /* Constructor */
    constructor(
        uint256 interval,
        uint256 entranceFee,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_interval = interval;
        i_entranceFee = entranceFee;
        s_raffleState = RaffleState.OPEN;
        s_lastTimeStamp = block.timestamp;
    }

    /* Functions */

    /**
     * @dev What this function is about
     * What this function takes in and spits out
     */
    function createContractFromImport() public payable {
        // Creating an instance of imported contract
        ContractInSameFolder intanceOfContract = new ContractInSameFolder();
        
        // Calling a function in the imported contract from the created instance
        instanceOfContract.functionName(inputs);
        
        // require(s_raffleState == RaffleState.OPEN, "Raffle is not open");
        if (s_raffleState != RaffleState.OPEN) {
            revert Raffle__RaffleNotOpen();
        }
        
        // Adding the contract address of user into s_player array
        s_players.push(payable(msg.sender));
        
        // Emit an event; and its description
        emit RaffleEnter(msg.sender);
    }


    /** Getter Functions */
    function getRaffleState() public view returns (RaffleState) {
        return s_raffleState;
    }
    function getRecentWinner() public view returns (address) {
        return s_recentWinner;
    }
}

```

## Solidity style guide

[Patrick's Video](https://youtu.be/gyMwXuJrbJQ?t=39609)
[Official Website](https://docs.soliditylang.org/en/v0.8.15/style-guide.html)

Example:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 < 0.9.0;

/// @title A simulator for trees
/// @author Larry A. Gardner
/// @notice You can use this contract for only the most basic simulation
/// @dev All function calls are currently implemented without side effects
/// @custom:experimental This is an experimental contract.
contract Tree {
    /// @notice Calculate tree age in years, rounded up, for live trees
    /// @dev The Alexandr N. Tetearing algorithm could increase precision
    /// @param rings The number of rings from dendrochronological sample
    /// @return Age in years, rounded up for partial years
    function age(uint256 rings) external virtual pure returns (uint256) {
        return rings + 1;
    }

    /// @notice Returns the amount of leaves the tree has.
    /// @dev Returns only a fixed number.
    function leaves() external virtual pure returns(uint256) {
        return 2;
    }
}

contract Plant {
    function leaves() external virtual pure returns(uint256) {
        return 3;
    }
}

contract KumquatTree is Tree, Plant {
    function age(uint256 rings) external override pure returns (uint256) {
        return rings + 2;
    }

    /// Return the amount of leaves that this specific kind of tree has
    /// @inheritdoc Tree
    function leaves() external override(Tree, Plant) pure returns(uint256) {
        return 3;
    }
}
```



