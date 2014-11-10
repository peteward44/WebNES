this.NesDb = this.NesDb || {};

NesDb[ '9E6AE492746EF9D142DE17FF45A4722CE6E21425' ] = {
	"$": {
		"name": "Cosmic Spacehead",
		"class": "Unlicensed",
		"catalog": "CDM-CS",
		"publisher": "Codemasters",
		"developer": "Codemasters",
		"region": "Europe",
		"players": "2",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL",
				"crc": "70F31D2C",
				"sha1": "9E6AE492746EF9D142DE17FF45A4722CE6E21425",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-14"
			},
			"board": [
				{
					"$": {
						"type": "CODEMASTERS-NR8N",
						"pcb": "NR8NV2-1",
						"mapper": "71"
					},
					"prg": [
						{
							"$": {
								"name": "COSMICS-HEAD NECS5392",
								"size": "256k",
								"crc": "70F31D2C",
								"sha1": "9E6AE492746EF9D142DE17FF45A4722CE6E21425"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "CME-01"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "PIC16C54"
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
