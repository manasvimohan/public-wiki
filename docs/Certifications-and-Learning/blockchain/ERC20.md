# Contents

- [ERC20](#ERC20)
- [Links](#Links)
- [Theory](#Theory)
    - [Constructing an ERC20 Token Contract](#Theory#Constructing an ERC20 Token Contract)
        - [A Note on decimals](#Theory#Constructing an ERC20 Token Contract#A Note on decimals)
        - [Preset ERC20 contract](#Theory#Constructing an ERC20 Token Contract#Preset ERC20 contract)
    - [Creating ERC20 Supply](#Theory#Creating ERC20 Supply)
        - [Fixed Supply](#Theory#Creating ERC20 Supply#Fixed Supply)
        - [Rewarding Miners](#Theory#Creating ERC20 Supply#Rewarding Miners)
        - [Modularizing the Mechanism](#Theory#Creating ERC20 Supply#Modularizing the Mechanism)
        - [Automating the Reward](#Theory#Creating ERC20 Supply#Automating the Reward)

# ERC20

# Links
Theory --> https://docs.openzeppelin.com/contracts/4.x/erc20
Supply --> https://docs.openzeppelin.com/contracts/4.x/erc20-supply

# Theory

An ERC20 token contract keeps track of fungible tokens: any one token is exactly equal to any other token; no tokens have special rights or behavior associated with them. This makes ERC20 tokens useful for things like a medium of exchange currency, voting rights, staking, and more.

## Constructing an ERC20 Token Contract

Using Contracts, we can easily create our own ERC20 token contract, which will be used to track Gold (GLD), an internal currency in a hypothetical game.

Here’s what our GLD token might look like.

```solidity
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}
```

That’s it! Once deployed, we will be able to query the deployer’s balance:

```hardhat ethers truffle
> GLDToken.balanceOf(deployerAddress)
1000000000000000000000

# We can also transfer these tokens to other accounts:

> GLDToken.transfer(otherAddress, 300000000000000000000)
> GLDToken.balanceOf(otherAddress)
300000000000000000000
> GLDToken.balanceOf(deployerAddress)
700000000000000000000
```

### A Note on decimals

Often, you’ll want to be able to divide your tokens into arbitrary amounts: say, if you own 5 GLD, you may want to send 1.5 GLD to a friend, and keep 3.5 GLD to yourself. Unfortunately, Solidity and the EVM do not support this behavior: only integer (whole) numbers can be used, which poses an issue. You may send 1 or 2 tokens, but not 1.5.

How can this be achieved? It’s actually very simple: a token contract can use larger integer values, so that a balance of 50 will represent 5 GLD, a transfer of 15 will correspond to 1.5 GLD being sent, and so on.

It is important to understand that decimals is only used for display purposes. All arithmetic inside the contract is still performed on integers, and it is the different user interfaces (wallets, exchanges, etc.) that must adjust the displayed values according to decimals. The total token supply and balance of each account are not specified in GLD: you need to divide by 10 ** decimals to get the actual GLD amount.

You’ll probably want to use a decimals value of 18, just like Ether and most ERC20 token contracts in use, unless you have a very special reason not to. When minting tokens or transferring them around, you will be actually sending the number num GLD * (10 ** decimals).

```solidity
function decimals() public view virtual override returns (uint8) {
  return 16;
  
  transfer(recipient, 5 * (10 ** 18));
}
```

### Preset ERC20 contract
A preset ERC20 is available, ERC20PresetMinterPauser. It is preset to allow for token minting (create), stop all token transfers (pause) and allow holders to burn (destroy) their tokens. The contract uses Access Control to control access to the minting and pausing functionality. The account that deploys the contract will be granted the minter and pauser roles, as well as the default admin role.

This contract is ready to deploy without having to write any Solidity code. It can be used as-is for quick prototyping and testing, but is also suitable for production environments.

## Creating ERC20 Supply

### Fixed Supply

Use Contracts v2
```solidity
contract ERC20FixedSupply is ERC20 {
    constructor() ERC20("Fixed", "FIX") {
        _mint(msg.sender, 1000);
    }
}
```

Earlier Contracts v1 was used but had bug, example below

```solidity - bug, dont use this
contract ERC20FixedSupply is ERC20 {
    constructor() {
        totalSupply += 1000;
        balances[msg.sender] += 1000;
    }
}
```
Encapsulating state like this makes it safer to extend contracts. For instance, in the first example we had to manually keep the totalSupply in sync with the modified balances, which is easy to forget. In fact, we omitted something else that is also easily forgotten: the Transfer event that is required by the standard, and which is relied on by some clients. The second example does not have this bug, because the internal _mint function takes care of it.

### Rewarding Miners

The internal _mint function is the key building block that allows us to write ERC20 extensions that implement a supply mechanism.
The mechanism we will implement is a token reward for the miners that produce Ethereum blocks. In Solidity we can access the address of the current block’s miner in the global variable block.coinbase. We will mint a token reward to this address whenever someone calls the function mintMinerReward() on our token. The mechanism may sound silly, but you never know what kind of dynamic this might result in, and it’s worth analyzing and experimenting with!

```solidity
contract ERC20WithMinerReward is ERC20 {
    constructor() ERC20("Reward", "RWD") {}

    function mintMinerReward() public {
        _mint(block.coinbase, 1000);
    }
}
```

### Modularizing the Mechanism

There is one supply mechanism already included in Contracts: ERC20PresetMinterPauser. This is a generic mechanism in which a set of accounts is assigned the minter role, granting them the permission to call a mint function, an external version of _mint.

This can be used for centralized minting, where an externally owned account (i.e. someone with a pair of cryptographic keys) decides how much supply to create and for whom. There are very legitimate use cases for this mechanism, such as traditional asset-backed stablecoins.

The accounts with the minter role don’t need to be externally owned, though, and can just as well be smart contracts that implement a trustless mechanism. We can in fact implement the same behavior as the previous section.

```solidity
contract MinerRewardMinter {
    ERC20PresetMinterPauser _token;

    constructor(ERC20PresetMinterPauser token) {
        _token = token;
    }

    function mintMinerReward() public {
        _token.mint(block.coinbase, 1000);
    }
}
```

This contract, when initialized with an ERC20PresetMinterPauser instance, and granted the minter role for that contract, will result in exactly the same behavior implemented in the previous section. What is interesting about using ERC20PresetMinterPauser is that we can easily combine multiple supply mechanisms by assigning the role to multiple contracts, and moreover that we can do this dynamically.

### Automating the Reward

So far our supply mechanisms were triggered manually, but ERC20 also allows us to extend the core functionality of the token through the _beforeTokenTransfer hook (see Using Hooks).

Adding to the supply mechanism from previous sections, we can use this hook to mint a miner reward for every token transfer that is included in the blockchain.

```solidity
contract ERC20WithAutoMinerReward is ERC20 {
    constructor() ERC20("Reward", "RWD") {}

    function _mintMinerReward() internal {
        _mint(block.coinbase, 1000);
    }

    function _beforeTokenTransfer(address from, address to, uint256 value) internal virtual override {
        if (!(from == address(0) && to == block.coinbase)) {
          _mintMinerReward();
        }
        super._beforeTokenTransfer(from, to, value);
    }
}
```


