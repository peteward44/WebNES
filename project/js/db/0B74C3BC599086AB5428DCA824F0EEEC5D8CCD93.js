this.NesDb = this.NesDb || {};

NesDb[ '0B74C3BC599086AB5428DCA824F0EEEC5D8CCD93' ] = {
	"$": {
		"name": "Thunder & Lightning",
		"class": "Licensed",
		"catalog": "NES-4T-USA",
		"publisher": "Romstar",
		"developer": "Visco",
		"region": "USA",
		"players": "2",
		"date": "1990-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D80B44BC",
				"sha1": "0B74C3BC599086AB5428DCA824F0EEEC5D8CCD93",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-GNROM",
						"pcb": "NES-GNROM-05",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "NES-4T-0 PRG",
								"size": "128k",
								"crc": "7BF67199",
								"sha1": "F5A294A0D3CF7FDD39A3B6EEF67D62451CEE8269"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-4T-0 CHR",
								"size": "32k",
								"crc": "A491139B",
								"sha1": "D83F6AE061B6B814C79093F8A0E351807F3539F2"
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
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
