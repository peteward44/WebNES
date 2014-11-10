this.NesDb = this.NesDb || {};

NesDb[ 'CFB0DC557FDC913B995EE8B848C84F2661260E5F' ] = {
	"$": {
		"name": "Destination Earthstar",
		"class": "Licensed",
		"catalog": "NES-VW-USA",
		"publisher": "Acclaim",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1990-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EB9960EE",
				"sha1": "CFB0DC557FDC913B995EE8B848C84F2661260E5F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-29"
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
								"name": "NES-VW-0 PRG",
								"size": "32k",
								"crc": "86CBC595",
								"sha1": "7927EA0047C314F3417DAB3F639D40C46DC35CCB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VW-0 CHR",
								"size": "32k",
								"crc": "9C82F4E4",
								"sha1": "2887D4471F1D5BAE4F28DD934C5D3CCB4D08EF0D"
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
	],
	"gameGenieCodes": [
		{
			"name": "Less energy",
			"codes": [
				[
					"ISNEUUOP"
				]
			]
		},
		{
			"name": "More energy",
			"codes": [
				[
					"NNNEUUOO"
				]
			]
		},
		{
			"name": "Start game with 1 life",
			"codes": [
				[
					"PAVTXGLA"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SXVSVIVG"
				]
			]
		},
		{
			"name": "Don't lose special weapon in sub game",
			"codes": [
				[
					"XTNVSNXK"
				]
			]
		}
	]
};
