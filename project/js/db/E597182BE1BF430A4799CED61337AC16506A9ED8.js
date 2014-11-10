this.NesDb = this.NesDb || {};

NesDb[ 'E597182BE1BF430A4799CED61337AC16506A9ED8' ] = {
	"$": {
		"name": "Maxi 15",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "HES-MG",
		"publisher": "HES",
		"developer": "AVE",
		"region": "Australia",
		"players": "2",
		"date": "1992-11-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL",
				"crc": "93484CC9",
				"sha1": "E597182BE1BF430A4799CED61337AC16506A9ED8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-12"
			},
			"board": [
				{
					"$": {
						"type": "MLT-MAXI15",
						"pcb": "HESI-992",
						"mapper": "234"
					},
					"prg": [
						{
							"$": {
								"name": "PGR15",
								"size": "512k",
								"crc": "5C0E2F89",
								"sha1": "5AC0BFB410771BF1928A5A1EBF90359406B645B9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHR15",
								"size": "512k",
								"crc": "00232705",
								"sha1": "867DDD14AB09EA8E1EB688B48173F189647F5823"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "4053"
							}
						},
						{
							"$": {
								"type": "74xx04"
							}
						},
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "74xx30"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					]
				}
			]
		}
	]
};
