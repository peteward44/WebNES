this.NesDb = this.NesDb || {};

NesDb[ '1E81DAD3E13866464240032F281466E1F52D0A46' ] = {
	"$": {
		"name": "Peepar Time",
		"altname": "ピーパータイム",
		"class": "Licensed",
		"catalog": "SAN-P6",
		"publisher": "Sanritsu",
		"developer": "Sanritsu",
		"region": "Japan",
		"players": "2",
		"date": "1990-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8F4497EE",
				"sha1": "1E81DAD3E13866464240032F281466E1F52D0A46",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "CN-04B",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "C1CF4948",
								"sha1": "92153E11B34752A1084D8C81EE5966DF837C0BEB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "16k",
								"crc": "63CA952F",
								"sha1": "1EECF9CE19FEDF5B16BC55F89EE2CAABC3E98E39"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
