export const ABI = [{"inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error"}, {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
}, {"inputs": [], "name": "ApprovalToCurrentOwner", "type": "error"}, {
    "inputs": [],
    "name": "ApproveToCaller",
    "type": "error"
}, {"inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__CanNotMintThisMany",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__CanOnlyMintMultipleOfMaxBatchSize", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__HasBeenForceRevealed",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__InvalidAllowlistPrice", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__InvalidBatchRevealSize",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__InvalidCallbackGasLimit", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__InvalidCoordinator",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__InvalidJoeFeeCollector", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__InvalidKeyHash",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__InvalidMaxBatchSize", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__InvalidPercent",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__InvalidProjectOwner", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__InvalidRevealDates",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__InvalidRoyaltyInfo", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__InvalidStartTime",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__IsNotInTheConsumerList", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__JoeFeeAlreadyInitialized",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__LargerCollectionSizeNeeded", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__MaxSupplyForDevReached",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__MaxSupplyReached", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__NotEligibleForAllowlistMint",
    "type": "error"
}, {
    "inputs": [{"internalType": "uint256", "name": "avaxSent", "type": "uint256"}],
    "name": "Launchpeg__NotEnoughAVAX",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__PublicSaleBeforeAllowlist", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__RevealNextBatchNotAvailable",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__TransferFailed", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__Unauthorized",
    "type": "error"
}, {"inputs": [], "name": "Launchpeg__WrongAddressesAndNumSlotsLength", "type": "error"}, {
    "inputs": [],
    "name": "Launchpeg__WrongPhase",
    "type": "error"
}, {"inputs": [], "name": "MintToZeroAddress", "type": "error"}, {
    "inputs": [],
    "name": "MintZeroQuantity",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "have", "type": "address"}, {
        "internalType": "address",
        "name": "want",
        "type": "address"
    }], "name": "OnlyCoordinatorCanFulfill", "type": "error"
}, {"inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error"}, {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
}, {"inputs": [], "name": "TransferFromIncorrectOwner", "type": "error"}, {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
}, {"inputs": [], "name": "TransferToZeroAddress", "type": "error"}, {
    "anonymous": false,
    "inputs": [],
    "name": "AllowlistSeeded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "fee", "type": "uint256"}],
    "name": "AvaxWithdraw",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "string", "name": "baseURI", "type": "string"}],
    "name": "BaseURISet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "receiver", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "feePercent",
        "type": "uint256"
    }],
    "name": "DefaultRoyaltySet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
    }],
    "name": "DevMint",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "allowlistStartTime",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "publicSaleStartTime",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "allowlistPrice", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "salePrice",
        "type": "uint256"
    }],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "feePercent",
        "type": "uint256"
    }, {"indexed": false, "internalType": "address", "name": "feeCollector", "type": "address"}],
    "name": "JoeFeeInitialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "price", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "Mint",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}],
    "name": "ProjectOwnerUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "bool", "name": "isActive", "type": "bool"}],
    "name": "PublicSaleStateChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "batchNumber",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "batchSeed", "type": "uint256"}],
    "name": "Reveal",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "string", "name": "unrevealedURI", "type": "string"}],
    "name": "UnrevealedURISet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "_vrfCoordinator",
        "type": "address"
    }, {"indexed": false, "internalType": "bytes32", "name": "_keyHash", "type": "bytes32"}, {
        "indexed": false,
        "internalType": "uint64",
        "name": "_subscriptionId",
        "type": "uint64"
    }, {"indexed": false, "internalType": "uint32", "name": "_callbackGasLimit", "type": "uint32"}],
    "name": "VRFSet",
    "type": "event"
}, {
    "inputs": [],
    "name": "BASIS_POINT_PRECISION",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "allowlist",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_quantity", "type": "uint256"}],
    "name": "allowlistMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "allowlistPrice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "allowlistStartTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "amountForAllowlist",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "amountForDevs",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "amountMintedByDevs",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "amountMintedDuringAllowlist",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "amountMintedDuringPublicSale",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "baseURI",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "batchToSeed",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "callbackGasLimit",
    "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "collectionSize",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "currentPhase",
    "outputs": [{"internalType": "enum IBaseLaunchpeg.Phase", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_quantity", "type": "uint256"}],
    "name": "devMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "forceReveal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "getApproved",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}],
    "name": "getOwnershipData",
    "outputs": [{
        "components": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }, {"internalType": "uint64", "name": "startTimestamp", "type": "uint64"}, {
            "internalType": "bool",
            "name": "burned",
            "type": "bool"
        }], "internalType": "struct ERC721AUpgradeable.TokenOwnership", "name": "", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "hasBatchToReveal",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "hasBeenForceRevealed",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "_name", "type": "string"}, {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
    }, {"internalType": "address", "name": "_projectOwner", "type": "address"}, {
        "internalType": "address",
        "name": "_royaltyReceiver",
        "type": "address"
    }, {"internalType": "uint256", "name": "_maxBatchSize", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_collectionSize",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_amountForDevs", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_amountForAllowlist",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_batchRevealSize", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_revealStartTime",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_revealInterval", "type": "uint256"}],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_joeFeePercent", "type": "uint256"}, {
        "internalType": "address",
        "name": "_joeFeeCollector",
        "type": "address"
    }], "name": "initializeJoeFee", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_allowlistStartTime",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_publicSaleStartTime", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_allowlistPrice",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_salePrice", "type": "uint256"}],
    "name": "initializePhases",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "joeFeeCollector",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "joeFeePercent",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "keyHash",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "lastTokenRevealed",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maxBatchSize",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maxPerAddressDuringMint",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "nextBatchToReveal",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}],
    "name": "numberMinted",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "ownerOf",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "projectOwner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_quantity", "type": "uint256"}],
    "name": "publicSaleMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "publicSaleStartTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "requestId", "type": "uint256"}, {
        "internalType": "uint256[]",
        "name": "randomWords",
        "type": "uint256[]"
    }], "name": "rawFulfillRandomWords", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "requestConfirmations",
    "outputs": [{"internalType": "uint16", "name": "", "type": "uint16"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "revealBatchSize",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "revealInterval",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "revealNextBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "revealStartTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_salePrice",
        "type": "uint256"
    }],
    "name": "royaltyInfo",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
    }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "salePrice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address[]", "name": "_addresses", "type": "address[]"}, {
        "internalType": "uint256[]",
        "name": "_numNfts",
        "type": "uint256[]"
    }], "name": "seedAllowlist", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "_baseURI", "type": "string"}],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_projectOwner", "type": "address"}],
    "name": "setProjectOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_receiver", "type": "address"}, {
        "internalType": "uint96",
        "name": "_feePercent",
        "type": "uint96"
    }], "name": "setRoyaltyInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "_unrevealedURI", "type": "string"}],
    "name": "setUnrevealedURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_vrfCoordinator", "type": "address"}, {
        "internalType": "bytes32",
        "name": "_keyHash",
        "type": "bytes32"
    }, {"internalType": "uint64", "name": "_subscriptionId", "type": "uint64"}, {
        "internalType": "uint32",
        "name": "_callbackGasLimit",
        "type": "uint32"
    }], "name": "setVRF", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "subscriptionId",
    "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "_interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "unrevealedURI",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "useVRF",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "vrfRequestedForBatch",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_to", "type": "address"}],
    "name": "withdrawAVAX",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];
