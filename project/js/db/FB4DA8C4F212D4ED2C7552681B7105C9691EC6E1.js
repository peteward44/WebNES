this.NesDb = this.NesDb || {};

NesDb[ 'FB4DA8C4F212D4ED2C7552681B7105C9691EC6E1' ] = {
	"$": {
		"name": "King's Knight",
		"class": "Licensed",
		"catalog": "NES-KG-USA",
		"publisher": "Square",
		"developer": "Bits Laboratory",
		"region": "USA",
		"players": "1",
		"date": "1989-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "01B4CA89",
				"sha1": "FB4DA8C4F212D4ED2C7552681B7105C9691EC6E1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-31"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-06",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-KG-0 PRG",
								"size": "32k",
								"crc": "24428A5D",
								"sha1": "2F19A785C9B494D519E51A41BB8FB92F881E6622"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-KG-0 CHR",
								"size": "32k",
								"crc": "7D09198A",
								"sha1": "07982C8B0B194D53E30F4D0320C1FBBDB3C7CDB0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite energy",
			"codes": [
				[
					"GZVXTPSA"
				]
			]
		},
		{
			"name": "Start with double usual energy",
			"codes": [
				[
					"AOSUAOGE"
				]
			]
		},
		{
			"name": "Start with half usual energy",
			"codes": [
				[
					"TESUAOGA"
				]
			]
		},
		{
			"name": "Start with a better character",
			"codes": [
				[
					"PESUTPAA"
				]
			]
		},
		{
			"name": "Start with the best character normally possible",
			"codes": [
				[
					"ZESUTPAA"
				]
			]
		},
		{
			"name": "Start with a super character",
			"codes": [
				[
					"IESUTPAA"
				]
			]
		},
		{
			"name": "Only lose 1 energy point when hit",
			"codes": [
				[
					"OTVXAPSV",
					"PAVXPPAP"
				]
			]
		}
	]
};
