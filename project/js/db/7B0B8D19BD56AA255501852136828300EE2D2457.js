this.NesDb = this.NesDb || {};

NesDb[ '7B0B8D19BD56AA255501852136828300EE2D2457' ] = {
	"$": {
		"name": "Astérix",
		"class": "Licensed",
		"catalog": "NES-AX-UKV",
		"publisher": "Infogrames",
		"developer": "Bit Managers",
		"region": "United Kingdom",
		"players": "1",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "ED77B453",
				"sha1": "7B0B8D19BD56AA255501852136828300EE2D2457",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-21"
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
								"name": "PAL-AX-0 PRG",
								"size": "128k",
								"crc": "ED77B453",
								"sha1": "7B0B8D19BD56AA255501852136828300EE2D2457"
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
