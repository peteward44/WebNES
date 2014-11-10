this.NesDb = this.NesDb || {};

NesDb[ '1A973BC6F601ADD532FF122AABB342C66013A72D' ] = {
	"$": {
		"name": "Triathron, The",
		"altname": "ザ・トライアスロン",
		"class": "Licensed",
		"catalog": "KAC-TZ",
		"publisher": "KAC",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CC3544B0",
				"sha1": "1A973BC6F601ADD532FF122AABB342C66013A72D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KAC-TZ-0 PRG",
								"size": "128k",
								"crc": "9B565541",
								"sha1": "B405C328C3D00686DDE73A864E8F3066B1607208"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KAC-TZ-0 CHR",
								"size": "128k",
								"crc": "338C7E4A",
								"sha1": "553594CA6A6DB95397B590986490235723E75D4A"
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
