this.NesDb = this.NesDb || {};

NesDb[ '74DBA27392CA4451875AD0267E5466F92D835A62' ] = {
	"$": {
		"name": "Royal Blood",
		"altname": "ロイヤルブラッド",
		"class": "Licensed",
		"catalog": "KOE-IU",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "2",
		"date": "1991-08-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BC80FB52",
				"sha1": "74DBA27392CA4451875AD0267E5466F92D835A62",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-EKROM",
						"pcb": "HVC-EKROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-IU-0 PRG",
								"size": "256k",
								"crc": "57F33F70",
								"sha1": "B67183DA893639745D72A4D99F4D0C0F60FDC136"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-IU-0 CHR",
								"size": "256k",
								"crc": "44B22B3D",
								"sha1": "BFDB1A89F403B7DEEA2E29ADDF1D18E745442771"
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
								"type": "MMC5"
							}
						}
					]
				}
			]
		}
	]
};
