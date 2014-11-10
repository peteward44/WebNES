this.NesDb = this.NesDb || {};

NesDb[ '0872D0D7CE758A1D309A9C47DDCB7A505794540B' ] = {
	"$": {
		"name": "Titan Warriors",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-5W-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "8366CF72",
				"sha1": "0872D0D7CE758A1D309A9C47DDCB7A505794540B",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2008-06-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNEPROM",
						"pcb": "NES-UNEPROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "タイタン ウオーリャズ CAPCOM",
								"size": "128k",
								"crc": "8366CF72",
								"sha1": "0872D0D7CE758A1D309A9C47DDCB7A505794540B"
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
