this.NesDb = this.NesDb || {};

NesDb[ 'FFF7075DB4ED32FD75ECB7BC714FEF244940E182' ] = {
	"$": {
		"name": "Laser Invasion",
		"class": "Licensed",
		"catalog": "NES-8G-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B0480AE9",
				"sha1": "FFF7075DB4ED32FD75ECB7BC714FEF244940E182",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-ELROM",
						"pcb": "NES-ELROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "NES-8G-0 PRG",
								"size": "128k",
								"crc": "51D2112F",
								"sha1": "8F9429038A2C5874515A4E3D5AAA148BEFDEE252"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8G-0 CHR",
								"size": "128k",
								"crc": "04BBFA6E",
								"sha1": "B2AA635FFD56B1F9B0170BA8EA152E63D903E55D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
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
	]
};
