this.NesDb = this.NesDb || {};

NesDb[ 'C260D62429F2AE3A49C1F969F664D17F44319165' ] = {
	"$": {
		"name": "Wall Street Kid",
		"class": "Licensed",
		"catalog": "NES-ZM-USA",
		"publisher": "Sofel",
		"developer": "Sofel",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B6661BDA",
				"sha1": "C260D62429F2AE3A49C1F969F664D17F44319165",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-ZM-0 PRG",
								"size": "128k",
								"crc": "B6661BDA",
								"sha1": "C260D62429F2AE3A49C1F969F664D17F44319165"
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
								"type": "6113B1"
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
