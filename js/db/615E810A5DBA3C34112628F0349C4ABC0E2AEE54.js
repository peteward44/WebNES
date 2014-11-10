this.NesDb = this.NesDb || {};

NesDb[ '615E810A5DBA3C34112628F0349C4ABC0E2AEE54' ] = {
	"$": {
		"name": "Ultimate League Soccer",
		"class": "Unlicensed",
		"catalog": "AVE-US",
		"publisher": "AVE",
		"developer": "C & E",
		"region": "USA",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "831F9C1A",
				"sha1": "615E810A5DBA3C34112628F0349C4ABC0E2AEE54",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-10-07"
			},
			"board": [
				{
					"$": {
						"type": "AVE-MB-91",
						"pcb": "MB-91«E»",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "29F5-PGM",
								"size": "32k",
								"crc": "449ABFED",
								"sha1": "DC19E9D883FF3C084FFD3B24554BA166A6F10F27"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "0F04-CHR",
								"size": "64k",
								"crc": "71BA978C",
								"sha1": "CA0DC9C90F667ED258AE754669F0A3310EBB0190"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "MX8018"
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
