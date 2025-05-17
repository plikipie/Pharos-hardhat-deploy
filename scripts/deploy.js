const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const initialSupply = hre.ethers.parseUnits("1000000", 18); // 1 juta token
  const token = await MyToken.deploy(initialSupply);

  await token.waitForDeployment();

  console.log(`Token deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

