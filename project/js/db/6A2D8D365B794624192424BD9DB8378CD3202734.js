this.NesDb = this.NesDb || {};

NesDb[ '6A2D8D365B794624192424BD9DB8378CD3202734' ] = {
	"$": {
		"name": "Super Spike V'Ball",
		"class": "Licensed",
		"catalog": "NES-VJ-UKV",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "United Kingdom",
		"players": "4",
		"date": "1992-01-23"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "C05A63B2",
				"sha1": "6A2D8D365B794624192424BD9DB8378CD3202734",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-10"
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
								"name": "PAL-VJ-0 PRG",
								"size": "128k",
								"crc": "EBB9DF3D",
								"sha1": "BDB34F9F3F9EED78AABCCB6659E5E36B2F84DDEB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VJ-0 CHR",
								"size": "128k",
								"crc": "E5F016C4",
								"sha1": "A0A8F23040670BA171306961F481995822A841C0"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
