this.NesDb = this.NesDb || {};

NesDb[ 'F278A5E39D319021E486BCE04565A4099F24D0DF' ] = {
	"$": {
		"name": "Pac-Land",
		"altname": "パックランド",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-NPL-4500-10",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "1",
		"date": "1985-11-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "89D42098",
				"sha1": "F278A5E39D319021E486BCE04565A4099F24D0DF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-06"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3305",
						"pcb": "3305",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT PL PRG",
								"size": "32k",
								"crc": "6E53EAA9",
								"sha1": "6BA8179FB48FAEDE6DB9BF2871CBD6AB52CEBD3D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT PL CHR",
								"size": "8k",
								"crc": "80AE65C2",
								"sha1": "8D5AB58015244481EF921738E6752FF6049D198D"
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
	]
};
