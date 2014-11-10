this.NesDb = this.NesDb || {};

NesDb[ 'AC13516A0CD33273DBD92A013C14179B5ACC2DA2' ] = {
	"$": {
		"name": "Battle Formula",
		"altname": "バトルフォーミュラ",
		"class": "Licensed",
		"catalog": "TEC-5U",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1991-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2B4D80AE",
				"sha1": "AC13516A0CD33273DBD92A013C14179B5ACC2DA2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "TEC-5U-0 PRG",
								"size": "128k",
								"crc": "3BE27FCE",
								"sha1": "3DC424D569307F580BD390920A3863D0551D3D26"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TEC-5U-0 CHR",
								"size": "128k",
								"crc": "9208079D",
								"sha1": "AAD4B05854F7CF70A25409DA536AF3B15DE083DD"
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
	]
};
