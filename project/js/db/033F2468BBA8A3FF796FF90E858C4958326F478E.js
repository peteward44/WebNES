this.NesDb = this.NesDb || {};

NesDb[ '033F2468BBA8A3FF796FF90E858C4958326F478E' ] = {
	"$": {
		"name": "8 Eyes",
		"altname": "エイト アイズ",
		"class": "Licensed",
		"catalog": "KKS-8E (03)",
		"publisher": "Seta",
		"developer": "Thinking Rabbit",
		"region": "Japan",
		"players": "2",
		"date": "1988-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F8D53171",
				"sha1": "033F2468BBA8A3FF796FF90E858C4958326F478E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "KKS-8E-0 PRG",
								"size": "128k",
								"crc": "AF5AD5AF",
								"sha1": "5EDA8D6305FB44B61F3EC9F93F00605D6739D533"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KKS-8E-0 CHR",
								"size": "128k",
								"crc": "E48AA3B1",
								"sha1": "951F756086F0514ECB100F4BB4FF4C7FD9D11E45"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Most attacks won't damage Orin",
			"codes": [
				[
					"GXOUSUSE"
				]
			]
		},
		{
			"name": "Most attacks won't damage Cutrus",
			"codes": [
				[
					"GXNGNOSE"
				]
			]
		},
		{
			"name": "Start with more energy--Orin",
			"codes": [
				[
					"AGVXGXYZ"
				]
			]
		},
		{
			"name": "Start with more energy--Cutrus",
			"codes": [
				[
					"AGVXIXYZ"
				]
			]
		},
		{
			"name": "Start game with some item power",
			"codes": [
				[
					"YZVXTZAE"
				]
			]
		},
		{
			"name": "Never lose item power once gained",
			"codes": [
				[
					"GXSLKVSE"
				]
			]
		},
		{
			"name": "Start game with dagger",
			"codes": [
				[
					"VTOVNTVA"
				]
			]
		}
	]
};
