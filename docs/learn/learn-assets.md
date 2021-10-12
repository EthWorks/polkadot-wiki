---
id: learn-assets
title: Assets on Polkadot
sidebar_label: Assets on Polkadot
description: Learn about fungible and non-fungible assets in the Polkadot network.
slug: ../learn-assets
---

Assets in the Polkadot and Kusama networks can be represented on several chains. They can also take many forms, from a parachain's native token to on-chain representations of off-chain reserves. This page focuses on the latter, namely assets that would be issued by a creator (e.g. rights to audited, off-chain reserves held by the creator, or art issued as an NFT).

The [Statemint parachain](https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/) (and Statemine on Kusama, they are functionally equivalent) hosts data structures and logic that specialize in the creation, management, and use of assets in the Polkadot Network. Although other parachains can host applications dealing with assets on Statemint, Statemint can be thought of as the "home base" of assets in the network.

Statemint uses DOT as its native token (and Statemine, KSM). These chains yield their governance to their respective Relay Chain, and have no inflation or rewards for collators. As [common good parachains](https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/), they have a trusted relationship with the Relay Chain, and as such can teleport DOT/KSM between themselves and their Relay Chains. That is, DOT on Statemint is just as good as DOT on the Relay Chain, likewise for KSM on Statemine and its Relay Chain.

Statemint does not support smart contracts. See the [Advanced](#advanced-techniques) section at the bottom for discussion on using proxy and multisig accounts to replicate oft used contract logic.

## Fungible Assets

Fungible assets are those that are interchangeable, i.e. one unit is equivalent to any other unit for the purposes of claiming the underlying item. Statemint represents fungible assets in the [Assets pallet](https://crates.parity.io/pallet_assets/index.html). For those who are familiar with the ERC20 standard, this pallet presents a similar interface. However, the logic is encoded directly in the chain's runtime. As such, operations are not gas metered and instead are benchmarked upon every release, leading to efficient execution and stable transaction fees.

### Creation and Management

Anyone on the network can create assets on Statemint, as long as they reserve the required deposit (1 KSM on Statemine, 100 DOT on Statemint). The network reserves the deposit on creation. The creator also must specify a unique `AssetId`, an integer of type `u32`, to identify the asset. The `AssetId` should be the canonical identifier for an asset, as the chain does not enforce uniqueness of metadata like "name" and "symbol". The creator also must specify a minimum balance, which will prevent accounts from having dust balances.

An asset has a number of privileged roles. The creator of the asset automatically takes on all privileged roles, but can reassign them after creation. These roles are:

- Owner
- Issuer
- Admin
- Freezer

The owner has the ability to set the accounts responsible for the other three roles, as well as set asset metadata (e.g. name, symbols, decimals). The issuer can mint and burn tokens to/from addresses of their choosing. The freezer can freeze assets on target addresses or the entire asset class. The admin can make force transfers as well as unfreeze accounts of the asset class. **Always refer to the reference documentation for certainty on privileged roles.**

An asset's details contains one field not accessible to its owner or admin team, that of asset sufficiency. Only the network's governance mechanism can deem an asset as _sufficient._ A balance of a non-sufficient asset (the default) can only exist on already-existing accounts. That is, a user could not create a new account on-chain by transferring an insufficient asset to it; the account must already exist by having more than the existential deposit in DOT. However, assets deemed _sufficient_ can instantiate accounts. In the future, _sufficient_ assets will be able to pay transaction fees, such that users can transact on Statemint without the need for DOT.

### Using

Users have a very simple interface, namely the ability to transfer asset balances to other accounts on-chain. As mentioned before, if the asset is not _sufficient,_ then the destination account must already exist for the transfer to succeed.

The chain also contains a `transfer_keep_alive` function similar to that of the Balances pallet that will fail if execution would kill the sending account.

Statemint also sweeps dust balances into transfers. For example, if an asset has a minimum balance of 10, and an account has a balance of 25, then an attempt to transfer 20 units would actually transfer all 25.

### Application Development

Statemint provides an `approve_transfer`, `transfer_approved`, and `cancel_approval` interface. Application developers can use this interface so that users can authorize the application to effectuate transfers up to a given amount on behalf of an account.

### Cross-Chain Accounting

Statemint uses a reserve-backed system to manage asset transfers to other parachains. It tracks how much of each asset has gone to each parachain, and will not accept more back from a particular parachain.

As a result of this, asset owners can use Statemint to track information like the total issuance of their asset in the entire network, as parachain balances would be included in the reserve-backed table. Likewise, for the minting and burning of tokens, an asset's team can perform all operations on Statemint and propagate any minted tokens to other parachains in the network.

Parachains that want to send assets to other parachains should do so via instructions to Statemint so that the reserve-backed table stays up to date. For more info, see the [Moving Assets between Chains in XCM](https://polkadot.network/blog/xcm-the-cross-consensus-message-format/) section of the article on XCM.

## Non-Fungible Assets

What are they
Uniques pallet

### Creation and Management

Asset classes and instances
Privileges

### Using

Transfer

### Application Development

Approve/cancel
Metadata

## Advanced Techniques

Combining multisig/proxy accounts
