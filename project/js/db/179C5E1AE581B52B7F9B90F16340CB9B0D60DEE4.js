this.NesDb = this.NesDb || {};

NesDb[ '179C5E1AE581B52B7F9B90F16340CB9B0D60DEE4' ] = {
	"$": {
		"name": "Paris-Dakar Rally Special",
		"altname": "パリ・ダカール ラリー スペシャル",
		"class": "Licensed",
		"catalog": "CBS-PD",
		"publisher": "CBS / Sony Group",
		"developer": "ISCO",
		"region": "Japan",
		"players": "1",
		"date": "1988-02-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5F6E8A07",
				"sha1": "179C5E1AE581B52B7F9B90F16340CB9B0D60DEE4",
				"dump": "ok",
				"dumper": "aodinets",
				"datedumped": "2012-03-05"
			},
			"board": [
				{
					"$": {
						"type": "HVC-GNROM",
						"pcb": "HVC-GNROM-02",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "CBS-PD-0 PRG",
								"size": "128k",
								"crc": "E30552DB",
								"sha1": "E03B3D53CAE4B65A25250059D6C83CEDF2029BD5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CBS-PD-0 CHR",
								"size": "32k",
								"crc": "D0630F77",
								"sha1": "5234E393B9913F06C48B9DBE7C2EBB4ACB699D79"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
