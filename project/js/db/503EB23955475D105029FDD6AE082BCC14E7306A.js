this.NesDb = this.NesDb || {};

NesDb[ '503EB23955475D105029FDD6AE082BCC14E7306A' ] = {
	"$": {
		"name": "Shatterhand",
		"class": "Licensed",
		"catalog": "NES-9H-USA",
		"publisher": "Jaleco",
		"developer": "Natsume",
		"region": "USA",
		"players": "1",
		"date": "1991-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AA20F73D",
				"sha1": "503EB23955475D105029FDD6AE082BCC14E7306A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-9H-0 PRG",
								"size": "128k",
								"crc": "4F9BDAD2",
								"sha1": "1C91A8CCF3F759127371977D5DDB22029FCD309C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-9H-0 CHR",
								"size": "128k",
								"crc": "AB8CB0CF",
								"sha1": "44A6A617A395143783A09245D641988A47A8A0E8"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"AEVNAIZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEVNAIZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEVNAIZE"
				]
			]
		},
		{
			"name": "Play with less energy",
			"codes": [
				[
					"GENNZSAA"
				]
			]
		},
		{
			"name": "Power-ups don't use up gold",
			"codes": [
				[
					"AAKKSPPA"
				]
			]
		},
		{
			"name": "Double the value of big coins",
			"codes": [
				[
					"AXXAZZGO"
				]
			]
		},
		{
			"name": "Big coins only worth 1/2",
			"codes": [
				[
					"ZEXAZZGO"
				]
			]
		},
		{
			"name": "Triple the value of small coins",
			"codes": [
				[
					"YEEAYZIE"
				]
			]
		}
	]
};
