this.NesDb = this.NesDb || {};

NesDb[ 'A52A23560281455F8CBE6AE563153F7925CAEF7B' ] = {
	"$": {
		"name": "Blue Shadow",
		"class": "Licensed",
		"catalog": "NES-27-FRG",
		"publisher": "Taito",
		"developer": "Natsume",
		"region": "Germany",
		"players": "2",
		"date": "1991-06-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C92B814B",
				"sha1": "A52A23560281455F8CBE6AE563153F7925CAEF7B",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-27-0 PRG",
								"size": "128k",
								"crc": "075A69E6",
								"sha1": "F773B4062700944328B506187C8F04CA542C32B6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-27-0 CHR",
								"size": "128k",
								"crc": "750E47AE",
								"sha1": "398D37B61652A563AB9AB5033EF2F11FFEAA70C2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
