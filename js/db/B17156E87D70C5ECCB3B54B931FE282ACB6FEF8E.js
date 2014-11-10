this.NesDb = this.NesDb || {};

NesDb[ 'B17156E87D70C5ECCB3B54B931FE282ACB6FEF8E' ] = {
	"$": {
		"name": "Super Real Baseball '88",
		"altname": "スーパーリアルベースボール",
		"class": "Licensed",
		"catalog": "VAP-BG",
		"publisher": "Vap",
		"developer": "Pax Softnica",
		"region": "Japan",
		"players": "2",
		"date": "1988-07-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D175B0CB",
				"sha1": "B17156E87D70C5ECCB3B54B931FE282ACB6FEF8E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-07"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "VAP-BG-0 PRG",
								"size": "128k",
								"crc": "1A3F1F1C",
								"sha1": "79AB4242B8504FA6C7B56064055BD643E77C6394"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VAP-BG-0 CHR",
								"size": "128k",
								"crc": "D3105525",
								"sha1": "E74B2DC194530151A5B9C9113A76F1E8E89A0307"
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
