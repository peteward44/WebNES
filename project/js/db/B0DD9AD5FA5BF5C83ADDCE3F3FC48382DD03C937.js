this.NesDb = this.NesDb || {};

NesDb[ 'B0DD9AD5FA5BF5C83ADDCE3F3FC48382DD03C937' ] = {
	"$": {
		"name": "Cobra Command",
		"altname": "コブラコマンド",
		"class": "Licensed",
		"catalog": "DFC-CN",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "1",
		"date": "1988-10-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "24BA90CA",
				"sha1": "B0DD9AD5FA5BF5C83ADDCE3F3FC48382DD03C937",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-15"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-CN-0 PRG",
								"size": "128k",
								"crc": "E4CF4E13",
								"sha1": "077A880B1E1B525EB3C3E403AE975CDEB2F6BD57"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-CN-0 CHR",
								"size": "128k",
								"crc": "F59CD28B",
								"sha1": "4C75BD7F5F2612704D37A08E6D45AF23A5DC595B"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with infinite lives",
			"codes": [
				[
					"SXUAAOVK"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAUVGZGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAUVGZGE"
				]
			]
		},
		{
			"name": "Become immune to weapon damage",
			"codes": [
				[
					"GZSSNGST"
				]
			]
		}
	]
};
