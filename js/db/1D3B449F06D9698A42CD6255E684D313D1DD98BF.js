this.NesDb = this.NesDb || {};

NesDb[ '1D3B449F06D9698A42CD6255E684D313D1DD98BF' ] = {
	"$": {
		"name": "Tiles of Fate",
		"class": "Unlicensed",
		"catalog": "AVE-TF",
		"publisher": "AVE",
		"developer": "C & E",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3E1271D5",
				"sha1": "1D3B449F06D9698A42CD6255E684D313D1DD98BF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-14"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-03",
						"pcb": "NINA-03 REV. A",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "652A-PGM",
								"size": "32k",
								"crc": "6679648A",
								"sha1": "803E0C1EE67B24CE9937F158AA965569E92FA979"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "0D97-CHR",
								"size": "32k",
								"crc": "DE7F6C61",
								"sha1": "7AB8789E0EFC84DDB46D1DA78B2C373F41EE1B86"
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
