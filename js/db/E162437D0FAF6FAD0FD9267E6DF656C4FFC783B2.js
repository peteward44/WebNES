this.NesDb = this.NesDb || {};

NesDb[ 'E162437D0FAF6FAD0FD9267E6DF656C4FFC783B2' ] = {
	"$": {
		"name": "RAF World",
		"altname": "ラフ",
		"class": "Licensed",
		"catalog": "TEC-RF",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9EFF96D2",
				"sha1": "E162437D0FAF6FAD0FD9267E6DF656C4FFC783B2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TEC-RF-0 PRG",
								"size": "128k",
								"crc": "4DA464E9",
								"sha1": "8BEF7E5FD43A7102756D5F9D7CF23C2C5950E3F5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TEC-RF-0 CHR",
								"size": "128k",
								"crc": "AA024160",
								"sha1": "E9114CBB1D227A464FB9CC520943F4C9C31A9C04"
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
