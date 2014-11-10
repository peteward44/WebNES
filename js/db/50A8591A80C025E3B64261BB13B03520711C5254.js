this.NesDb = this.NesDb || {};

NesDb[ '50A8591A80C025E3B64261BB13B03520711C5254' ] = {
	"$": {
		"name": "SD Gundam Gaiden: Knight Gundam Monogatari 3: Densetsu no Kishi Dan",
		"altname": "ＳＤガンダム外伝　ナイトガンダム物語３　～伝説の騎士団～",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "BA-KGD3",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1992-10-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C2840372",
				"sha1": "50A8591A80C025E3B64261BB13B03520711C5254",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-28"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-LZ93D50+24C02",
						"pcb": "DRAGON BALL Z-B",
						"mapper": "16"
					},
					"prg": [
						{
							"$": {
								"name": "K GUNDAM-3 PRG",
								"size": "256k",
								"crc": "81A15EB8",
								"sha1": "F8D7481AA8599757D78F252D7DCE9DC65E920693"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "K GUNDAM-3 CHR",
								"size": "256k",
								"crc": "C9B2A75B",
								"sha1": "389286FD3C101F681E40D3B78045E2CC2DAF728E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "24C02"
							}
						},
						{
							"$": {
								"type": "FCG-3"
							}
						}
					]
				}
			]
		}
	]
};
