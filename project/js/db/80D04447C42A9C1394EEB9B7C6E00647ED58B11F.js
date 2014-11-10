this.NesDb = this.NesDb || {};

NesDb[ '80D04447C42A9C1394EEB9B7C6E00647ED58B11F' ] = {
	"$": {
		"name": "NES Play Action Football",
		"class": "Licensed",
		"catalog": "NES-NB-USA",
		"publisher": "Nintendo",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "4",
		"date": "1990-09"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B9B4D9E0",
				"sha1": "80D04447C42A9C1394EEB9B7C6E00647ED58B11F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-11-13"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLSROM",
						"pcb": "NES-TLSROM-01",
						"mapper": "118"
					},
					"prg": [
						{
							"$": {
								"name": "NES-NB-0 PRG",
								"size": "128k",
								"crc": "17F72EC8",
								"sha1": "204C1BC2D59B410D87A1728E128E059496673243"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-NB-0 CHR",
								"size": "128k",
								"crc": "6E8CAE8D",
								"sha1": "5A1C0C0D0B60BD09D7BBD33F96EF5FD39B3B3046"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "30-minute quarters",
			"codes": [
				[
					"TOKYLKYE"
				]
			]
		},
		{
			"name": "10-minute quarters",
			"codes": [
				[
					"ZEKYLKYE"
				]
			]
		},
		{
			"name": "No timeouts-player 2",
			"codes": [
				[
					"KEKLUNSE"
				]
			]
		},
		{
			"name": "6 timeouts per half",
			"codes": [
				[
					"TEUUNYLA",
					"TEUUNYLA"
				]
			]
		},
		{
			"name": "1 timeout per half",
			"codes": [
				[
					"PEUUNYLA",
					"PEUUNYLA"
				]
			]
		}
	]
};
