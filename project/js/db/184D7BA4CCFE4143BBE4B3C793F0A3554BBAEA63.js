this.NesDb = this.NesDb || {};

NesDb[ '184D7BA4CCFE4143BBE4B3C793F0A3554BBAEA63' ] = {
	"$": {
		"name": "Dragon Power",
		"class": "Licensed",
		"catalog": "NES-DP-USA",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "1",
		"date": "1988-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "811F06D9",
				"sha1": "184D7BA4CCFE4143BBE4B3C793F0A3554BBAEA63",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-GNROM",
						"pcb": "NES-GN-ROM-03",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DP-0 PRG",
								"size": "128k",
								"crc": "ECE525DD",
								"sha1": "CA8A4A01500FD12859EB31D1B505458950BDFD3A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-DP-0 CHR",
								"size": "32k",
								"crc": "59F0FBAA",
								"sha1": "3BCEAD1FAB16CC9BCC8EE84A98BB465E4F87E103"
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
								"type": "6113"
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
			"name": "Start with infinite energy",
			"codes": [
				[
					"SZVOSZVG"
				]
			]
		},
		{
			"name": "Start with extra energy",
			"codes": [
				[
					"EAXAILGT"
				]
			]
		},
		{
			"name": "Start with 24 Wind Waves",
			"codes": [
				[
					"KAOETLSA"
				]
			]
		}
	]
};
