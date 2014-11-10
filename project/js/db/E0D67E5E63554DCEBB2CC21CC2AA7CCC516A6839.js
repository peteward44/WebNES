this.NesDb = this.NesDb || {};

NesDb[ 'E0D67E5E63554DCEBB2CC21CC2AA7CCC516A6839' ] = {
	"$": {
		"name": "Kamen no Ninja: Akakage",
		"altname": "仮面の忍者 赤影",
		"class": "Licensed",
		"catalog": "TDF-AK",
		"publisher": "Toei Animation",
		"developer": "Shouei System",
		"region": "Japan",
		"players": "1",
		"date": "1988-05-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "28C1D3D5",
				"sha1": "E0D67E5E63554DCEBB2CC21CC2AA7CCC516A6839",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-05",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TDF-AK-0 PRG",
								"size": "128k",
								"crc": "28C1D3D5",
								"sha1": "E0D67E5E63554DCEBB2CC21CC2AA7CCC516A6839"
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
