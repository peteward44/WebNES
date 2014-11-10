this.NesDb = this.NesDb || {};

NesDb[ 'B3D401A0032D33A6484B054F3776C906BA194D2C' ] = {
	"$": {
		"name": "Gun Hed: Arutanaru Tatakai",
		"altname": "ガンヘッド 新たなる戦い",
		"class": "Licensed",
		"catalog": "VRE-R3",
		"publisher": "Varie",
		"developer": "Varie",
		"region": "Japan",
		"players": "4",
		"date": "1990-04-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E8BAA782",
				"sha1": "B3D401A0032D33A6484B054F3776C906BA194D2C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "VRE-R3-0 PRG",
								"size": "128k",
								"crc": "E362ECDC",
								"sha1": "0C3428912DAB773877EA684248FE6CDF5B638536"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VRE-R3-0 CHR",
								"size": "128k",
								"crc": "95FABCC8",
								"sha1": "6F5727564BA94265BA6F07EB8221A85E13C50672"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
