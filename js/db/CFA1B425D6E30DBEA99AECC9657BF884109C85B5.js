this.NesDb = this.NesDb || {};

NesDb[ 'CFA1B425D6E30DBEA99AECC9657BF884109C85B5' ] = {
	"$": {
		"name": "Little Samson",
		"class": "Licensed",
		"catalog": "NES-LT-SCN",
		"publisher": "Taito",
		"developer": "Takeru",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-03-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "5B5AB1F8",
				"sha1": "CFA1B425D6E30DBEA99AECC9657BF884109C85B5",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-LT-0 PRG",
								"size": "256k",
								"crc": "C26FD31A",
								"sha1": "66EFCF18A04FC1EEBBB6D231ADD852DDB4B3E5F9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LT-0 CHR",
								"size": "128k",
								"crc": "C269135D",
								"sha1": "E5BCE278B8D829AB31C06B94ACAAD52484D5DCCD"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Increase Samson's energy gauge",
			"codes": [
				[
					"AOKTPSAE"
				]
			]
		},
		{
			"name": "Increase Kikira's energy gauge",
			"codes": [
				[
					"AOKTZSAE"
				]
			]
		},
		{
			"name": "Increase Gamm's energy gauge",
			"codes": [
				[
					"AXKTLIAP"
				]
			]
		},
		{
			"name": "Increase K.O.'s energy gauge",
			"codes": [
				[
					"AOKTGIGA"
				]
			]
		},
		{
			"name": "Increase Samson's energy",
			"codes": [
				[
					"AOKTISAE",
					"AOKTPSAE"
				]
			]
		},
		{
			"name": "Increase Kikira's energy",
			"codes": [
				[
					"AOKTTSAE",
					"AOKTZSAE"
				]
			]
		},
		{
			"name": "Increase Gamm's energy",
			"codes": [
				[
					"AXKTYIAP",
					"AXKTLIAP"
				]
			]
		},
		{
			"name": "Increase K.O.'s energy",
			"codes": [
				[
					"AOKVAIGA",
					"AOKTGIGA"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"GZVEPXSN"
				]
			]
		},
		{
			"name": "Crystal ball adds 4 units to energy gauge",
			"codes": [
				[
					"AAUZEZGE"
				]
			]
		},
		{
			"name": "Small hearts give 4 energy units",
			"codes": [
				[
					"AESXVPZE"
				]
			]
		},
		{
			"name": "Infinite heroes",
			"codes": [
				[
					"GXOVAGVG"
				]
			]
		}
	]
};
