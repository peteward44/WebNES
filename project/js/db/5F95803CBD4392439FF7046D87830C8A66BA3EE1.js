this.NesDb = this.NesDb || {};

NesDb[ '5F95803CBD4392439FF7046D87830C8A66BA3EE1' ] = {
	"$": {
		"name": "Goal!",
		"class": "Licensed",
		"catalog": "NES-JG-UKV",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "United Kingdom",
		"players": "2",
		"date": "1991-05-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "C0103592",
				"sha1": "5F95803CBD4392439FF7046D87830C8A66BA3EE1",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-JG-0 PRG",
								"size": "256k",
								"crc": "AB547071",
								"sha1": "50DC8E09ADD5F7D0151011EE38A29A6B8A55D2E7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JG-0 CHR",
								"size": "128k",
								"crc": "13CDB249",
								"sha1": "ACC4F9FAAE5B7A47AA4D1285E0E5FBDCEB9659C1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
