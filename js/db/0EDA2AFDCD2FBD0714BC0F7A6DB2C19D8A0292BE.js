this.NesDb = this.NesDb || {};

NesDb[ '0EDA2AFDCD2FBD0714BC0F7A6DB2C19D8A0292BE' ] = {
	"$": {
		"name": "Samsara Naga",
		"altname": "サンサーラ・ナーガ",
		"class": "Licensed",
		"catalog": "VFR-Q1-08",
		"publisher": "Victor",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1990-03-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "EBCF8419",
				"sha1": "0EDA2AFDCD2FBD0714BC0F7A6DB2C19D8A0292BE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
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
								"name": "VFR-Q1-0 PRG",
								"size": "256k",
								"crc": "181EC6B4",
								"sha1": "023F4E63A8B620D76A666D84EFD7C7E0ED2CF460"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VFR-Q1-0 CHR",
								"size": "128k",
								"crc": "0DB7DACE",
								"sha1": "8C71CA04BFCCC248C3BAA4331E48412E0AF6BE06"
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
