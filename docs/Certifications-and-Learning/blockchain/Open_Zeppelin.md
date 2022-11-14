# Contents

- [Open Zeppelin](#Open Zeppelin)
- [Introduction](#Introduction)
- [Links](#Links)
- [Theory](#Theory)
    - [Extending Contracts](#Theory#Extending Contracts)
    - [Overriding](#Theory#Overriding)
    - [Calling super](#Theory#Calling super)
    - [Using Hooks](#Theory#Using Hooks)
        - [Rules of Hooks](#Theory#Using Hooks#Rules of Hooks)
    - [Access Control](#Theory#Access Control)
        - [Ownable](#Theory#Access Control#Ownable)
        - [Admin basec access control](#Theory#Access Control#Admin basec access control)
        - [Access control in the code itself](#Theory#Access Control#Access control in the code itself)
        - [Querying Privileged Accounts](#Theory#Access Control#Querying Privileged Accounts)
        - [Delayed operation](#Theory#Access Control#Delayed operation)
            - [Why needed?](#Theory#Access Control#Delayed operation#Why needed?)
            - [Using TimelockController](#Theory#Access Control#Delayed operation#Using TimelockController)
            - [Concept of minimum delay](#Theory#Access Control#Delayed operation#Concept of minimum delay)

# Open Zeppelin and subpages

Tokens:
[ERC20](ERC20.md)
[ERC721](ERC721.md)
[ERC777](ERC777.md)
[ERC1155](ERC1155.md)

[Governance](Governance.md)

# Introduction
The standard for secure blockchain applications
OpenZeppelin provides security products to build, automate, and operate decentralized applications. We also protect leading organizations by performing security audits on their systems and products.

# Links
Main Website --> https://www.openzeppelin.com/
Auto code make simple --> https://docs.openzeppelin.com/contracts/4.x/wizard
If you find bug, report here and win money -- > https://immunefi.com/bounty/openzeppelin/

# Theory

## Extending Contracts
Most of the OpenZeppelin Contracts are expected to be used via inheritance
contract MyToken is ERC20

## Overriding
Inheritance is often used to add the parent contract’s functionality to your own contract, but that’s not all it can do. You can also change how some parts of the parent behave using overrides.

The old revokeRole is then replaced by our override, and any calls to it will immediately revert. We cannot remove the function from the contract, but reverting on all calls is good enough.

For example, imagine you want to change AccessControl so that revokeRole can no longer be called

```solidity
// contracts/ModifiedAccessControl.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract ModifiedAccessControl is AccessControl {
    // Override the revokeRole function
    function revokeRole(bytes32, address) public override {
        revert("ModifiedAccessControl: cannot revoke roles");
    }
}
```

## Calling super
Sometimes you want to extend a parent’s behavior, instead of outright changing it to something else. This is where super comes in.
The super keyword will let you call functions defined in a parent contract, even if they are overridden. This mechanism can be used to add additional checks to a function, emit events, or otherwise add functionality as you see fit.

```solidity
// contracts/ModifiedAccessControl.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract ModifiedAccessControl is AccessControl {
    function revokeRole(bytes32 role, address account) public override {
        require(
            role != DEFAULT_ADMIN_ROLE,
            "ModifiedAccessControl: cannot revoke default admin role"
        );

        super.revokeRole(role, account);
    }
}
```

## Using Hooks
Sometimes, in order to extend a parent contract you will need to override multiple related functions, which leads to code duplication and increased likelihood of bugs.
Hooks are simply functions that are called before or after some action takes place. They provide a centralized point to hook into and extend the original behavior.

### Rules of Hooks
1. Whenever you override a parent’s hook, re-apply the virtual attribute to the hook.
2. Always call the parent’s hook in your override using super. 

```solidity
contract MyToken is ERC20 {
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal virtual override // Add virtual here!
    {
        super._beforeTokenTransfer(from, to, amount); // Call parent hook
        ...
    }
}
```
## Access Control

### Ownable
OpenZeppelin Contracts provides Ownable for implementing ownership in your contracts.

```solidity
// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    function normalThing() public {
        // anyone can call this normalThing()
    }

    function specialThing() public onlyOwner {
        // only the owner can call specialThing()!
    }
}
```

### Admin basec access control
OpenZeppelin Contracts provides AccessControl for implementing role-based access control.
Below we are creating an admin, who can later define minter or burner

```solidity
// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor() ERC20("MyToken", "TKN") {
        // Grant the contract deployer the default admin role: it will be able
        // to grant and revoke any roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyRole(BURNER_ROLE) {
        _burn(from, amount);
    }
}
```

### Access control in the code itself
Here we do not create admin, but define minter burner in the code itself. (Might be usefull at some place, but above is better)

```solidty
// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor(address minter, address burner) ERC20("MyToken", "TKN") {
        _setupRole(MINTER_ROLE, minter);
        _setupRole(BURNER_ROLE, burner);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyRole(BURNER_ROLE) {
        _burn(from, amount);
    }
}
```

### Querying Privileged Accounts
Because accounts might grant and revoke roles dynamically, it is not always possible to determine which accounts hold a particular role. This is important as it allows to prove certain properties about a system, such as that an administrative account is a multisig or a DAO, or that a certain role has been removed from all users, effectively disabling any associated functionality.

Under the hood, AccessControl uses EnumerableSet, a more powerful variant of Solidity’s mapping type, which allows for key enumeration. getRoleMemberCount can be used to retrieve the number of accounts that have a particular role, and getRoleMember can then be called to get the address of each of these accounts.

```javascript
const minterCount = await myToken.getRoleMemberCount(MINTER_ROLE);

const members = [];
for (let i = 0; i < minterCount; ++i) {
    members.push(await myToken.getRoleMember(MINTER_ROLE, i));
}
```
### Delayed operation
#### Why needed?
Access control is essential to prevent unauthorized access to critical functions. These functions may be used to mint tokens, freeze transfers or perform an upgrade that completely changes the smart contract logic. While Ownable and AccessControl can prevent unauthorized access, they do not address the issue of a misbehaving administrator attacking their own system to the prejudice of their users.

This is the issue the TimelockController is addressing.

The TimelockController is a proxy that is governed by proposers and executors. When set as the owner/admin/controller of a smart contract, it ensures that whichever maintenance operation is ordered by the proposers is subject to a delay. This delay protects the users of the smart contract by giving them time to review the maintenance operation and exit the system if they consider it is in their best interest to do so.

#### Using TimelockController
By default, the address that deployed the TimelockController gets administration privileges over the timelock.
1. The first step in configuring the TimelockController is to assign at least one proposer and one executor.
2. Roles are managed using the AccessControl interface and the bytes32 values for each role are accessible through the ADMIN_ROLE, PROPOSER_ROLE and EXECUTOR_ROLE constants.
3. There is an additional feature built on top of AccessControl: giving the executor role to address(0) opens access to anyone to execute a proposal once the timelock has expired. This feature, while useful, should be used with caution.
4. At this point, with both a proposer and an executor assigned, the timelock can perform operations.
5. An optional next step is for the deployer to renounce its administrative privileges and leave the timelock self-administered. If the deployer decides to do so, all further maintenance, including assigning new proposers/schedulers or changing the timelock duration will have to follow the timelock workflow. This links the governance of the timelock to the governance of contracts attached to the timelock, and enforce a delay on timelock maintenance operations.
6. With both the proposer and executor roles assigned and the timelock in charge of its own administration, you can now transfer the ownership/control of any contract to the timelock.

#### Concept of minimum delay
Operations executed by the TimelockController are not subject to a fixed delay but rather a minimum delay. Some major updates might call for a longer delay. For example, if a delay of just a few days might be sufficient for users to audit a minting operation, it makes sense to use a delay of a few weeks, or even a few months, when scheduling a smart contract upgrade.

The minimum delay (accessible through the getMinDelay method) can be updated by calling the updateDelay function. Bear in mind that access to this function is only accessible by the timelock itself, meaning this maintenance operation has to go through the timelock itself.\
