this.NesDb = this.NesDb || {};

NesDb[ '787B087959EB837200648484CF609A6D035ED4CF' ] = {
	"$": {
		"name": "Nishimura Kyoutarou Mystery: Blue Train Satsujin Jiken",
		"altname": "西村京太郎ミステリー ブルートレイン殺人事件",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-11",
		"publisher": "Irem",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1989-01-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A851CAE9",
				"sha1": "787B087959EB837200648484CF609A6D035ED4CF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-03-15"
			},
			"board": [
				{
					"$": {
						"type": "IREM-FCG-1",
						"pcb": "BLUE TRAIN",
						"mapper": "16"
					},
					"prg": [
						{
							"$": {
								"name": "IF-11 P",
								"size": "128k",
								"crc": "0C187747",
								"sha1": "2FBBF4E75B2416BB3DFC8487A33384AA5ECF4A1A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "IF-11 C0",
								"size": "128k",
								"crc": "A47A33B3",
								"sha1": "6893D75685DE72275D34C504517BCD0CC552B939"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "IF-11 C1",
								"size": "128k",
								"crc": "483B5B4C",
								"sha1": "A2A975E3F6DC3A7D23B4CBB7AC11238042908155"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "FCG-1"
							}
						}
					]
				}
			]
		}
	]
};
