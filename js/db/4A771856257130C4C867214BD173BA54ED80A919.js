this.NesDb = this.NesDb || {};

NesDb[ '4A771856257130C4C867214BD173BA54ED80A919' ] = {
	"$": {
		"name": "Tiny Toon Adventures 2: Montana Land e Youkoso",
		"altname": "タイニートゥーンアドベンチャー2　モンタナランドへようこそ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RV051",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1992-11-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E4362167",
				"sha1": "4A771856257130C4C867214BD173BA54ED80A919",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-7",
						"pcb": "353429",
						"mapper": "85"
					},
					"prg": [
						{
							"$": {
								"name": "RV051J00P",
								"size": "128k",
								"crc": "1AA0479C",
								"sha1": "8AB54A69F551D954179109FB5AE33DF42BA2EB30"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RV051J00C",
								"size": "128k",
								"crc": "CA162561",
								"sha1": "585738296DEA997F2EFDBE24C8A362B54B1F7985"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC7"
							},
							"pin": [
								{
									"$": {
										"number": "17",
										"function": "PRG A3"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
