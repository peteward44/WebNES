this.NesDb = this.NesDb || {};

NesDb[ '21A07723CD1E509E966147BA6C72118C9F199D58' ] = {
	"$": {
		"name": "Might and Magic: Book One: Secret of the Inner Sanctum",
		"altname": "マイト・アンド・マジック",
		"class": "Licensed",
		"catalog": "GAT-MP",
		"publisher": "Gakken",
		"developer": "New World Computing",
		"portdeveloper": "Gakken",
		"region": "Japan",
		"players": "1",
		"date": "1990-07-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9BDCD892",
				"sha1": "21A07723CD1E509E966147BA6C72118C9F199D58",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "GAT-MP-0 PRG",
								"size": "256k",
								"crc": "0C935DFE",
								"sha1": "A2C61354D599C04E642629BD57BEA706AAB6E665"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "GAT-MP-0 CHR",
								"size": "256k",
								"crc": "8126D720",
								"sha1": "6A96DEE430C3F87F79E5991F9CC96ACEFF0C6E40"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
