# cow_eth_snapshot
snapshot space settings process
- Update the json file and upload it to IPFS
- Update the ENS `snapshot` text record to point to the new file (for testing this could be done on any space like cowtesting.eth, for production, this needs to happen through a governance proposal on cow.eth)
- Once the above transaction is successful, go to the below link to update the space in Snapshot: https://hub.snapshot.org/api/spaces/<ENS DOMAIN>/poke
- Done
- Relevant [docs](https://docs.snapshot.org/user-guides/spaces/create/alternative-way-to-create-a-space)https://docs.snapshot.org/user-guides/spaces/create/alternative-way-to-create-a-space on Snapshot 
