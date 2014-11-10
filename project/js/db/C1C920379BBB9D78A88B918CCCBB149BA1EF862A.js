this.NesDb = this.NesDb || {};

NesDb[ 'C1C920379BBB9D78A88B918CCCBB149BA1EF862A' ] = {
	"$": {
		"name": "Gekitotsu Yonku Battle",
		"altname": "激突四駆バトル",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-15",
		"publisher": "Irem",
		"developer": "Tamtex",
		"region": "Japan",
		"players": "1",
		"date": "1989-11-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "04109355",
				"sha1": "C1C920379BBB9D78A88B918CCCBB149BA1EF862A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "IREM-UNROM",
						"pcb": "FC-00-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "IREM-IF-14",
								"size": "128k",
								"crc": "04109355",
								"sha1": "C1C920379BBB9D78A88B918CCCBB149BA1EF862A"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
	]
};
