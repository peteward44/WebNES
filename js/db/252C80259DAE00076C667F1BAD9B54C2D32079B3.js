this.NesDb = this.NesDb || {};

NesDb[ '252C80259DAE00076C667F1BAD9B54C2D32079B3' ] = {
	"$": {
		"name": "Championship Bowling",
		"class": "Licensed",
		"catalog": "NES-1F-USA",
		"publisher": "Romstar",
		"developer": "Another",
		"region": "USA",
		"players": "4",
		"date": "1989-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EAC38105",
				"sha1": "252C80259DAE00076C667F1BAD9B54C2D32079B3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-06",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-1F-0 PRG",
								"size": "32k",
								"crc": "03840EC5",
								"sha1": "E111BAF444C42AD011AEFB602127A92B04DA665B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-1F-0 CHR",
								"size": "32k",
								"crc": "CA3A5D8E",
								"sha1": "F0A5D8253C690C57A6E69BA39370AF8A2D5CD972"
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
								"type": "6113B1"
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
