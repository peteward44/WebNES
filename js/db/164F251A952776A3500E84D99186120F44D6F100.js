this.NesDb = this.NesDb || {};

NesDb[ '164F251A952776A3500E84D99186120F44D6F100' ] = {
	"$": {
		"name": "Star Force",
		"class": "Licensed",
		"catalog": "NES-FO-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "1",
		"date": "1987-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "FCE408A4",
				"sha1": "164F251A952776A3500E84D99186120F44D6F100",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-FO-0 PRG",
								"size": "32k",
								"crc": "1E5FDFA3",
								"sha1": "ED027CA9201318631CA283A34202B3D040B55564"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FO-0 CHR",
								"size": "32k",
								"crc": "3765E173",
								"sha1": "DD625DBAC584DF99C2354DD9AA6260448B0824FE"
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
								"type": "6113A"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZKEVTVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEUAUIZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEUAUIZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEUAUIZE"
				]
			]
		},
		{
			"name": "Turbo speed",
			"codes": [
				[
					"VYVEGONN"
				]
			]
		}
	]
};
