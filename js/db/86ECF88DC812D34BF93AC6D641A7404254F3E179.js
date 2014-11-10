this.NesDb = this.NesDb || {};

NesDb[ '86ECF88DC812D34BF93AC6D641A7404254F3E179' ] = {
	"$": {
		"name": "Pachio-kun 3",
		"altname": "パチ夫くん３ 帰ってきたパチ夫くん",
		"class": "Licensed",
		"catalog": "CDS-P3",
		"publisher": "Coconuts",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8BCB0993",
				"sha1": "86ECF88DC812D34BF93AC6D641A7404254F3E179",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-20"
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
								"name": "CDS-P3-0 PRG",
								"size": "256k",
								"crc": "34CFA970",
								"sha1": "98351620FB29FE07CC3640F15456AB502ED78634"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CDS-P3-0 CHR",
								"size": "128k",
								"crc": "4D63DDAE",
								"sha1": "9F5182985046E172EBBE3D12D8979FE1398C95FB"
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
