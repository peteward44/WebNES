this.NesDb = this.NesDb || {};

NesDb[ 'EA4E90BED794AC2C1DB8BCFB74362F5223B816D9' ] = {
	"$": {
		"name": "Rodland",
		"class": "Licensed",
		"catalog": "NES-R8-ESP",
		"publisher": "Storm",
		"developer": "Jaleco",
		"portdeveloper": "The Sales Curve",
		"region": "Spain",
		"players": "1",
		"date": "1993-05-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"prototype": "1",
				"crc": "36C3B13A",
				"sha1": "EA4E90BED794AC2C1DB8BCFB74362F5223B816D9",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNEPROM",
						"pcb": "NES-UNEPROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "36C3B13A",
								"sha1": "EA4E90BED794AC2C1DB8BCFB74362F5223B816D9"
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
								"type": "74xx161"
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
								"type": "3195A"
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
