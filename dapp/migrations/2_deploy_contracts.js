const Contract = artifacts.require("");

module.exports = function (deployer) {
  deployer.deploy(Contract)
};
