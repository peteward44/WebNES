this.NesDb = this.NesDb || {};

NesDb[ 'AB207029D164BAAF87C802E4FDBBA06B575AEC06' ] = {
	"$": {
		"name": "DuckTales 2, Disney's: la Bande a Picsou",
		"class": "Licensed",
		"catalog": "NES-DL-FRA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "France",
		"players": "1",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "30C5E6CF",
				"sha1": "AB207029D164BAAF87C802E4FDBBA06B575AEC06",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "FRA-DL-0 PRG",
								"size": "128k",
								"crc": "30C5E6CF",
								"sha1": "AB207029D164BAAF87C802E4FDBBA06B575AEC06"
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
								"type": "3195A"
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
