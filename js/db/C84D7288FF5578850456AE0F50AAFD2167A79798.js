this.NesDb = this.NesDb || {};

NesDb[ 'C84D7288FF5578850456AE0F50AAFD2167A79798' ] = {
	"$": {
		"name": "Rambo",
		"class": "Licensed",
		"catalog": "NES-RV-USA",
		"publisher": "Acclaim",
		"developer": "Pack-In-Video",
		"region": "USA",
		"players": "1",
		"date": "1988-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A342A5FD",
				"sha1": "C84D7288FF5578850456AE0F50AAFD2167A79798",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RV-0 PRG",
								"size": "128k",
								"crc": "A342A5FD",
								"sha1": "C84D7288FF5578850456AE0F50AAFD2167A79798"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
			"name": "Never lose weapons",
			"codes": [
				[
					"SXOVXKVS"
				]
			]
		},
		{
			"name": "More medicine bottles",
			"codes": [
				[
					"ZEEEITIE"
				]
			]
		},
		{
			"name": "More throwing knives",
			"codes": [
				[
					"GOEAPVZA"
				]
			]
		},
		{
			"name": "Start with 2 medicine bottles",
			"codes": [
				[
					"ZEEEITIA"
				]
			]
		},
		{
			"name": "Gain double items on pick-up",
			"codes": [
				[
					"GOXTZXZA"
				]
			]
		},
		{
			"name": "Start with bow and arrows",
			"codes": [
				[
					"ZPNEITPP",
					"ZOEALTPP"
				]
			]
		},
		{
			"name": "Start with exploding arrows",
			"codes": [
				[
					"LPNEITPP",
					"LOEALTPP"
				]
			]
		},
		{
			"name": "Start with hand grenades",
			"codes": [
				[
					"IPNEITPP",
					"IOEALTPP"
				]
			]
		}
	]
};
