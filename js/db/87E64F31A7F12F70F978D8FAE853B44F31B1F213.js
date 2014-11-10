this.NesDb = this.NesDb || {};

NesDb[ '87E64F31A7F12F70F978D8FAE853B44F31B1F213' ] = {
	"$": {
		"name": "Capcom Barcelona '92",
		"altname": "ＣＡＰＣＯＭバルセロナ’９２",
		"class": "Licensed",
		"catalog": "CAP-1N",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "8",
		"date": "1992-06-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CB5ACB49",
				"sha1": "87E64F31A7F12F70F978D8FAE853B44F31B1F213",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
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
								"name": "CAP-1N-0 PRG",
								"size": "128k",
								"crc": "3BC3A97B",
								"sha1": "EDCA698AF7D9399A66F874D61CE2BFF577D235AE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CAP-1N-0 CHR",
								"size": "128k",
								"crc": "586B69FB",
								"sha1": "218554969FCD890287F3E3D899793B73351D528E"
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
