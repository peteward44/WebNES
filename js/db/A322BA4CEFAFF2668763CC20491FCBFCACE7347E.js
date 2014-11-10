this.NesDb = this.NesDb || {};

NesDb[ 'A322BA4CEFAFF2668763CC20491FCBFCACE7347E' ] = {
	"$": {
		"name": "Mach Rider",
		"class": "Licensed",
		"catalog": "NES-MR-GBR",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "United Kingdom",
		"players": "1",
		"date": "1987-03-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "E57E5384",
				"sha1": "A322BA4CEFAFF2668763CC20491FCBFCACE7347E",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-03",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-MR-0 PRG",
								"size": "32k",
								"crc": "8BBE9BEC",
								"sha1": "270182FB07A20FEDFD079A6BC49974497545A9E7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-MR-0 CHR",
								"size": "8k",
								"crc": "33A2B41A",
								"sha1": "671F37BCE742E63250296E62C143F8A82F860B04"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
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
