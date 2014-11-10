this.NesDb = this.NesDb || {};

NesDb[ 'F65CC1B8A916E55B8AC025755AC6DC7FA3E40919' ] = {
	"$": {
		"name": "Roger Clemens' MVP Baseball",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-6V-USA",
		"publisher": "LJN",
		"developer": "Sculptured Software",
		"region": "USA",
		"players": "2",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "018A8699",
				"sha1": "F65CC1B8A916E55B8AC025755AC6DC7FA3E40919",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-03"
			},
			"board": [
				{
					"$": {
						"type": "ACCLAIM-MC-ACC",
						"pcb": "53361-2",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-6V-1 PRG",
								"size": "128k",
								"crc": "804A0570",
								"sha1": "AA407D981AA85390F9452E2B26F42223162723FD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6V-1 CHR",
								"size": "256k",
								"crc": "E68FCEC3",
								"sha1": "9C8598C07762EEE4884DCA3907ED31B84D89A662"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MC-ACC"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "018A8699",
				"sha1": "F65CC1B8A916E55B8AC025755AC6DC7FA3E40919",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-05-28"
			},
			"board": [
				{
					"$": {
						"type": "ACCLAIM-TLROM",
						"pcb": "51555-2",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-6V-1 PRG",
								"size": "128k",
								"crc": "804A0570",
								"sha1": "AA407D981AA85390F9452E2B26F42223162723FD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6V-1 CHR",
								"size": "256k",
								"crc": "E68FCEC3",
								"sha1": "9C8598C07762EEE4884DCA3907ED31B84D89A662"
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
			"name": "Strikes are not called with no swing",
			"codes": [
				[
					"OOVSLLPA"
				]
			]
		},
		{
			"name": "Strikes are not called when batter swings",
			"codes": [
				[
					"GANAAPZA"
				]
			]
		},
		{
			"name": "1 ball for a walk",
			"codes": [
				[
					"PENKLPGA"
				]
			]
		},
		{
			"name": "2 balls for a walk",
			"codes": [
				[
					"ZENKLPGA"
				]
			]
		},
		{
			"name": "3 balls for walk",
			"codes": [
				[
					"LENKLPGA"
				]
			]
		},
		{
			"name": "Infinite balls (balls are not called)",
			"codes": [
				[
					"OONIALAA"
				]
			]
		},
		{
			"name": "Infinite balls and strikes",
			"codes": [
				[
					"SLNALPVY"
				]
			]
		},
		{
			"name": "2 strikes and you're out",
			"codes": [
				[
					"ZANEAPLA",
					"ZEOUYPLA",
					"ZEVKGPLA"
				]
			]
		},
		{
			"name": "1 strike and you're out",
			"codes": [
				[
					"PANEAPLA",
					"PEOUYPLA",
					"PEVKGPLA"
				]
			]
		}
	]
};
