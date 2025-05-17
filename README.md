# 🚀 Pharos Hardhat Token Deployment Example

This project contains a simple example of deploying an ERC20 token (`MyToken.sol`) to the **Pharos Testnet** using [Hardhat](https://hardhat.org).

## General Requirements

- Node.js/npm
- A private key for an account funded with Pharos Testnet tokens.

**Important:** Set up environment variables in the `.env` file with your private key and the RPC URL.

---

🧰 **Tech Stack**

Hardhat (https://hardhat.org/)  
Pharos Testnet

---

🌐 **Pharos Testnet Network Details**

| Parameter    | Value                                        |
| ------------ | -------------------------------------------- |
| Network Name | Pharos Testnet                               |
| RPC URL      | `https://testnet.dplabs-internal.com/`      |
| Chain ID     | `688688`                                     |
| Token Symbol | `PHRS`                                       |
| Explorer     | [Pharos Testnet Explorer](https://testnet.pharosscan.xyz/) |

---

### **⚙️ Installation & Deployment**

**1. Clone the repo**

```
git clone https://github.com/plikipie/Pharos-hardhat-deploy.git
cd Pharos-hardhat-deploy
```
**2. Install dependencies**

```
npm install
```
**3. Create .env file**

```
npx hardhat compile
```
**4. Compile the contract**

```
npx hardhat compile
```
**5. Deploy to Pharos Testnet**

```
npx hardhat run scripts/deploy.js --network pharos
```

