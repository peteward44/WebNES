this.NesDb = this.NesDb || {};

NesDb[ '2C430A5D4AF069A4C4B9082422B7F570ADA5AE31' ] = {
	"$": {
		"name": "Xenophobe",
		"class": "Licensed",
		"catalog": "NES-XE-USA",
		"publisher": "Sunsoft",
		"developer": "Midway",
		"portdeveloper": "Sunsoft",
		"region": "USA",
		"players": "2",
		"date": "1988-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "711896B8",
				"sha1": "2C430A5D4AF069A4C4B9082422B7F570ADA5AE31",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SUNSOFT-XEN PRG",
								"size": "128k",
								"crc": "9ECA0941",
								"sha1": "43350D9FE398BA6A4DFFD1641F5BE2BACF9CF7E5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XE-0 CHR",
								"size": "32k",
								"crc": "AA00B5FA",
								"sha1": "4D7A78A0A00F10EC4D057311E1977B897093D83C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "711896B8",
				"sha1": "2C430A5D4AF069A4C4B9082422B7F570ADA5AE31",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-08"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SUNSOFT-XEN PRG",
								"size": "128k",
								"crc": "9ECA0941",
								"sha1": "43350D9FE398BA6A4DFFD1641F5BE2BACF9CF7E5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XE-0 CHR",
								"size": "32k",
								"crc": "AA00B5FA",
								"sha1": "4D7A78A0A00F10EC4D057311E1977B897093D83C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
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
			"name": "Increase starting energy for both players",
			"codes": [
				[
					"LASIZOPA"
				]
			]
		},
		{
			"name": "Infinite energy for both players",
			"codes": [
				[
					"AAKIYNUT"
				]
			]
		},
		{
			"name": "No energy pickups allowed",
			"codes": [
				[
					"SXNITVOO"
				]
			]
		},
		{
			"name": "Start at level 2",
			"codes": [
				[
					"TAKSAPYA"
				]
			]
		},
		{
			"name": "Start at level 3",
			"codes": [
				[
					"IAKSAPYA"
				]
			]
		},
		{
			"name": "Start at level 4",
			"codes": [
				[
					"GAKSAPYA"
				]
			]
		},
		{
			"name": "Start at level 5",
			"codes": [
				[
					"LAKSAPYA"
				]
			]
		},
		{
			"name": "More energy to player 1 only",
			"codes": [
				[
					"LAVILONY",
					"AIVIIOGI"
				]
			]
		}
	]
};
