this.NesDb = this.NesDb || {};

NesDb[ '46CC4F6A0271828567419602CE19AB87F46062A5' ] = {
	"$": {
		"name": "Dungeon Magic: Sword of the Elements",
		"class": "Licensed",
		"catalog": "NES-DM-USA",
		"publisher": "Taito",
		"developer": "Natsume",
		"region": "USA",
		"players": "1",
		"date": "1990-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "23C3FB2D",
				"sha1": "46CC4F6A0271828567419602CE19AB87F46062A5",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-09-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DM-0 PRG",
								"size": "128k",
								"crc": "4EBDB122",
								"sha1": "04EA802E3E41584ED1177482FD9E9D7560EB5BD2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-DM-0 CHR",
								"size": "128k",
								"crc": "D0F69B41",
								"sha1": "B55180760FC4D1F29977CAA5F2897DD497C0E2D3"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
			"name": "Take no damage except from scorpions",
			"codes": [
				[
					"SXVLTLSA"
				]
			]
		},
		{
			"name": "Start with 100 gold pieces",
			"codes": [
				[
					"GTKIITAA"
				]
			]
		},
		{
			"name": "Take less damage",
			"codes": [
				[
					"OVVLGLSV",
					"ZEVLIUYL"
				]
			]
		},
		{
			"name": "Start with 512 gold pieces",
			"codes": [
				[
					"ZAKIITAA",
					"PGKSGTAG"
				]
			]
		},
		{
			"name": "Stay at the Inn for free",
			"codes": [
				[
					"PXSTLZPG",
					"AXSTYZAG"
				]
			]
		},
		{
			"name": "Items at Grocer's shop are free",
			"codes": [
				[
					"PXUVXTPG",
					"AXUVVTAG"
				]
			]
		},
		{
			"name": "Items at Armory are free",
			"codes": [
				[
					"PXENPLPG",
					"AXENILAG"
				]
			]
		}
	]
};
