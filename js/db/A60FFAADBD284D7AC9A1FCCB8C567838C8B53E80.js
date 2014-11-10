this.NesDb = this.NesDb || {};

NesDb[ 'A60FFAADBD284D7AC9A1FCCB8C567838C8B53E80' ] = {
	"$": {
		"name": "Paperboy",
		"class": "Licensed",
		"catalog": "NES-PY-EEC",
		"publisher": "Mindscape",
		"developer": "Tengen",
		"region": "Europe",
		"players": "2",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "EE219A49",
				"sha1": "A60FFAADBD284D7AC9A1FCCB8C567838C8B53E80",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-PY-0 PRG",
								"size": "32k",
								"crc": "2CED1577",
								"sha1": "74706FE55534F97EFC02764CBD8E4ABDE16F1B40"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-PY-0 CHR",
								"size": "32k",
								"crc": "3D8FD7E0",
								"sha1": "448A73226ADCEA0E77A2EFB85D7827A14151368C"
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
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SXSEVZVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAUOEIGA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAUOEIGA"
				]
			]
		},
		{
			"name": "Infinite papers",
			"codes": [
				[
					"OZNOKAVK"
				]
			]
		},
		{
			"name": "Start with 20 papers",
			"codes": [
				[
					"GOXAUOZA"
				]
			]
		},
		{
			"name": "Gain 20 papers on pick-up",
			"codes": [
				[
					"GPUONUZA"
				]
			]
		}
	]
};
