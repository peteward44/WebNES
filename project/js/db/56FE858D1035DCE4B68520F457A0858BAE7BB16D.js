this.NesDb = this.NesDb || {};

NesDb[ '56FE858D1035DCE4B68520F457A0858BAE7BB16D' ] = {
	"$": {
		"name": "'89 Dennou Kyuusei Uranai",
		"altname": "神宮館’８９電脳九星占い",
		"class": "Licensed",
		"catalog": "IPC-J1-01",
		"publisher": "Jingukan",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BA58ED29",
				"sha1": "56FE858D1035DCE4B68520F457A0858BAE7BB16D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "IPC-J1-0 PRG",
								"size": "256k",
								"crc": "BA58ED29",
								"sha1": "56FE858D1035DCE4B68520F457A0858BAE7BB16D"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
