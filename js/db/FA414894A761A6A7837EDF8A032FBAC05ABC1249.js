this.NesDb = this.NesDb || {};

NesDb[ 'FA414894A761A6A7837EDF8A032FBAC05ABC1249' ] = {
	"$": {
		"name": "Tecmo Bowl",
		"altname": "テクモボウル",
		"class": "Licensed",
		"catalog": "TCF-TW",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "2",
		"date": "1990-11-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "588E7492",
				"sha1": "FA414894A761A6A7837EDF8A032FBAC05ABC1249",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
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
								"name": "TCF-TW-0 PRG",
								"size": "128k",
								"crc": "134C1A50",
								"sha1": "BE0D7AC44327201CED8ED09C634754C19ACD4E50"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-TW-0 CHR",
								"size": "128k",
								"crc": "2FA4B7BE",
								"sha1": "F1FDDC284FC6052D21D71401DC6AFBBDB73CDBF8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "More time for the 1st Quarter",
			"codes": [
				[
					"GAOATSPA"
				]
			]
		},
		{
			"name": "Only 2 downs allowed",
			"codes": [
				[
					"ZAXAYIGA",
					"ZAXOTPGA"
				]
			]
		},
		{
			"name": "6 downs allowed",
			"codes": [
				[
					"TAXAYIGA",
					"TAXOTPGA"
				]
			]
		}
	]
};
