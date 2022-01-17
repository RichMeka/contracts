const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const RichMeka = artifacts.require("RichMeka");

module.exports = async function (deployer) {
    const instance = await deployProxy(RichMeka, { deployer });
    console.log("Deployed", instance.address);
};