this.NesDb = this.NesDb || {};

NesDb[ '7BFC9DDE8E97F171263EB0C9C84C83705459432C' ] = {
	"$": {
		"name": "RacerMate Challenge II",
		"class": "Unlicensed",
		"catalog": "UNL-RCMII",
		"publisher": "RacerMate",
		"developer": "RacerMate",
		"region": "USA",
		"players": "2",
		"date": "1996-03-22"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "racermate",
						"name": "RacerMate Bike"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "3.11.088",
				"crc": "74920C13",
				"sha1": "7BFC9DDE8E97F171263EB0C9C84C83705459432C",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-08-30"
			},
			"board": [
				{
					"$": {
						"type": "UNL-RACERMATE",
						"pcb": "R981-112-00",
						"mapper": "168"
					},
					"prg": [
						{
							"$": {
								"name": "N311088 05/15/91",
								"size": "64k",
								"crc": "74920C13",
								"sha1": "7BFC9DDE8E97F171263EB0C9C84C83705459432C"
							}
						}
					],
					"vram": [
						{
							"$": {
								"id": "0",
								"size": "32k"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "32k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx00"
							}
						},
						{
							"$": {
								"type": "74xx00"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "74xx4040"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337002"
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
	]
};
