# Remove the previous testnet.addresses.json file from frontend to make this a clean copy
rm -f src/addresses/testnet.addresses.json

# Copy the testnet.addresses.json files and TS definitions files to the frontend
find ../core-testnet/src/addresses/ -type f -name "testnet.addresses.json" -exec cp {} src/addresses/ \;
cp -f ../core-testnet/src/addresses/AddressesJsonFile.d.ts src/addresses/