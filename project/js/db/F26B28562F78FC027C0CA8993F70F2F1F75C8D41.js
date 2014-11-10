this.NesDb = this.NesDb || {};

NesDb[ 'F26B28562F78FC027C0CA8993F70F2F1F75C8D41' ] = {
	"$": {
		"name": "Kabuki: Quantum Fighter",
		"class": "Licensed",
		"catalog": "NES-3K-USA",
		"publisher": "HAL Laboratory",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1991-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7474AC92",
				"sha1": "F26B28562F78FC027C0CA8993F70F2F1F75C8D41",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
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
								"name": "NES-3K-0 PRG",
								"size": "128k",
								"crc": "BFE0E37F",
								"sha1": "ADC2934E97F695B38912DFDF394EDBA6B2D0876B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-3K-0 CHR",
								"size": "128k",
								"crc": "7F91AAFA",
								"sha1": "D887E50EBD4D0FB9560DBB6675D1466613E357AC"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Don't lose a life from energy loss",
			"codes": [
				[
					"AAVGKYPA"
				]
			]
		},
		{
			"name": "Don't lose a life from timer",
			"codes": [
				[
					"AASSAAPA"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AENLSLZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IENLSLZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AENLSLZE"
				]
			]
		},
		{
			"name": "1 continue",
			"codes": [
				[
					"PENUXLZA"
				]
			]
		},
		{
			"name": "6 continues",
			"codes": [
				[
					"IENUXLZA"
				]
			]
		},
		{
			"name": "9 continues",
			"codes": [
				[
					"AENUXLZE"
				]
			]
		},
		{
			"name": "Infinite chip power",
			"codes": [
				[
					"SXEUAESU"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"NYXIZEYU"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"YZXIZEYU"
				]
			]
		},
		{
			"name": "Special weapons use up minimum chip power",
			"codes": [
				[
					"SXEUAESU",
					"AOEUPEYA"
				]
			]
		},
		{
			"name": "Maximum energy",
			"codes": [
				[
					"YENUNUZE",
					"YEXLLUZE"
				]
			]
		},
		{
			"name": "Less energy",
			"codes": [
				[
					"IENUNUZA",
					"IEXLLUZA"
				]
			]
		}
	]
};
