this.NesDb = this.NesDb || {};

NesDb[ '6D528E12F8EC36C747C0E18311B812D83972DBB2' ] = {
	"$": {
		"name": "Seiryaku Simulation: Inbou no Wakusei: Shancara",
		"altname": "陰謀の惑星シャンカラ",
		"class": "Licensed",
		"catalog": "IGS-SV",
		"publisher": "IGS",
		"developer": "",
		"region": "Japan",
		"players": "4",
		"date": "1992-06-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C22BC87B",
				"sha1": "6D528E12F8EC36C747C0E18311B812D83972DBB2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
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
								"name": "IGS-SV-0 PRG",
								"size": "128k",
								"crc": "009DA4C0",
								"sha1": "8E89CFE34A3D182DAF8A4C03F9438F3CA2437E5F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "IGS-SV-0 CHR",
								"size": "128k",
								"crc": "B79A163E",
								"sha1": "588B42B7EC1495C589BCFA2EAC4FC28148820DB7"
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
