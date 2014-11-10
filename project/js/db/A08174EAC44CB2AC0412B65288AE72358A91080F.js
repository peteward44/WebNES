this.NesDb = this.NesDb || {};

NesDb[ 'A08174EAC44CB2AC0412B65288AE72358A91080F' ] = {
	"$": {
		"name": "Great Waldo Search, The",
		"class": "Licensed",
		"catalog": "NES-GH-USA",
		"publisher": "THQ",
		"developer": "Radiance Software",
		"region": "USA",
		"players": "2",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2DFF7FDC",
				"sha1": "A08174EAC44CB2AC0412B65288AE72358A91080F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GH-0 PRG",
								"size": "128k",
								"crc": "CBD6CF2C",
								"sha1": "27C37C0FF7BE29AA6D081732E7D4D3AD035E083F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GH-0 CHR",
								"size": "128k",
								"crc": "3A9744D6",
								"sha1": "57C37CC502EB3EC3FF119DC79CAE2D7005E3A99E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
			"name": "Only need to find Waldo to complete the level",
			"codes": [
				[
					"EKEIXTEA"
				]
			]
		},
		{
			"name": "Only need to find the magic scroll",
			"codes": [
				[
					"EKXSNTAG"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"ZEKKOTPA"
				]
			]
		},
		{
			"name": "Much faster timer",
			"codes": [
				[
					"GEKKOTPA"
				]
			]
		},
		{
			"name": "Play the Super Waldo Challenge",
			"codes": [
				[
					"OZSIEEOV",
					"GASIOALA"
				]
			]
		},
		{
			"name": "Extra clocks last forever (the number of clock icons on the screen may be wrong)",
			"codes": [
				[
					"SXSGKTVG"
				]
			]
		},
		{
			"name": "Extra clocks worth nothing (the number of clock icons on the screen may be wrong)",
			"codes": [
				[
					"SZXINYVT"
				]
			]
		}
	]
};
