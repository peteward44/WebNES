this.NesDb = this.NesDb || {};

NesDb[ 'BDF3D18E9416A241F829E62A063FD6515128E856' ] = {
	"$": {
		"name": "Wario no Mori",
		"altname": "ワリオの森",
		"class": "Licensed",
		"catalog": "HVC-UW",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1994-02-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "03E2898F",
				"sha1": "BDF3D18E9416A241F829E62A063FD6515128E856",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-UW-0 PRG",
								"size": "256k",
								"crc": "50FAD784",
								"sha1": "13E1746B01404C007BD25EE0BAA2FD343447CE87"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-UW-0 CHR",
								"size": "256k",
								"crc": "3D792589",
								"sha1": "42074BCE7CCCECBC53B2DD29530FA829703C5DB0"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
