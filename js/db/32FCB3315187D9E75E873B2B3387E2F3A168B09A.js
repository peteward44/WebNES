this.NesDb = this.NesDb || {};

NesDb[ '32FCB3315187D9E75E873B2B3387E2F3A168B09A' ] = {
	"$": {
		"name": "Seicross",
		"altname": "セクロス",
		"class": "Licensed",
		"catalog": "NBF-SE (02)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "2",
		"date": "1986-05-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "90600B85",
				"sha1": "32FCB3315187D9E75E873B2B3387E2F3A168B09A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "HVC-NROM-256K-02",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "F7B2DBC7",
								"sha1": "7851CC8438547398CE075B9DCBB35462DD05D0B0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "DBA2082A",
								"sha1": "CA002F56FD2AE4E5C5B8C1A6C6597D1E9FF98C73"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SUTEEX"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PELAGA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TELAGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PELAGE"
				]
			]
		},
		{
			"name": "Slow motion",
			"codes": [
				[
					"PEGEUG"
				]
			]
		}
	]
};
