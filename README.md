# CoW DAO Snapshot Settings

This repository stores and tests the snapshot settings for CoW DAO.

## How to update the space settings

1. Update the json file in `src/settings.json` and upload it to IPFS
2. Update the ENS `snapshot` text record to point to the new file (for testing this could be done on any space like cowtesting.eth, for production, this needs to happen through a governance proposal on cow.eth)
3. Once the above transaction is successful, update the below link with your ENS domain and paste it in the browser to update the space settings: https://hub.snapshot.org/api/spaces/YOUR_ENS_DOMAIN/poke
4. Done

> Relevant [docs](https://docs.snapshot.org/user-guides/spaces/create/alternative-way-to-create-a-space) on Snapshot

## Development

The code in this repo provides tests to verify that the settings are well-formed.
New changes are automatically tested with GitHub Actions.

It requires [Yarn 1 (classic)](https://classic.yarnpkg.com/en/docs/install) to be installed.

### Install dependencies

```sh
yarn install --frozen
```

### Run tests

```sh
yarn test
```

### Lint code

```sh
yarn lint
```


### Format code

```sh
yarn fmt
```
