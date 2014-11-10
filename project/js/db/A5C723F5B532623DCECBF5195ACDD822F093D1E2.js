this.NesDb = this.NesDb || {};

NesDb[ 'A5C723F5B532623DCECBF5195ACDD822F093D1E2' ] = {
	"$": {
		"name": "Wheel of Fortune featuring Vanna White",
		"class": "Licensed",
		"catalog": "NES-Y6-USA",
		"publisher": "GameTek",
		"developer": "GameTek",
		"region": "USA",
		"players": "3",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "4220C170",
				"sha1": "A5C723F5B532623DCECBF5195ACDD822F093D1E2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-Y6-0 PRG",
								"size": "128k",
								"crc": "4220C170",
								"sha1": "A5C723F5B532623DCECBF5195ACDD822F093D1E2"
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
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
