this.NesDb = this.NesDb || {};

NesDb[ '977286FDC76C34A618E2A2D0270641BC36CFE89C' ] = {
	"$": {
		"name": "Nintendo World Championships 1990",
		"class": "Licensed",
		"subclass": "Competition",
		"catalog": "NES-90-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0B0E128F",
				"sha1": "977286FDC76C34A618E2A2D0270641BC36CFE89C",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-EVENT",
						"pcb": "NES-EVENT-02",
						"mapper": "105"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"size": "128k",
								"crc": "7B5CA760",
								"sha1": "D18B3F95924FB843B01FD3F5F2720B644C4542ED"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "128k",
								"crc": "4F834DCA",
								"sha1": "B44E7B77B24F69D87C33C480A578F71E8FEC324A"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx30"
							}
						},
						{
							"$": {
								"type": "74xx4040"
							}
						},
						{
							"$": {
								"type": "74xx4040"
							}
						},
						{
							"$": {
								"type": "74xx4040"
							}
						},
						{
							"$": {
								"type": "74xx4040"
							}
						},
						{
							"$": {
								"type": "74xx74"
							}
						},
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
