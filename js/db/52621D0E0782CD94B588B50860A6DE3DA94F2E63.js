this.NesDb = this.NesDb || {};

NesDb[ '52621D0E0782CD94B588B50860A6DE3DA94F2E63' ] = {
	"$": {
		"name": "Linus Spacehead's Cosmic Crusade",
		"class": "Unlicensed",
		"catalog": "ALG-LN",
		"publisher": "Camerica",
		"developer": "Codemasters",
		"region": "USA",
		"players": "1",
		"date": "1992-11"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "aladdin",
						"name": "Aladdin Deck Enhancer"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9E379698",
				"sha1": "52621D0E0782CD94B588B50860A6DE3DA94F2E63",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-25"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-ALGN",
						"pcb": "ALGNV1-1",
						"mapper": "71"
					},
					"prg": [
						{
							"$": {
								"name": "ICROS74151-LN",
								"size": "256k",
								"crc": "9E379698",
								"sha1": "52621D0E0782CD94B588B50860A6DE3DA94F2E63"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9E379698",
				"sha1": "52621D0E0782CD94B588B50860A6DE3DA94F2E63",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-BF9093",
						"pcb": "BIC-48",
						"mapper": "71"
					},
					"prg": [
						{
							"$": {
								"name": "ICROS74151-LN",
								"size": "256k",
								"crc": "9E379698",
								"sha1": "52621D0E0782CD94B588B50860A6DE3DA94F2E63"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "BF9093"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
