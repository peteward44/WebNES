this.NesDb = this.NesDb || {};

NesDb[ '1DBB1FFB39DDE15A006667331B98D52F1020B21F' ] = {
	"$": {
		"name": "Mickey Mousecapade",
		"class": "Licensed",
		"catalog": "NES-MI-USA",
		"publisher": "Capcom",
		"developer": "Hudson Soft",
		"region": "USA",
		"players": "1",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7C6A3D51",
				"sha1": "1DBB1FFB39DDE15A006667331B98D52F1020B21F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-20"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-MI-0 PRG",
								"size": "32k",
								"crc": "F39FD253",
								"sha1": "1F6200B8EFCF9855937360F33DE998987FF900C7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-MI-0 CHR",
								"size": "32k",
								"crc": "703875D3",
								"sha1": "C0E95A695536D4C26A7BFA13BBE3892EB8C13104"
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
								"type": "6113A"
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
					"SZSOPZVG"
				]
			]
		},
		{
			"name": "Start with 2 lives",
			"codes": [
				[
					"PESOIPGA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IESOIPGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AESOIPGE"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"OVOPPTSV"
				]
			]
		},
		{
			"name": "Mickey and Minnie can shoot on any level",
			"codes": [
				[
					"GPSIEVGE",
					"LAVSVTZA"
				]
			]
		}
	]
};
