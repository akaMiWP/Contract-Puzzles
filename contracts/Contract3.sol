// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Game3 {
    bool public isWon;
    mapping(address => uint) balances;

    function buy() external payable {
        balances[msg.sender] += msg.value;
    }

    function get(address _address) external view returns (uint balance) {
        balance = balances[_address];
    }

    function win(address addr1, address addr2, address addr3) external {
        require(balances[addr3] > 0);
        require(balances[addr2] > balances[addr1]);
        require(balances[addr1] > balances[addr3]);

        isWon = true;
    }
}
