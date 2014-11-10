this.NesDb = this.NesDb || {};

NesDb[ 'EF90A357F8CE3B060CA4C14973BCC910B2C6668C' ] = {
	"$": {
		"name": "Bases Loaded",
		"class": "Licensed",
		"catalog": "NES-LD-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1988-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "DAEE19F2",
				"sha1": "EF90A357F8CE3B060CA4C14973BCC910B2C6668C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-05-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LD-1 PRG",
								"size": "256k",
								"crc": "778AAF25",
								"sha1": "1DCCD8F490DC804667D1772A95AEE78ECECD80FD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LD-0 CHR",
								"size": "64k",
								"crc": "E472EC23",
								"sha1": "B87D2C3D851488016FDA181485F1F42D2C2BC477"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "DAEE19F2",
				"sha1": "EF90A357F8CE3B060CA4C14973BCC910B2C6668C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LD-1 PRG",
								"size": "256k",
								"crc": "778AAF25",
								"sha1": "1DCCD8F490DC804667D1772A95AEE78ECECD80FD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LD-0 CHR",
								"size": "64k",
								"crc": "E472EC23",
								"sha1": "B87D2C3D851488016FDA181485F1F42D2C2BC477"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
