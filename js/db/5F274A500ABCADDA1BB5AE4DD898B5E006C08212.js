this.NesDb = this.NesDb || {};

NesDb[ '5F274A500ABCADDA1BB5AE4DD898B5E006C08212' ] = {
	"$": {
		"name": "P'radikus Conflict",
		"class": "Unlicensed",
		"catalog": "CDR-PT-81017",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "42749A95",
				"sha1": "5F274A500ABCADDA1BB5AE4DD898B5E006C08212",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVA",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"size": "64k",
								"crc": "0FD5AEEB",
								"sha1": "BB9EE5869770EAF7FDFCA31C62884B59DC298774"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "64k",
								"crc": "57CAA133",
								"sha1": "4E7831E17D8EEF0152CE29F2941BC9DA737163E1"
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
