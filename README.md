# CoW DAO Snapshot Settings

This repository stores and tests the snapshot settings for CoW DAO.

## How to update the space settings

Upfront note: Only CoW DAO can update snapshot settings - hence, any changes have to go through CIP/voting. 

1. Update the json file in `src/settings.json` and upload it to IPFS
   a) (A nice addition is to release the newest settings with the CIP-Number for easy tracking)
   b) uploading to IPFS can be done via Pinata (download this final json linked above and upload to pinata service)
   c) once they are pinned, it's nice to do a check on the difference from the current settings to the to-be-updated settings
     --> New ones as done via step b)
    --> Current ones available here: https://app.ens.domains/cow.eth
   --> Use a json diff comparison to easily verify the changes (e.g. https://jsondiff.com/)
   
3. Update the ENS `snapshot` text record to point to the new file (for testing this could be done on any space like cowtesting.eth, for production, this needs to happen through a governance proposal on cow.eth)
   --> How to do that for CoW's snapshot space ?
   a) Impersonate the CoW DAO Safe and use the ENS Safe App to create a new link
   b) create a transaction to be included into the CIP (add via "raw Transaction" from the transaction builder from Safe)
   
5. Once the above transaction is successful, update the below link with your ENS domain and paste it in the browser to update the space settings: https://hub.snapshot.org/api/spaces/YOUR_ENS_DOMAIN/poke
6. Done

> Relevant [docs](https://docs.snapshot.org/user-guides/spaces/create/alternative-way-to-create-a-space) on Snapshot

## Development

The code in this repo provides tests to verify that the settings are well-formed.
New changes are automatically tested with GitHub Actions.

It requires [Yarn 1 (classic)](https://classic.yarnpkg.com/en/docs/install) to be installed.

Once any changes have been merged into `main`, the `settings.json` will be automatically uploaded and pinned to IPFS. The resultant CID can be used to inform the transaction for replacing the `snapshot` TXT record on the ENS domain.

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
