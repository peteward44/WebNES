this.NesDb = this.NesDb || {};

NesDb[ 'D186EF4A396E9D80C3C5F105D80060DC3CB58008' ] = {
	"$": {
		"name": "Metal Fighter",
		"class": "Unlicensed",
		"catalog": "CDR-MR-81008",
		"publisher": "Color Dreams",
		"developer": "Sachen / Joy Van",
		"region": "USA",
		"players": "1",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "11D08CC6",
				"sha1": "D186EF4A396E9D80C3C5F105D80060DC3CB58008",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-29"
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
								"size": "32k",
								"crc": "A695B076",
								"sha1": "3DE041DC39896AA379398F161CA652D730C71D97"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "50D92D2B",
								"sha1": "7AC98D02E6A3526724879A6182B95E09AD7D60DB"
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
