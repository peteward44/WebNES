this.NesDb = this.NesDb || {};

NesDb[ 'EF355FD0F299622675A716B782F68521EB3DEFA7' ] = {
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
				"revision": "9.03.128",
				"crc": "F6A9CB75",
				"sha1": "EF355FD0F299622675A716B782F68521EB3DEFA7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2008-04-17"
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
								"name": "V903_128",
								"size": "64k",
								"crc": "F6A9CB75",
								"sha1": "EF355FD0F299622675A716B782F68521EB3DEFA7"
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
