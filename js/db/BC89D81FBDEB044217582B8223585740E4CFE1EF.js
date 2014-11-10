this.NesDb = this.NesDb || {};

NesDb[ 'BC89D81FBDEB044217582B8223585740E4CFE1EF' ] = {
	"$": {
		"name": "Shockwave",
		"class": "Unlicensed",
		"catalog": "AGCI-SW",
		"publisher": "AGCI",
		"developer": "AGCI",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C73B82FC",
				"sha1": "BC89D81FBDEB044217582B8223585740E4CFE1EF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-23"
			},
			"board": [
				{
					"$": {
						"type": "AGCI-47516",
						"pcb": "47516",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "SHOCKWAVEPRG",
								"size": "32k",
								"crc": "6CF4D165",
								"sha1": "1CB11EA6B941E378922B687CD7E3CCD079D63446"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SHOCKWAVECHR",
								"size": "32k",
								"crc": "70870A2D",
								"sha1": "0CE41E37E6DE6B0FA283E01290FE7BE6FFBB8CED"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
