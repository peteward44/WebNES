this.NesDb = this.NesDb || {};

NesDb[ '6098F6CB768939BBFC41CE35161C04ADD7BBE639' ] = {
	"$": {
		"name": "City Adventure Touch: Mystery of Triangle",
		"altname": "タッチ　ミステリー・オブトライアングル",
		"class": "Licensed",
		"catalog": "THF-TU",
		"publisher": "Toho",
		"developer": "Compile",
		"region": "Japan",
		"players": "2",
		"date": "1987-03-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B834EB30",
				"sha1": "6098F6CB768939BBFC41CE35161C04ADD7BBE639",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
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
								"name": "THF-TU-0 PRG",
								"size": "128k",
								"crc": "B834EB30",
								"sha1": "6098F6CB768939BBFC41CE35161C04ADD7BBE639"
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
