this.NesDb = this.NesDb || {};

NesDb[ 'F5C62A5AC771C42D0F64A46D4A70D283EEEF58EB' ] = {
	"$": {
		"name": "King Neptune's Adventure",
		"class": "Unlicensed",
		"catalog": "CDR-KE-81016",
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
				"crc": "CB53C523",
				"sha1": "F5C62A5AC771C42D0F64A46D4A70D283EEEF58EB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-12"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVB",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "KING NEPTUNE PRG.",
								"size": "64k",
								"crc": "8C71F706",
								"sha1": "190BF6CEA6464C77C240DF3A4DAB65BA6B3CF625"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KING NEPTUNE VID.",
								"size": "32k",
								"crc": "591F274B",
								"sha1": "DC3811BAA95A757166A13143A2675C8E36B5825A"
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
