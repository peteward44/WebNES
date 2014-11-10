this.NesDb = this.NesDb || {};

NesDb[ 'F11AF8758F073BB9A130884E81A09E8AD86545BB' ] = {
	"$": {
		"name": "Robodemons",
		"class": "Unlicensed",
		"catalog": "CDR-RS-81012",
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
				"crc": "10124E09",
				"sha1": "F11AF8758F073BB9A130884E81A09E8AD86545BB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
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
								"crc": "1F5F88DD",
								"sha1": "D952E2156478211A5E766EB853E57CC97ECB5784"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "64k",
								"crc": "62AE739C",
								"sha1": "9DBD9B1DAC22AAA50353FAD2FB4062D62A390192"
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
