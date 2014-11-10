this.NesDb = this.NesDb || {};

NesDb[ 'B3C1140173115651E50CCDF906CF078BCABBE3C7' ] = {
	"$": {
		"name": "Might and Magic: Secret of the Inner Sanctum",
		"class": "Licensed",
		"catalog": "NES-MP-USA",
		"publisher": "Sammy",
		"developer": "New World Computing",
		"portdeveloper": "Gakken",
		"region": "USA",
		"players": "1",
		"date": "1992-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "532A27E6",
				"sha1": "B3C1140173115651E50CCDF906CF078BCABBE3C7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-MP-0 PRG",
								"size": "256k",
								"crc": "55E73CE5",
								"sha1": "118B1CDA6168BBE7482569D8740324156D5E6558"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-MP-0 CHR",
								"size": "256k",
								"crc": "D5F5164F",
								"sha1": "1E15854D811829A3BC2AAE9559D3A401A1B7C019"
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
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
