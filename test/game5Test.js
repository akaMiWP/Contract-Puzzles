const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe("Game5", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();

    return { game };
  }
  it("should be a winner", async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

    // good luck
    const winner = await ethers.getImpersonatedSigner(
      "0x0000000000000000000000000000000000000000"
    );

    // Set the balance of the impersonated account
    await hre.network.provider.send("hardhat_setBalance", [
      "0x0000000000000000000000000000000000000000", // The impersonated account's address
      "0x3635C9ADC5DEA00000", // The balance you want to set (in wei, this example sets 1000 ETH)
    ]);

    // Call the win function from the winner's address
    await game.connect(winner).win();

    // Leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
