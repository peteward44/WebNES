this.NesDb = this.NesDb || {};

NesDb[ 'C0C1E49CB73067F76AAF0A3858FA718FA99321B7' ] = {
	"$": {
		"name": "6 in 1",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "CN-11",
		"publisher": "Caltron",
		"developer": "MegaSoft",
		"region": "USA",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "4686C5DD",
				"sha1": "C0C1E49CB73067F76AAF0A3858FA718FA99321B7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-10"
			},
			"board": [
				{
					"$": {
						"type": "MLT-CALTRON6IN1",
						"pcb": "N725012",
						"mapper": "41"
					},
					"prg": [
						{
							"$": {
								"name": "ND2001-P",
								"size": "256k",
								"crc": "CC8D1412",
								"sha1": "C18DAFE644ABF2B82C7432EEB3E92D9566640A60"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ND1001-C",
								"size": "128k",
								"crc": "5A5C3E73",
								"sha1": "86C2B8363013034FDE87E4AEDEC12754BF2A6B4D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx04"
							}
						},
						{
							"$": {
								"type": "74xx123"
							}
						},
						{
							"$": {
								"type": "74xx153"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "74xx20"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "7660"
							}
						}
					]
				}
			]
		}
	]
};
