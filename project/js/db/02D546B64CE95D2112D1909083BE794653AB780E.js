this.NesDb = this.NesDb || {};

NesDb[ '02D546B64CE95D2112D1909083BE794653AB780E' ] = {
	"$": {
		"name": "California Raisins, The: The Grape Escape",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-X7-USA",
		"publisher": "Capcom",
		"developer": "Radiance Software",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "8D97155C",
				"sha1": "02D546B64CE95D2112D1909083BE794653AB780E",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "RAISINS 03 CAPCOM",
								"size": "128k",
								"crc": "8D97155C",
								"sha1": "02D546B64CE95D2112D1909083BE794653AB780E"
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
					"cic": [
						{
							"$": {
								"type": "6113A"
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
