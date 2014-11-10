this.NesDb = this.NesDb || {};

NesDb[ '57770A1B73CE69B2FEB9799A9AB98DFA41ADF86D' ] = {
	"$": {
		"name": "Fisher-Price: Firehouse Rescue",
		"class": "Licensed",
		"catalog": "NES-QF-USA",
		"publisher": "GameTek",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1992-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "38946C43",
				"sha1": "57770A1B73CE69B2FEB9799A9AB98DFA41ADF86D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QF-0 PRG",
								"size": "32k",
								"crc": "6D612468",
								"sha1": "01157CD297DA784B7FBF98C7B697391BDF4D108A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QF-0 CHR",
								"size": "32k",
								"crc": "098B86B2",
								"sha1": "0CF792FA25EFC86CE09CB745EF6017DADD426B3E"
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
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
