async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const initialSupply = ethers.parseUnits("1000000", 18);

  const myToken = await MyToken.deploy(initialSupply);
  await myToken.waitForDeployment();

  console.log("MyToken deployed to:", await myToken.getAddress());
  console.log("Transaction hash:", myToken.deploymentTransaction().hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

