this.NesDb = this.NesDb || {};

NesDb[ 'B66382B1EE59A531CD15318AEA5D4B965975E13A' ] = {
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
				"revision": "6.02.002",
				"crc": "3E59E951",
				"sha1": "B66382B1EE59A531CD15318AEA5D4B965975E13A",
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
								"name": "N602-2",
								"size": "64k",
								"crc": "3E59E951",
								"sha1": "B66382B1EE59A531CD15318AEA5D4B965975E13A"
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
