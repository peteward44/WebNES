this.NesDb = this.NesDb || {};

NesDb[ 'D4F52D21EF6C872FFACEA083161DBDA0234924D5' ] = {
	"$": {
		"name": "Golf",
		"class": "Licensed",
		"catalog": "NES-GF-CAN",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Canada",
		"players": "2",
		"date": "1987-12-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E7D2C49D",
				"sha1": "D4F52D21EF6C872FFACEA083161DBDA0234924D5",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2007-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-128",
						"pcb": "NES-NROM-128-03",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GF-0 PRG",
								"size": "16k",
								"crc": "F9622BFA",
								"sha1": "B4E341A91F614BB19C67CC0205B2443591567AEA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GF-0 CHR",
								"size": "8k",
								"crc": "FF6FC790",
								"sha1": "40177839B61F375F2AD03B203328683264845B5B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113"
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
