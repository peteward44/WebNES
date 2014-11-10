this.NesDb = this.NesDb || {};

NesDb[ '3E814B7307730E30EC6067CB4487F2A826A3F7D6' ] = {
	"$": {
		"name": "Silent Assault",
		"class": "Unlicensed",
		"catalog": "CDR-ST-81010",
		"publisher": "Color Dreams",
		"developer": "Sachen / Joy Van",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CA0A869E",
				"sha1": "3E814B7307730E30EC6067CB4487F2A826A3F7D6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
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
								"crc": "2CE45FF2",
								"sha1": "1166708EFC4622218024CF79E90A6E92EE088770"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "64k",
								"crc": "F2B0B9BC",
								"sha1": "66D58B8F78068924A9F3DD752C287B47B792AC65"
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
