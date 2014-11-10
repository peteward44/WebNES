this.NesDb = this.NesDb || {};

NesDb[ '9C8F53AD0348EE58D842B86FB845C8014D10FA21' ] = {
	"$": {
		"name": "Joy Mech Fight",
		"altname": "ジョイメカファイト",
		"class": "Licensed",
		"catalog": "HVC-JM",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1993-05-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "708EA2BE",
				"sha1": "9C8F53AD0348EE58D842B86FB845C8014D10FA21",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-JM-0 PRG",
								"size": "256k",
								"crc": "6DAAA704",
								"sha1": "CD1503FFB1E587DD57FF721342648B445EF82EAF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-JM-0 CHR",
								"size": "256k",
								"crc": "F15EC6E5",
								"sha1": "3B6996C35EA3D41FE1209E4434F74270807612B1"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
