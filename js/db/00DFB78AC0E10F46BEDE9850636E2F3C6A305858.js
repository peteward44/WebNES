this.NesDb = this.NesDb || {};

NesDb[ '00DFB78AC0E10F46BEDE9850636E2F3C6A305858' ] = {
	"$": {
		"name": "Big Nose Freaks Out",
		"class": "Unlicensed",
		"catalog": "ALG-BFO",
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
				"crc": "CCDCBFC6",
				"sha1": "00DFB78AC0E10F46BEDE9850636E2F3C6A305858",
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
								"name": "ICROS7413BFO",
								"size": "256k",
								"crc": "CCDCBFC6",
								"sha1": "00DFB78AC0E10F46BEDE9850636E2F3C6A305858"
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
				"crc": "CCDCBFC6",
				"sha1": "00DFB78AC0E10F46BEDE9850636E2F3C6A305858",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
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
								"name": "ICROS7413BFO",
								"size": "256k",
								"crc": "CCDCBFC6",
								"sha1": "00DFB78AC0E10F46BEDE9850636E2F3C6A305858"
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
