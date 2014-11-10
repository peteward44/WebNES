this.NesDb = this.NesDb || {};

NesDb[ 'FE1C4A88BC11977B10FC8E246E255E729D8A6AC6' ] = {
	"$": {
		"name": "Konamic Sports in Seoul",
		"altname": "コナミックスポーツインソウル",
		"class": "Licensed",
		"catalog": "KDS-F2",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1989-09-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C7642467",
				"sha1": "FE1C4A88BC11977B10FC8E246E255E729D8A6AC6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KDS-F2-0 PRG",
								"size": "128k",
								"crc": "900C7442",
								"sha1": "34421F7C4BE88F50F98CBA20651827D7CA0AA8F9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KDS-F2-0 CHR",
								"size": "128k",
								"crc": "6143D8FE",
								"sha1": "26DC512153DB21A86538C6624B79223E76AB655D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
