this.NesDb = this.NesDb || {};

NesDb[ '3C21F8539F04C04392CE50CD940AF336319C7786' ] = {
	"$": {
		"name": "Daiva: Imperial of Nirsartia",
		"altname": "ディーヴァ ナーサティアの玉座",
		"class": "Licensed",
		"catalog": "TFS-DV",
		"publisher": "Toemiland",
		"developer": "T & E Soft",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "721B5217",
				"sha1": "3C21F8539F04C04392CE50CD940AF336319C7786",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TFS-DV-0 PRG",
								"size": "128k",
								"crc": "721B5217",
								"sha1": "3C21F8539F04C04392CE50CD940AF336319C7786"
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
