# HardHat

## Important Links

[Data Feeds Contract Addresses on Chainlink](https://docs.chain.link/docs/reference-contracts/)
[Chainlink Github Mocks Link](https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.6/tests)
[Aave Core V3](https://github.com/aave/aave-v3-core)

## Concepts Overview
https://youtu.be/gyMwXuJrbJQ?t=38444

1. Tagging in js files to consider certain files only for npm or yarn to consider
2. Linting which is a concept of formating code and checking for errors
3. Mocking for testing, where we copy behaviour of some real object, and create a little copy of it which simulates that behaviour
4. Coverage in testing. Checking out how much code has been tested.
5. Utils folder is created and code which we might need to be run as a support can be placed there.
6. Testing is divided into unit and staging folders: [link](https://youtu.be/gyMwXuJrbJQ?t=40116)
    1. unit tests --> little pieces of codes like functions are individually tested. Usually on local hardhat or on forked hardhat.
    2. staring or integration tests --> here code as a whole is tested, in largest chunks. LAST STOP before actual deployment. Done on test nets.
7. hardhat-deploy is used so that we can replicate deployments and make testing easier
8. Overriding node modules. Format --> existing-package@npm:new-package. We did this for hardhat-deploy, see code.

## Packages
hardhat                     <-- Installing hardhat
hardhat-deploy              <-- For replicable deployment and easy testing [link](https://github.com/wighawag/hardhat-deploy)
@openzeppelin/contracts     <-- To use openzeppalin contracts
@chainlink/contracts        <-- To use chainlink contracts
@aave/core-v3               <-- To use aave 
solidity-coverage           <-- To check coverage of our tests
hardhat-gas-reporter        <-- To see how much gas our contract uses
solhint                     <-- Linting of solidity files
eslint                      <-- Linting of javascript files
prettier                    <-- Formatting js css html etc files
prettier-plugin-solidity    <-- Formatting solidity files
dotenv                      <-- Loading .env variables

# Config Files

hardhat.config.js           <-- namedAccounts, networks etc goes here
helper-hardhat-config.js    <-- We place in different variables here which can be used by hardhat config

Tagging in yarn:
Notice in various .js files we put --> module.exports.tags = ["all", "tag_specific_to_this_js", "tag3", "tag4" ........]
This is tagging, so that when we run --> yarn anything_command --tags all, then yarn will check all .js files and see if "all" tag is present in the .js file and then only run those .js files which has this tag.

## Mocks or Mocking

Used in unit testing.
Creating objects which simulates behaviour of real objects.

In development with hardhat, if we choose hardhat default network to test out stuff, we have a blank hardhat blockchain and contracts in the real blockchain are not available on our blank blockchain. Then how do we test our interaction with the real contracts?

We usually use testnets like rinkeby and koven, but what if we need to run things locally.

Solutions
1. We can fork a part of the main blockchain and run on the forked version
2. We create MOCKS!! This is where mocking comes in. YEAAH!

How?
We import a mock contract from chainlink, or other
Then create a test folder in contracts folder and then create a sol file; in the sol file we import the chainlink mock

Thats it.

Chainlink mocks link --> https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.6/tests

