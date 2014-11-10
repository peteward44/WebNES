this.NesDb = this.NesDb || {};

NesDb[ '5786C19ECB90F9C47A6C9A364B46B4E15BD57CFC' ] = {
	"$": {
		"name": "King's Knight",
		"altname": "キングスナイト",
		"class": "Licensed",
		"catalog": "SQF-KG",
		"publisher": "Square",
		"developer": "Bits Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1986-09-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AC136F2D",
				"sha1": "5786C19ECB90F9C47A6C9A364B46B4E15BD57CFC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-03-18"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "N04",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "32C1CE97",
								"sha1": "471C7985F6282AAA666BD6285357FBA5576E55EE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "1E1A11C1",
								"sha1": "39361FE572F55E9064DD5923813A2006FBF66013"
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
