this.NesDb = this.NesDb || {};

NesDb[ '8E35196189E1A323FEE941FD7DA56CE1D04D3A15' ] = {
	"$": {
		"name": "North & South",
		"altname": "ノース＆サウスわくわく南北戦争",
		"class": "Licensed",
		"catalog": "KSC-N5",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "2",
		"date": "1990-09-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0FC8E9B7",
				"sha1": "8E35196189E1A323FEE941FD7DA56CE1D04D3A15",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TSROM",
						"pcb": "HVC-TSROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-N5-0 PRG",
								"size": "128k",
								"crc": "68E8A520",
								"sha1": "9393668FDB5B1B8870D3B580344DAD31297A688E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-N5-0 CHR",
								"size": "128k",
								"crc": "D1EA387E",
								"sha1": "68453A115131DB78CBDE463285FC774ECB00398A"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
	],
	"gameGenieCodes": [
		{
			"name": "Cannon has 5 shots",
			"codes": [
				[
					"IEUATOPA"
				]
			]
		},
		{
			"name": "Cannon has 15 shots",
			"codes": [
				[
					"YEUATOPE"
				]
			]
		},
		{
			"name": "Cannon has infinite shots",
			"codes": [
				[
					"SZXPYUVS"
				]
			]
		},
		{
			"name": "No cannons allowed!",
			"codes": [
				[
					"GXXATOSO"
				]
			]
		},
		{
			"name": "Only 2 daggers in the fortress",
			"codes": [
				[
					"ZAUAGPGA"
				]
			]
		},
		{
			"name": "Infinite daggers in the fortress",
			"codes": [
				[
					"GXXPLKVS"
				]
			]
		},
		{
			"name": "2 men in the fortress",
			"codes": [
				[
					"ZAUETOZA"
				]
			]
		},
		{
			"name": "5 men in the fortress",
			"codes": [
				[
					"IAUETOZA"
				]
			]
		},
		{
			"name": "2 men on the train",
			"codes": [
				[
					"ZASAGOZA"
				]
			]
		},
		{
			"name": "5 men on the train",
			"codes": [
				[
					"IASAGOZA"
				]
			]
		}
	]
};
